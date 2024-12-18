import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    console.log(request.nextUrl.pathname, 'xxxx');
}

export const config = {
    matcher: ['/dashboard'],
}