import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function GET(request: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { searchParams } = new URL(request.url)
  const projectId = searchParams.get("pid")
  const uid = searchParams.get("uid")

  if (!projectId || !uid) {
    return NextResponse.json(
      { message: "Missing pid or uid" },
      { status: 400 }
    )
  }

  const forwarded = request.headers.get("x-forwarded-for")
  const ip = forwarded ? forwarded.split(",")[0] : "unknown"
  const userAgent = request.headers.get("user-agent") || "unknown"

  const startTime = new Date()
  const endTime = new Date()

  const durationSeconds =
    Math.floor((endTime.getTime() - startTime.getTime()) / 1000)

  const { data, error } = await supabase
    .from("responses")
    .insert([
      {
        project_id: projectId,
        uid,
        status: "complete",
        ip,
        user_agent: userAgent,
        start_time: startTime,
        end_time: endTime,
        duration_seconds: durationSeconds
      }
    ])
    .select()
    .single()

  if (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    )
  }

  return NextResponse.redirect(
    `${request.nextUrl.origin}/result/${data.id}`
  )
}
