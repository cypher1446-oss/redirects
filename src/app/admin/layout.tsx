import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 🔒 अगर user logged in नहीं है → login page पर भेज दो
  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
