import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { createCategory, deleteCategory } from "./actions";

export default async function CategoriesPage() {
  const userId = await getSession();

  if (!userId) {
    redirect("/login");
  }

  const categories = await prisma.category.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-10 max-w-xl">
      <h1 className="text-xl font-bold mb-4">
        Categories
      </h1>

      <form action={createCategory} className="flex gap-2 mb-6">
        <input
          name="fill_name_cat"
          placeholder="Nama kategori"
          className="flex-1 border px-3 py-2 rounded"
        />
        <button className="bg-purple-600 text-white px-4 rounded cursor-pointer">
          Tambah
        </button>
      </form>

      <ul className="space-y-2">
        {categories.map((cat) => (
          <li
            key={cat.id}
            className="flex justify-between items-center border px-3 py-2 rounded"
          >
            <span>{cat.name}</span>

            <form action={deleteCategory.bind(null, cat.id)}>
              <button className="text-red-600 cursor-pointer">
                Hapus
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
