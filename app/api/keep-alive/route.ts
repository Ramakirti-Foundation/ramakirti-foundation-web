import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

// This route runs every 10 minutes to prevent Supabase from pausing the database.
export async function GET() {
  try {
    // A tiny, fast query that forces the database connection to stay alive
    await db.$queryRaw`SELECT 1`;
    return NextResponse.json({ status: 'ok', message: 'Database is awake!' });
  } catch (error) {
    console.error('Keep-alive ping failed:', error);
    return NextResponse.json({ status: 'error', message: 'Failed to wake database' }, { status: 500 });
  }
}
