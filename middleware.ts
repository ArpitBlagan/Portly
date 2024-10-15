import { NextRequest, NextResponse } from "next/server";

const protectedPaths = ["/signin", "/signup"];
const anotherPaths = ["/ports", "/profile"];
const isAuthenticated = (req: NextRequest) => {
  const sessionToken = req.cookies.get("next-auth.session-token"); // Adjust based on your auth mechanism
  return sessionToken !== undefined; // Return true if authenticated
};
export default function middlware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  console.log(pathname);
  if (isAuthenticated(req) && protectedPaths.includes(pathname)) {
    // Redirect to home page or another desired route

    return NextResponse.redirect(new URL("/", req.url));
  } else if (!isAuthenticated(req)) {
    if (anotherPaths.includes(pathname)) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/signin", "/signup", "/ports", "/profile"], // Apply only to these paths
};
