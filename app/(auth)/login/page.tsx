import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { setSession } from "@/lib/session";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow">
        <h1 className="text-xl font-bold mb-4 text-black text-center">
          Login
        </h1>

        <form action={loginAction} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              name="fill_email"
              className="w-full border border-purple-600 focus:outline focus:outline-purple-700 focus:border-purple-700 focus:border-purple-700 text-black rounded px-3 py-2"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">
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
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

async function loginAction(formData: FormData) {
    "use server" ;

    const email = formData.get("fill_email") as string ;
    const password = formData.get("fill_password") as string ;

    if(!email || !password){
        throw new Error("Email dan Password wajib Diisi !!") ;
    }

    const user = await prisma.user.findUnique({
        where: { email },
    });

    if(!user || user.password !== password) {
        throw new Error("Email atau Password Salah !") ;
    }

    setSession(user.id) ;
    redirect("/dashboard");
}