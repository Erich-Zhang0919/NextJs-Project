/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextResponse } from "next/server";


export function GET(request: Request) {
    
}


export async function POST(request: Request) {
    const data = await request.json();
    return NextResponse.json({
        code: 0,
        message: '添加成功',
        data
    })
}