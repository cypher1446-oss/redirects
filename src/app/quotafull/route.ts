import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(request: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { searchParams } = new URL(request.url)

  const projectId = searchParams.get('pid')
  const uid = searchParams.get('uid')

  if (!projectId) {
    return NextResponse.json(
      { message: 'Missing project id' },
      { status: 400 }
    )
  }

  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0] : 'unknown'

  const { data, error } = await supabase
    .from('responses')
    .insert([
      {
        project_id: projectId,
        uid: uid,
        status: 'quotafull',
        ip: ip,
      },
    ])
    .select()
    .single()

  if (error || !data) {
    return NextResponse.json(
      { message: error?.message || 'Insert failed' },
      { status: 500 }
    )
  }

  return NextResponse.redirect(
    `${request.nextUrl.origin}/result/${data.id}`
  )
}


