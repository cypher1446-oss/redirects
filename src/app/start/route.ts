import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const uid = searchParams.get("uid");

  if (!code || !uid) {
    return new NextResponse("Missing parameters", { status: 400 });
  }

  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("project_code", code)
    .single();

  if (error || !project) {
    return new NextResponse("Project not found", { status: 404 });
  }

  if (project.status === "paused") {
    return new NextResponse("Survey temporarily unavailable");
  }

  await supabase.from("responses").insert({
    project_id: project.id,
    uid,
    status: "click"
  });

  return NextResponse.redirect(project.base_url + uid);
}
