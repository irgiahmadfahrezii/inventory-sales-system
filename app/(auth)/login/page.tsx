"use client" ;

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault() ;
    setError("") ;
    setLoading(true) ;

    const formData = new FormData(e.currentTarget);

    const email     = formData.get("fill_email") ;
    const password  = formData.get("fill_password") ;

    if(!email || !password) {
      setError("Email dan Password wajib diisi !!") ;
      setLoading(false) ;
      return;
    }

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }) ;

    setLoading(false) ;

    if(!res.ok) {
      setError("Email atau Password salah");
      return;
    }

    router.push("/dashboard") ;
  }

  return(
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow">
        <h1 className="text-xl font-bold mb-4 text-black text-center">
          Login
        </h1>

        {error && (
          <p className="mb-3 text-sm text-red-600 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-black">
              Email
            </label>
            <input
              type="email"
              name="fill_email"
              className="w-full border border-purple-600 focus:outline focus:outline-purple-700 focus:border-purple-700 text-black rounded px-3 py-2"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-black">
              Password
            </label>
            <input
              type="password"
              name="fill_password"
              className="w-full border border-purple-600 focus:outline focus:outline-purple-700 focus:border-purple-700 text-black rounded px-3 py-2"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white py-2 rounded cursor-pointer"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}