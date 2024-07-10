import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    console.log("🚀 ~ middleware ~ pathname:", pathname)
    const session = null;   
    if (!session) return NextResponse.redirect('http://localhost:3000/csr');
    return NextResponse.next();
}

export const config = {
    matcher: ['/api/ttt', '/photos/:path*'],  //path* 는 상단에 pathname 을 향함 
  };
  