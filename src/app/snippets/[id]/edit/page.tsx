import { db } from '@/db';
import React from 'react'
import Edit from '@/app/components/edit';

export default async function Page({ params }: {params: { id: string }} ) {
    const id = parseInt(params.id);
    const snipeet = await db.snippet.findFirst({
        where: { id }
    })
    return (
        <div>
            <Edit snippet={snipeet!}/>
        </div>
    )
}
