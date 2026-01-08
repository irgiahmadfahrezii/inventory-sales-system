import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import LogoutButton from "./dashboard/logout-button";


export default async function DashboardPage() {
    const userId = getSession() ;

    if(!userId){
        redirect("/login") ;
    }

    const user = await prisma.user.findUnique({
        where: {id: userId},
    }) ;

    return (
    <div className="p-10">
        <h1 className="text-xl font-bold">
            Dashboard
        </h1>
        <p>Halo, {user?.name}</p>

        <LogoutButton />
    </div>
    );
}