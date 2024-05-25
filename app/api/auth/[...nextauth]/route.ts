import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const GOOGLE_ID = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;

const prisma = new PrismaClient();

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
