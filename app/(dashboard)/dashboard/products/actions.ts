"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createProduct(formData: FormData) {
  const name = formData.get("fill_name_prod") as string;
  const priceBuy = Number(formData.get("priceBuy"));
  const priceSell = Number(formData.get("priceSell"));
  const categoryId = formData.get("categoryId") as string;

  if (!name || !categoryId) {
    throw new Error("Data produk tidak lengkap");
  }

  await prisma.product.create({
    data: {
      name,
      priceBuy,
      priceSell,
      categoryId,
    },
  });

  revalidatePath("/dashboard/products");
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({
    where: { id },
  });

  revalidatePath("/dashboard/products");
}
