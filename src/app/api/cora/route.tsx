import { CoraRequest, CoraResponse } from "@/app/types";

export async function POST(request: Request): Promise<Response>{
    const body: CoraRequest = await request.json();
    const header = request.headers;
    console.log(header);
    try{
        const res = await fetch(process.env.CORA_API_URL ?? "", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
                "authorization": `Bearer ${process.env.AUTH_TOKEN}`
            },
            body: JSON.stringify(body),
        });

        if(!res.ok){
            return new Response(
                JSON.stringify({ error: res.statusText }),
                { status: res.status }
            );
        }

        const data: CoraResponse = await res.json();
        
        return new Response(
            JSON.stringify(data),
            { status: res.status }
        );
    } catch(e){
        return new Response(
            JSON.stringify({ reply: "Connection Failed !!" }),
            { status: 500 }
        );
    }};