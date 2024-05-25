"use client";
import { handleSubmit } from "@/utils/function";
import { googleLogo } from "@/utils/images/svg";
import Link from "next/link";
import { Input } from "../ui/input";

export const SignUp = () => {
  return (
    <form className="flex flex-col gap-10" onSubmit={(e) => handleSubmit(e)}>
      <Input name="name" placeholder="name" type="text" />
      <Input name="email" placeholder="email" type="email" />
      <Input name="password" placeholder="password" type="password" />
      <div>
        <button
          type="submit"
          className="bg-primary rounded-sm text-white px-12 py-4 w-full font-medium text-base capitalize mb-4"
        >
          create account
        </button>
        <button className="flex flex-row justify-center items-center gap-4 border-input text-secondary font-normal text-base leading-6 py-4 w-full bg-white border rounded-md">
          <span>{googleLogo}</span> Sign up with Google
        </button>
      </div>
      <p className="text-base font-normal leading-6 text-center text-secondary opacity-80 flex flex-row items-center justify-center gap-4">
        <span>Already have account?</span>{" "}
        <Link
          href="/login"
          className="font-medium text-base leading-6 border-b border-secondary"
        >
          Log in
        </Link>
      </p>
    </form>
  );
};
