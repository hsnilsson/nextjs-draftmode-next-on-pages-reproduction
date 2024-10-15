import { draftMode } from 'next/headers'
 
// Specify the Edge Runtime
export const runtime = "edge";

export async function GET(request: Request) {
  draftMode().disable()
  return new Response('Draft mode is disabled')
}
