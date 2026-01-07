import { prisma } from "@/lib/prisma";

export default async function Home() {
  const categories = await prisma.category.findMany();

  return (
    <div className="p-10">
      <pre>{JSON.stringify(categories, null, 2)}</pre>
    </div>
  );
}
