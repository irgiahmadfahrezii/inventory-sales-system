import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default function DashboardPage() {
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
    </div>
    );
}