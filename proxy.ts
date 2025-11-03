import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const SECRET = "clave-secreta-supersegura";

export function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const isDashboard = req.nextUrl.pathname.startsWith("/dashboard");
  const isLogin = req.nextUrl.pathname.startsWith("/login");

  // Si intenta acceder al dashboard sin token
  if (isDashboard && !token) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Si ya tiene token y entra a /login, redirigir al dashboard
  if (isLogin && token) {
    try {
      jwt.verify(token, SECRET);
      const url = req.nextUrl.clone();
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    } catch {
      // token inválido -> continúa al login
    }
  }

  // Si hay token, validar
  if (token) {
    try {
      jwt.verify(token, SECRET);
    } catch {
      // Token expirado o inválido -> eliminar cookie
      const res = NextResponse.next();
      res.cookies.delete("token");
      return res;
    }
  }

  return NextResponse.next();
}
