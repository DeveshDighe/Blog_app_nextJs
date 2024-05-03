import { connectDB } from "@/BackendLogic/DbConfig/config";
import BlogSchema from "@/BackendLogic/Schema/BlogSchema";
import { NextResponse } from "next/server";


export async function GET(req){
  await connectDB()
  const aaa = await req.headers.get('name')
  console.log(aaa , 'Thususususuusususususususususuusu');
  try {
    console.log('kkkkkkkk');
    const allBlogs = await BlogSchema.find()
    return NextResponse.json({msg : 'All Blogs fetched', success : true , allBlogs}, {status : 200})
  } catch (error) {
    console.log(error , "this is error get blogs");
    return NextResponse.json({msg : 'Blogs fetcheing failed',error : error, success : false}, {status : 400})
  }
}
export async function POST(req){
  connectDB()
  try {
    const tags =await req.json()
    console.log(tags , 'This are tags');
    console.log('kkkkkkkk');
    let allTagBlogs;

    if (!tags.length) {
      const allData = await BlogSchema.find()
      allTagBlogs = allData.reverse()
    }else{
       const TagsBlog = await BlogSchema.find({tags : {$in : tags}})
       allTagBlogs = TagsBlog.reverse()
    }
    console.log(allTagBlogs ,'tagagagag');
    return NextResponse.json({msg : 'All Blogs fetched', success : true , allTagBlogs}, {status : 200})
  } catch (error) {
    console.log(error , "this is error get blogs");
    return NextResponse.json({msg : 'Blogs fetcheing failed',error : error, success : false}, {status : 400})
  }
}