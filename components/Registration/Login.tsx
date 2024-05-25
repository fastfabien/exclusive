"use client";
import { handleSubmit } from "@/utils/function";
import { googleLogo } from "@/utils/images/svg";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Input } from "../ui/input";

export const Login = () => {
  return (
    <form
      className="flex flex-col gap-10"
      onSubmit={(e) => handleSubmit(e)}
      noValidate
    >
      <Input name="email" placeholder="email" type="email" />
      <Input name="password" placeholder="password" type="password" />
      <div className="flex flex-row items-center justify-between">
        <button
          type="submit"
          className="bg-primary rounded-sm text-white px-12 py-4 w-fit font-medium text-base capitalize"
        >
          log in
        </button>
        <Link
          href="/reset-password"
          className="text-primary font-normal text-base leading-6"
        >
          Forget Password?
        </Link>
      </div>
      <button
        className="flex flex-row justify-center items-center gap-4 border-input text-secondary font-normal text-base leading-6 py-4 w-full bg-white border rounded-md"
        onClick={() => signIn("google")}
      >
        <span>{googleLogo}</span> Login with google
      </button>
      <p className="text-base font-normal leading-6 text-center text-secondary opacity-80 flex flex-row items-center justify-center gap-4">
        <span>Don&apos;t have account?</span>{" "}
        <Link
          href="/signup"
          className="font-medium text-base leading-6 border-b border-secondary"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};
