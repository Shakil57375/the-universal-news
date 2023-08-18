import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";
export const GET = async ({}) => {
   try {
    const db = await DbConnect();
    const allNews = db.collection('all-news');
    const result = await allNews.find().toArray();
    return NextResponse.json(result);
   } catch (error) {
    console.error(error)
    return NextResponse.json({error:'error to geting data'});
   }
};

