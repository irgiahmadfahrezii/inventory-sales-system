"use server" ;

import { clearSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function logoutAction() {
    clearSession() ;
    redirect("/login");
}