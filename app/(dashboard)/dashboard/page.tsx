import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import LogoutButton from "./logout-button";

export default async function DashboardPage() {
  const userId = await getSession();

  if (!userId) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="p-10">
      <LogoutButton />
      <h1 className="text-xl font-bold mb-2">Dashboard</h1>
      <p className="mb-4">Halo, {user.name}</p>
    </div>
  );
}
