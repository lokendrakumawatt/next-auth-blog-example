import React from 'react'
import Show from './Show'
import { blogData } from '@/app/sever-actions/action'
const page = async({params}) => {
    const {slug} = await params
const a = await blogData(slug);
  return (
    <div>
      <Show a={a} />

    </div>
  )
}

export default page
