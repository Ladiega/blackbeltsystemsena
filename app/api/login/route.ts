import { NextResponse } from "next/server";
import { generateToken } from "@/lib/jwt";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // ⚙️ Simulación básica
  if (email === "admin@example.com" && password === "123456") {
    const token = generateToken({ email });

    const response = NextResponse.json({ success: true });
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    });

    return response;
  }

  return NextResponse.json(
    { success: false, message: "Credenciales inválidas" },
    { status: 401 }
  );
}
