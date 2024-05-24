import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await prisma.category.findMany({});
    if (!categories) {
      return new Response(
        JSON.stringify({ success: 0, data: "No category founds" }),
        { status: 404 }
      );
    }
    return new Response(JSON.stringify({ success: 1, data: categories }), {
      status: 200,
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: 0, message: error.message }),
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await await req.json();
  try {
  } catch (error: any) {}
}
