import { prisma } from "@/lib/db";
import { exclude, hashPassword } from "@/utils/function";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return new Response(
      JSON.stringify({ success: 0, message: "Invalid inputs" }),
      { status: 400 }
    );
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
      },
    });
    if (user) {
      const isValidPassword = user.password === (await hashPassword(password));
      if (isValidPassword) {
        return new Response(
          JSON.stringify({ success: 1, data: exclude(user, ["password"]) }),
          { status: 200 }
        );
      } else {
        return new Response(
          JSON.stringify({ success: 0, message: "Wrong password or email!" }),
          { status: 400 }
        );
      }
    } else {
      return new Response(
        JSON.stringify({ success: 0, message: "User not found!" }),
        { status: 400 }
      );
    }
  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: 0, message: error.message }),
      { status: 500 }
    );
  }
}
