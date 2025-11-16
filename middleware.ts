import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const path = request.nextUrl.pathname;

  // Public paths that don't require authentication
  const publicPaths = ['/', '/login', '/signup', '/blog', '/about', '/contact'];
  const isPublicPath = publicPaths.includes(path) || path.startsWith('/api/auth');

  // Protected paths
  const protectedPaths = ['/dashboard', '/profile', '/editor'];
  const isProtectedPath = protectedPaths.some(p => path.startsWith(p));

  // Redirect to login if accessing protected path without token
  if (isProtectedPath && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Redirect to dashboard if accessing login/signup while authenticated
  if ((path === '/login' || path === '/signup') && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};