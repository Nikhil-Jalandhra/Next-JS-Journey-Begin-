import { NextResponse } from 'next/server'

export function middleware(request) {
  return NextResponse.rewrite(new URL('/', request.url))
}
 
export const config = {
  matcher: '/youtube',
}