import { connectDB } from "@/BackendLogic/DbConfig/config"
import BlogSchema from "@/BackendLogic/Schema/BlogSchema"
import { NextResponse } from "next/server"


export async function POST(req){
  await connectDB()
  try {
    const userEmail = await req.headers.get("Authorization");
    // return console.log(userEmail, 'This is user email');
    const {title , description, about, tags, img} =await req.json()

    const CreatedBlog = BlogSchema({
      title,
      description,
      about,
      tags,
      img,
      user : userEmail
    })
   await CreatedBlog.save()

   return NextResponse.json({msg : 'Blog Created', success : true, CreatedBlog }, {status :201})

  } catch (error) {
    console.log(error);
    return NextResponse.json({msg : 'Blog Creation failed',error, success : false}, {status :400})
  }
}