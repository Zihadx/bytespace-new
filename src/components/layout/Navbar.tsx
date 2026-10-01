"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

const accountLinks = [
  { label: "Sign In", href: "/signin" },
  { label: "Join Us", href: "/signup" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-md"
          : "bg-transparent lg:mt-8"
      }`}
    >
      <nav className="custom-container mx-auto flex h-20 items-center justify-between">
        <Link
          href="/"
          aria-label="ByteSpace home"
          className="flex items-center gap-2"
        >
          <Image
            src="/images/logo_vector.png"
            alt="ByteSpace"
            width={32}
            height={32}
            className="h-8 w-8"
          />

          <h1 className="text-2xl font-bold text-white">
            ByteSpace
          </h1>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop account links and cart */}
        <div className="hidden items-center gap-7 md:flex">
          {accountLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}

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

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-black/90 backdrop-blur-md md:hidden">
          <div className="custom-container mx-auto flex flex-col gap-5 py-6">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-sm text-white"
              >
                {link.label}
              </Link>
            ))}

            <div className="h-px bg-white/10" />

            {accountLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-sm text-white"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/cart"
              onClick={closeMenu}
              className="flex items-center gap-2 text-sm text-white"
            >
              <Image
                src="/images/cart-icon.png"
                alt=""
                width={22}
                height={22}
                className="h-5.5 w-5.5"
              />

              Cart
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;