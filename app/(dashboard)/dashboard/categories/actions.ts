"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createCategory(formData: FormData) {
  const name = formData.get("fill_name") as string;

  if (!name) {
    throw new Error("Nama kategori wajib diisi");
  }

  await prisma.category.create({
    data: { name },
  });

  revalidatePath("/dashboard/categories");
}

export async function deleteCategory(id: string) {
  await prisma.category.delete({
    where: { id },
  });

  revalidatePath("/dashboard/categories");
}
