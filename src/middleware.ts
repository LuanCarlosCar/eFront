import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;

  const signInURL = new URL("/", request.url);

  if (!token) {
    if (request.nextUrl.pathname === "/") return NextResponse.next();

    return NextResponse.redirect(signInURL);
  }

  const dashboardInURL = new URL("/dashboard", request.url);

  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(dashboardInURL);
  }
}

export const config = {
  matcher: ["/", "/dashboard"],
};
