import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export async function GET(request: Request) {
  const token = request.headers.get("authorization")?.split(" ")[1];
  if (!token) return NextResponse.json({ valid: false });

  const decoded = verifyToken(token);
  return NextResponse.json({ valid: !!decoded });
}
