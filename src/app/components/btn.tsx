'use client'
import { deleteSnippet } from '@/actions'
import React from 'react'

interface params {
    id: number,
}
export default function btn(props: params) {
    const handleDelete = () => {
        deleteSnippet(props.id);
    }
  return (
    <div>
      <button onClick={handleDelete} className='p-2 rounded border border-teal-500'>Delete</button>
    </div>
  )
}
