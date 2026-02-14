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
  const isAdminRoute = pathname.startsWith("/admin");
  const isUserProtectedPage =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/attendance") ||
    pathname.startsWith("/members") ||
    pathname.startsWith("/user-profile") ||
    pathname.startsWith("/gyms");

  if (!token && (isUserProtectedPage || isAdminRoute)) {
    return NextResponse.rewrite(new URL("/404", req.url));
  }

  if (!token && isApiRoute) {
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  }

  if (token) {
    try {
      const decoded = verifyToken(token);
      if (isAdminRoute && decoded.role !== "super_admin") {
        return NextResponse.rewrite(new URL("/404", req.url));
      }

      return NextResponse.next();
    } catch {
      return NextResponse.rewrite(new URL("/404", req.url));
    }
  }

  return NextResponse.next();
}