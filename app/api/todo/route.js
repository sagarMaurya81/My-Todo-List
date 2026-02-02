import { NextResponse } from "next/server";
import { MongoClient } from 'mongodb'
import { ObjectId } from "mongodb";

const url = process.env.MONGODB_URI;
const client = new MongoClient(url);

const dbName = 'todoss';
await client.connect();
const db = client.db(dbName);
const collection = db.collection('todo');
export async function POST(request) {


    const body = await request.json();
    const { task } = body;
    await collection.insertOne({ task })
    console.log(body);

    return NextResponse.json({ message: true });
}

export async function GET(request) {
   const data =  await collection.find({}).toArray()
   return NextResponse.json(data)
}

export async function DELETE(request) {
  const body = await request.json();
  const { _id } = body;
  const res = await collection.deleteOne({ _id: new ObjectId(_id) });
  console.log(res);
  return NextResponse.json({message:true})
}
