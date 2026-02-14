import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(
  request: NextRequest,
  { params }: { params: { uuid: string } }
) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const projectId = params.uuid
  const { searchParams } = new URL(request.url)
  const uid = searchParams.get('uid') || 'unknown'

  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0] : 'unknown'
  const userAgent = request.headers.get('user-agent') || 'unknown'

  // Insert start record
  await supabase.from('responses').insert({
    project_id: projectId,
    uid,
    status: 'started',
    ip,
    user_agent: userAgent,
    start_time: new Date().toISOString()
  })

  return NextResponse.redirect("https://google.com")
}
