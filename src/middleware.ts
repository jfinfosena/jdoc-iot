import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { sessions } from './app/course/page.data';

export function middleware(request: NextRequest) {
    
    const path = request.nextUrl.pathname
    if(path=='/course'){
        return NextResponse.next()
    }
    const pathSplit = path.split("/");
    const parts = pathSplit.pop();

    let dateCurrent = new Date();
    dateCurrent.setHours(0,0,0,0);
  

    if (parts && sessions.hasOwnProperty(parts)) {
        let valorConstante = sessions[parts].date;
        valorConstante.setHours(0,0,0,0);
        if (dateCurrent >= valorConstante) {
            return NextResponse.next()
        }
    }
    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: ['/course/:path*'],
}