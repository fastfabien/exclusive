import { prisma } from "@/lib/db";
import { exclude, hashPassword } from "@/utils/function";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json();
  const hashedPassword = await hashPassword(password);
  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });
    return new Response(
      JSON.stringify({
        success: 1,
        message: "Account created!",
        data: exclude(user, ["password"]),
      }),
      { status: 201 }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        success: 0,
        message: "email or user already registered",
      })
    );
  }
}
