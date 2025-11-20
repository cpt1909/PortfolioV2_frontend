import Error from "next/error";
import clientPromise from "../mongodb_connection";
import { Skill } from "@/app/types";

export async function GET(): Promise<Response> {

  try {
    const client = await clientPromise;
    const db = client.db("portfolio_data");

    const skills: Skill[] = await db
      .collection<Skill>("skills")
      .find({}, { projection: { _id: 0 } })
      .toArray();

    return new Response(JSON.stringify({
      skills: skills,
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }catch(err){
    return new Response(
      JSON.stringify({ error: "Failed to connedt to DB !!" }),
      { status: 500 }
  )};
};