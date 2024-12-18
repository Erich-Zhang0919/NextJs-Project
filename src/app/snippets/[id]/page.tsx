import { db } from '@/db';
import sleep from '@/utils';
import Link from 'next/link'
import React from 'react'
import SnippetBtn from '../../components/btn'

interface Props {
    params: {
        id: string,  // required prop from the route parameter
    }
}
export default async function page(props: Props) {
    const id = props.params.id;
    const snippet = await db.snippet.findFirst({
        where: {id: parseInt(id)}
    })
    if (!snippet) {
        return <div>Not Found</div>
    }
    return (
    <>
        <div className='flex items-center justify-between mt-10'>
            <h1 className='font-bold text-lg'>Function</h1>
            <div className='flex gap-4'>
                <Link
                className='p-2 border border-teal-500 rounded'
                href={`/snippets/${id}/edit`}
                >Edit</Link>
                {/* 这里的+号转成number */}
                    <SnippetBtn id={+id}/>
            </div>
        </div>
        <pre className='p-3 border border-teal-500 rounde bg-gray-200 mt-6'>
            <code>{snippet.code}</code>
        </pre>
    </>
    )
}

// SSG 静态构建的页面
export async function generateStaticParams() {
    const snippets = await db.snippet.findMany();
    return snippets.map((snippet) => 
        ({ id: snippet.id.toString() 
    }));
}
