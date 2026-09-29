"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Poppins } from "next/font/google";

import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Label } from "@/components/ui/label";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ email, password });
  };

  return (
    <main
      className={`${poppins.className} min-h-screen bg-[#0038F5] p-6`}
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.1) 2px, transparent 2px)",
        backgroundSize: "8.333vw 8.333vw",
      }}
    >
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-6 text-white lg:w-1/2">
          <Link href="/">
            <Image
              src="/images/logo_vector.png"
              alt="ByteSpace logo"
              width={40}
              height={40}
            />
          </Link>

          <div>
            <h2 className="text-lg font-semibold">Welcome back</h2>

            <p className="mt-2 max-w-lg font-light leading-relaxed">
              Log in to continue learning, track your progress, and access
              everything available in your ByteSpace account.
            </p>
          </div>

          <Image
            src="/images/signup.png"
            alt="Course preview"
            width={500}
            height={420}
            className="mt-6 hidden h-[585px] w-full object-contain lg:block"
          />
        </div>

        <div className="flex min-h-[700px] w-full flex-col rounded-3xl bg-white p-8 sm:p-12 lg:w-[45%]">
          <p className="text-[#0038F5]">Welcome Back</p>

          <h1 className="mt-1 text-4xl font-semibold text-gray-900">
            Login to
            <br />
            ByteSpace
          </h1>

          <form onSubmit={handleLogin} className="mt-10 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
                placeholder="designer@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-lg border-gray-300 bg-white px-5 text-base shadow-none placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>

              <Input
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-lg border-gray-300 bg-white px-5 text-base shadow-none placeholder:text-gray-400"
              />
            </div>

            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm text-[#0038F5] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                className="h-12 rounded-full bg-[#D4FF1F] px-10 text-base font-medium text-gray-900 hover:bg-[#D4FF1F]/90"
              >
                Login
              </Button>
            </div>
          </form>

          <div className="mt-8">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-sm text-gray-400">or</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <div className="mt-5 flex justify-center gap-4">
              <Button
                type="button"
                variant="outline"
                className="h-14 w-14 rounded-2xl border-2 border-gray-300 p-0"
              >
                <svg
                  className="size-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.805 12.23C21.805 11.47 21.738 10.738 21.614 10.033H12V14.2H17.444C17.21 15.52 16.456 16.64 15.303 17.4V20.12H18.788C20.827 18.243 21.805 15.47 21.805 12.23Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 22C14.916 22 17.36 21.035 18.788 20.12L15.303 17.4C14.36 18.03 13.16 18.41 12 18.41C9.187 18.41 6.803 16.51 5.97 13.95H2.367V16.76C3.788 19.865 6.898 22 12 22Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.97 13.95C5.76 13.32 5.64 12.65 5.64 12C5.64 11.35 5.76 10.68 5.97 10.05V7.24H2.367C1.64 8.69 1.23 10.325 1.23 12C1.23 13.675 1.64 15.31 2.367 16.76L5.97 13.95Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.59C13.59 5.59 15.03 6.14 16.15 7.22L18.865 4.505C17.35 3.09 14.91 2 12 2C6.898 2 3.788 4.135 2.367 7.24L5.97 10.05C6.803 7.49 9.187 5.59 12 5.59Z"
                    fill="#EA4335"
                  />
                </svg>
              </Button>

              <Button
                type="button"
                variant="outline"
                className="h-14 w-14 rounded-2xl border-2 border-gray-300 p-0"
              >
                <svg
                  className="size-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 12C24 5.373 18.627 0 12 0C5.373 0 0 5.373 0 12C0 17.99 4.388 22.954 10.125 23.854V15.469H7.078V12H10.125V9.356C10.125 6.348 11.917 4.688 14.658 4.688C15.97 4.688 17.344 4.922 17.344 4.922V7.875H15.83C14.34 7.875 13.875 8.8 13.875 9.75V12H17.203L16.671 15.469H13.875V23.854C19.612 22.954 24 17.99 24 12Z"
                    fill="#1877F2"
                  />
                </svg>
              </Button>
            </div>
          </div>

          <p className="mt-auto flex justify-center gap-2 pt-8 text-sm text-gray-600">
            Don&apos;t have an account?
            <Link
              href="/signup"
              className="text-[#0038F5] hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignInPage;