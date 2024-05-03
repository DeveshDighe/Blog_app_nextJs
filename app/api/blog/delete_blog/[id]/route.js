import BlogSchema from "@/BackendLogic/Schema/BlogSchema"
import { NextResponse } from "next/server"


export async function DELETE (req, content){
  try {
    const id = await content.params.id

    const removedBlog = await BlogSchema.findByIdAndDelete(id)

    return NextResponse.json({msg : 'Blog deleted', success : true, removedBlog})
  } catch (error) {
    return NextResponse.json({msg : 'Error in Blog deletion', success : false})
  }
}