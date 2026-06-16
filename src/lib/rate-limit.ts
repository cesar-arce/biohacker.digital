/**
 * Simple in-memory sliding-window rate limiter.
 * Each serverless instance has its own store — good enough for abuse prevention
 * on a low-traffic site. Upgrade to Upstash Redis if traffic grows significantly.
 */

interface Entry {
  count: number;
  resetAt: number;
}

const store = new Map<string, Entry>();

// Clean up expired entries every 5 minutes to avoid memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of store.entries()) {
    if (entry.resetAt < now) store.delete(key);
  }
}, 5 * 60 * 1000);

/**
 * Returns true if the request is allowed, false if rate limit exceeded.
 * @param key      Unique identifier (e.g. "newsletter:1.2.3.4")
 * @param limit    Max requests allowed in the window
 * @param windowMs Window duration in milliseconds
 */
export function rateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const entry = store.get(key);

  if (!entry || entry.resetAt < now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= limit) return false;

  entry.count += 1;
  return true;
}

/** Extract IP from Next.js request headers (works on Vercel). */
export function getIP(req: Request): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  );
}
