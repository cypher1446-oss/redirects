"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email,
    });

    if (!error) {
      alert("Check your email for login link");
    } else {
      alert(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Enter admin email"
          className="w-full border rounded-lg px-4 py-2 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded-lg"
        >
          {loading ? "Sending..." : "Send Magic Link"}
        </button>
      </div>
    </div>
  );
}
