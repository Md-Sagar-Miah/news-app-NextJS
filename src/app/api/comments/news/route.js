import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        const prisma = new PrismaClient();
        const { searchParams } = new URL(req.url);
        const postId = parseInt(searchParams.get("postId"));
        const result = await prisma.comments.findMany({
            where: { postID: postId },
            include: {
                users: {
                    select: { firstName: true, lastName: true }
                }
            }
        })
        return NextResponse.json({ status: "success", data: result })
    } catch (error) {
        return NextResponse({ status: "failed", error: error.toString() }, { status: 406 })
    }
}