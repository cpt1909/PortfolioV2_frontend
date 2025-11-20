import { MongoClient } from "mongodb";

const url: string = process.env.DB_CONNECTION_STRING ?? "";

const client: MongoClient = new MongoClient(url);
const clientPromise: Promise<MongoClient> = client.connect();

export default clientPromise;