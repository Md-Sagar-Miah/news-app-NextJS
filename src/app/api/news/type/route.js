import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        const prisma = new PrismaClient();
        const { searchParams } = new URL(req.url);
        const type = searchParams.get("type");
        const result = await prisma.news_list.findMany({
            where: { type: type },
            select: { id: true, title: true, short_des: true, img1: true, img2: true, img3: true, img4: true }
        })
        return NextResponse.json({ status: "success", data: result });
    } catch (error) {
        return NextResponse.json({ status: "failed", error: error.toString() });
    }
}