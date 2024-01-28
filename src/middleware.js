import { NextResponse } from "next/server";
import { VerifyToken } from "./utility/JWTTokenHelper";


export async function middleware(req, res) {
    try {
        const token = req.cookies.get("token");
        const payload = await VerifyToken(token["value"]);
        const requestHeader = new Headers(req.headers);
        requestHeader.set("email", payload["email"]);
        requestHeader.set("id", payload["id"]);
        return NextResponse.next({
            request: { headers: requestHeader }
        })
    } catch (error) {
        const requestHeader = new Headers(req.headers);
        requestHeader.set("email", "");
        requestHeader.set("id", "");
        return NextResponse.next({
            request: { headers: requestHeader }
        })

    }
}