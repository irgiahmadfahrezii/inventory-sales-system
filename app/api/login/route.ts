import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    const {email, password} = await request.json() ;
    
    const user = await prisma.user.findUnique({
        where: { email },
    }) ;

    if(!user || user.password !== password){
        return NextResponse.json(
            { message: "Unautorized" },
            { status: 401 }
        );
    }

    const response = NextResponse.json({ success: true });

    response.cookies.set("user_id", user.id, {
        httpOnly: true,
        path: "/",
    });

    return response;
}