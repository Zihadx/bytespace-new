"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";

import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Label } from "@/components/ui/label";

const gridBackground = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.1) 2px, transparent 2px)",
  backgroundSize: "8.333vw 8.333vw",
};

const inputClassName =
  "mt-2 h-12 rounded-lg border-gray-300 px-5 shadow-none focus-visible:border-[#D4FF1F] focus-visible:ring-[#D4FF1F]/50";

function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ name, email, password });
  }

  return (
    <main
      className="min-h-screen bg-[#0038F5] p-6"
      style={gridBackground}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 pt-10 lg:flex-row">
        <div className="flex flex-1 flex-col gap-6 text-white">
          <Link href="/">
            <Image
              src="/images/logo_vector.png"
              alt="ByteSpace"
              width={40}
              height={40}
            />
          </Link>

          <div>
            <h2 className="text-lg font-semibold">Sign up and come in</h2>

            <p className="mt-2 max-w-lg font-light leading-relaxed">
              The registration process is straightforward, uncomplicated,
              and efficient, allowing users to sign up quickly, easily,
              and at no cost.
            </p>
          </div>

          <Image
            src="/images/signup.png"
            alt="Course preview"
            width={500}
            height={420}
            className="mt-6 hidden h-146.25 w-full object-contain lg:block"
          />
        </div>

        <div className="flex min-h-175 w-full flex-col rounded-3xl bg-white p-8 sm:p-12 lg:w-[45%]">
          <p className="text-[#0038F5]">Create an Account</p>

          <h1 className="mt-1 text-4xl font-semibold text-gray-900">
            Welcome to
            <br />
            ByteSpace
          </h1>

          <form onSubmit={handleSignup} className="mt-10 space-y-6">
            <div>
              <Label htmlFor="name">Full Name</Label>

              <Input
                id="name"
                type="text"
                placeholder="Jamie Davis"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClassName}
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
                placeholder="designer@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClassName}
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>

              <Input
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputClassName}
              />
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                className="h-12 rounded-full bg-[#D4FF1F] px-10 text-gray-900 hover:bg-[#D4FF1F]/90 focus-visible:ring-[#D4FF1F]/50"
              >
                Continue
              </Button>
            </div>
          </form>

          <p className="mt-auto pt-8 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/signin" className="text-[#0038F5] hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default SignUpPage;