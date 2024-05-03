import { connectDB } from "@/BackendLogic/DbConfig/config";
import BlogSchema from "@/BackendLogic/Schema/BlogSchema";
import { NextResponse } from "next/server";


export async function GET(req , content){
  await connectDB()
  try {
    console.log(await content.params.id , 'This is [aram issiisi');

    const id =await content.params.id
    const singleBlog = await BlogSchema.findById(id)

    if (!singleBlog) {
      throw new Error('Error in Blog Fetching')
    }
    console.log('123456');

    console.log(singleBlog , 'This is single Blog');
    return NextResponse.json({msg : 'Blog fetched', success : true, singleBlog} , {status : 200})
    
  } catch (error) {
    console.log(error, 'This is backned ttatat');
    return NextResponse.json({msg : 'Blog fetching Failed', error, success : false} , {status : 400})
  }
}