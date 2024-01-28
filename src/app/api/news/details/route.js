import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        const prisma = new PrismaClient();
        const { searchParams } = new URL(req.url);
        const id = parseInt(searchParams.get("id"));
        const result = await prisma.news_list.findUnique({
            where: { id: id },
            include: { categories: true, comments: true }
        })
        return NextResponse.json({ status: "success", data: result });

    } catch (error) {
        return NextResponse.json({ status: "failed", error: error.toString() });
    }
}