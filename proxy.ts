import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const pathname = req.nextUrl.pathname;

  const publicRoutes = [
    "/",
    "/signin",
    "/signup",
    "/api/auth/signin",
    "/api/auth/signup",
    "/api/auth/signout",
  ];

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  const isApiRoute = pathname.startsWith("/api");
  const isProtectedPage =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/attendance") ||
    pathname.startsWith("/members") ||
    pathname.startsWith("/user-profile");

  if (isApiRoute && !token) {
    return NextResponse.json(
      { message: "Not Found" },
      { status: 404 }
    );
  }

  if (isProtectedPage && !token) {
    return NextResponse.rewrite(new URL("/404", req.url));
  }

  if (token) {
    try {
      verifyToken(token);
      return NextResponse.next();
    } catch {
      return NextResponse.rewrite(new URL("/404", req.url));
    }
  }

  return NextResponse.next();
}