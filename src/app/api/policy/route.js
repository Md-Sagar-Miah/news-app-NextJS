import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"

export async function GET(req, res) {
    try {
        const prisma = new PrismaClient();
        const { searchParams } = new URL(req.url);
        const type = searchParams.get('type');
        const result = await prisma.policies.findMany({ where: { type: type } })
        return NextResponse.json({ status: "success", data: result })
    }
    catch (error) {
        return NextResponse.json({ status: "fail", error: error.toString() })
    }
}