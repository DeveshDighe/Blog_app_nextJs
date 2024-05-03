'use client'
import React, { useState } from 'react'
import { api } from '../AxiosConfig/config'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { MdDelete } from 'react-icons/md'

const DeleteButton = ({id}) => {

  const navigate = useRouter()

  const handleDelete =async (id) => {
    try {
      const response = await api.delete(`api/blog/delete_blog/${id}`)
      console.log(response , 'delete response');

      if (response.data.success) {
        toast.success(response.data.msg)
        navigate.push('/')
      }
    } catch (error) {
      console.log(error , 'Delete error');
      console.log(error.response.data.msg);
    }
  }

  return (
    <button  onClick={()=>handleDelete(id)} className="  px-6  bg-red-500 py-1 rounded-md"><MdDelete  size={25}  color="white" /></button>
  )
}

export default DeleteButton