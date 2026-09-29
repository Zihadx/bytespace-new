"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-md"
          : "bg-transparent lg:mt-8"
      }`}
    >
      <nav className="custom-container mx-auto flex h-20 items-center justify-between">
        {/*========== Logo =======*/}
        <Link
          href="/"
          aria-label="ByteSpace home"
          className="flex items-center gap-2.5"
        >
          <Image
            src="/images/logo_vector.png"
            alt="ByteSpace"
            width={32}
            height={32}
            className="h-8 w-8"
          />

          <span className="text-xl font-bold text-white sm:text-2xl">
            ByteSpace
          </span>
        </Link>

        {/* =====Desktop Navigation ===========*/}
        <div className="hidden items-center gap-7 md:flex">
          <Link
            href="/"
            className="text-sm text-white transition-opacity hover:opacity-70"
          >
            Home
          </Link>

          <Link
            href="/courses"
            className="text-sm text-white transition-opacity hover:opacity-70"
          >
            Courses
          </Link>

          <Link
            href="/creators"
            className="text-sm text-white transition-opacity hover:opacity-70"
          >
            Creators
          </Link>
        </div>

        {/* =======Desktop Right=========== */}
        <div className="hidden items-center gap-7 md:flex">
          <Link
            href="/signin"
            className="text-sm text-white transition-opacity hover:opacity-70"
          >
            Sign In
          </Link>

          <Link
            href="/join"
            className="text-sm text-white transition-opacity hover:opacity-70"
          >
            Join Us
          </Link>

          <Link
            href="/cart"
            aria-label="Shopping bag"
            className="transition-opacity hover:opacity-70"
          >
            <Image
              src="/images/cart-icon.png"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </Link>
        </div>

        {/* ========Mobile Menu Button ============*/}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* =======Mobile Menu ==========*/}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-black/90 backdrop-blur-md md:hidden">
          <div className="custom-container mx-auto flex flex-col gap-5 py-6">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-white"
            >
              Home
            </Link>

            <Link
              href="/courses"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-white"
            >
              Courses
            </Link>

            <Link
              href="/creators"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-white"
            >
              Creators
            </Link>

            <div className="h-px bg-white/10" />

            <Link
              href="/signin"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-white"
            >
              Sign In
            </Link>

            <Link
              href="/join"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-white"
            >
              Join Us
            </Link>

            <Link
              href="/cart"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 text-sm text-white"
            >
              <Image
                src="/images/cart-icon.png"
                alt=""
                width={22}
                height={22}
                className="h-[22px] w-[22px]"
              />

              Cart
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

