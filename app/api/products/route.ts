import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const products = await prisma.products.findMany({});
    if (!products) {
      return new Response(
        JSON.stringify({ success: 0, data: "No products founds" }),
        { status: 404 }
      );
    }
    return new Response(JSON.stringify({ success: 1, data: products }), {
      status: 200,
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
    });
  }
}
