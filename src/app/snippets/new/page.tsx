import { db } from '@/db';
import React from 'react'
import { createSnippet } from '@/actions';

export default function page() {
  return (
    <form action={createSnippet as any}>
        <h3 className='font-bold m-3 text-center'>Create a Snippet</h3>
        <div className='flex flex-col gap-4'>
            <div>
                <label htmlFor="title" className='w-12'>Title</label>
                <input type="text" name='title' className='border border-teal-500 p-2 rounded w-full' />
            </div>
            <div>
                <label htmlFor="code" className='w-12'>Code</label>
                <input type="text" name='code' className='border border-teal-500 p-2 rounded w-full' />
            </div>
            <button className='rounded p-2 bg-blue-200' type='submit'>Create</button>
        </div>
    </form>
  )
}
