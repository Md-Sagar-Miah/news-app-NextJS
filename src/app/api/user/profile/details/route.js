import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"
import { headers } from "next/headers";
export async function GET(req, res) {
    try {

        let headerList = headers();
        let id = parseInt(headerList.get('id'));

        const prisma = new PrismaClient();
        const result = await prisma.users.findUnique(
            {
                where: { id: id },
                include: { comments: true }
            })
        return NextResponse.json({ status: "success", data: result })


    } catch (e) {
        return NextResponse.json({ status: "fail", data: e.toString() })
    }
}