import { connectDB } from "@/BackendLogic/DbConfig/config";
import BlogSchema from "@/BackendLogic/Schema/BlogSchema"
import { NextResponse } from "next/server"



export async function GET(req){
  await connectDB()
  try {
    const userEmail =await req.headers.get('Authorization')

    if (userEmail===null) {
      console.log('Entered');
      throw new Error('Please login first')
    }
    console.log('Entered2');

    const userBlogs = await BlogSchema.find({user : userEmail})

    return NextResponse.json({msg : 'User Blogs Fetched', success : true, userBlogs},{status : 200})
  } catch (error) {
    console.log('222ffff');
    return NextResponse.json({msg : 'User Blogs Fetching Error',error :error.message, success : false},{status : 400})
  }
}