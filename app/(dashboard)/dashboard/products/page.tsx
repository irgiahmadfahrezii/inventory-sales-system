import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { createProduct, deleteProduct } from "./actions";

export default async function ProductsPage() {
  const userId = await getSession();

  if (!userId) {
    redirect("/login");
  }

  const categories = await prisma.category.findMany();
  const products = await prisma.product.findMany({
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-10 max-w-2xl">
      <h1 className="text-xl font-bold mb-4">
        Products
      </h1>

      {/* Form Tambah Product */}
      <form action={createProduct} className="space-y-3 mb-6">
        <input
          name="fill_name_prod"
          placeholder="Nama produk"
          className="w-full border px-3 py-2 rounded"
        />

        <div className="flex gap-2">
          <input
            name="priceBuy"
            type="number"
            placeholder="Harga beli"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            name="priceSell"
            type="number"
            placeholder="Harga jual"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <select
          name="categoryId"
          className="w-full border px-3 py-2 rounded"
        >
          <option value="" className="text-black">Pilih kategori</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id} className="text-black">
              {cat.name}
            </option>
          ))}
        </select>

        <button className="bg-purple-600 text-white px-4 py-2 rounded cursor-pointer">
          Tambah Produk
        </button>
      </form>

      {/* List Product */}
      <ul className="space-y-2">
        {products.map((product) => (
          <li
            key={product.id}
            className="border px-3 py-2 rounded flex justify-between"
          >
            <div>
              <p className="font-medium">{product.name}</p>
              <p className="text-sm text-gray-600">
                {product.category.name}
              </p>
            </div>

            <form action={deleteProduct.bind(null, product.id)}>
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
