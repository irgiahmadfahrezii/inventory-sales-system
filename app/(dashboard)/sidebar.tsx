"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
  }

  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-6 font-bold text-lg text-purple-700">
        Inventory App
      </div>

      <nav className="px-4 space-y-2">
        <Link
          href="/dashboard"
          className="block px-3 py-2 rounded hover:bg-purple-100"
        >
          Dashboard
        </Link>

        <Link
          href="/dashboard/categories"
          className="block px-3 py-2 rounded hover:bg-purple-100"
        >
          Categories
        </Link>

        <Link
          href="/dashboard/products"
          className="block px-3 py-2 rounded hover:bg-purple-100"
        >
          Products
        </Link>

        <button
          onClick={handleLogout}
          className="w-full text-left px-3 py-2 rounded text-red-600 hover:bg-red-100"
        >
          Logout
        </button>
      </nav>
    </aside>
  );
}
