import { NextResponse, type NextRequest } from 'next/server'
import { draftMode } from 'next/headers'

export async function middleware(req: NextRequest) {

  const isDraftMode = draftMode().isEnabled

  console.log('draftMode().isEnabled from middleware:', isDraftMode)

  // Request is allowed, return response
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|img|assets|ui|favicon.ico).*)',
  ],
}
