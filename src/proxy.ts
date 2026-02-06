import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Sets a cookie with the visitor's country code (from Vercel's geo headers).
 * Used by the client to auto-select English for visitors outside Brazil.
 * On Vercel: X-Vercel-IP-Country is set automatically.
 * Locally or on other hosts: cookie stays unset, app defaults to PT.
 */
export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // Vercel sets this header in production; not available locally
  const country = request.headers.get('x-vercel-ip-country')?.toUpperCase();

  if (country) {
    response.cookies.set('x-country', country, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'lax',
    });
  }

  return response;
}
