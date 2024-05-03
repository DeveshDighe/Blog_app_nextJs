import BlogSchema from "@/BackendLogic/Schema/BlogSchema"
import { NextResponse } from "next/server"


export async function DELETE (req, content){
  try {
    const id = await content.params.id
    console.log('idddd', id);

    const removedBlog = await BlogSchema.findByIdAndDelete(id)

    return NextResponse.json({msg : 'Blog deleted', success : true, removedBlog})
  } catch (error) {
    console.log(error,'deletion error here');
    return NextResponse.json({msg : 'Error in Blog deletion', success : false})
  }
}