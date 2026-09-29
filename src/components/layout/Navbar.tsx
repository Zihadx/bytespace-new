import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent text-white">
      <nav className="flex h-30 items-center mx-auto custom-container">
        {/* =======================Logo =================*/}
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="ByteSpace home"
        >
          <div className="relative h-8 w-8">
            <Image
              width={100}
              height={100}
              alt="logo"
              src="/images/logo_vector.png"
            />
          </div>

          <span className="text-[24px] font-bold">
            ByteSpace
          </span>
        </Link>

        {/*================= navigation link============== */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
          <Link
            href="/"
            className="text-[15px] transition-opacity hover:opacity-70"
          >
            Home
          </Link>

          <Link
            href="/courses"
            className="text-[15px] transition-opacity hover:opacity-70"
          >
            Courses
          </Link>

          <Link
            href="/creators"
            className="text-[15px] transition-opacity hover:opacity-70"
          >
            Creators
          </Link>
        </div>

        {/*=================== Right content============ */}
        <div className="ml-auto flex items-center gap-7">
          <Link
            href="/signin"
            className="text-[15px] transition-opacity hover:opacity-70"
          >
            Sign In
          </Link>

          <Link
            href="/join"
            className="text-[15px] transition-opacity hover:opacity-70"
          >
            Join Us
          </Link>

          <Link
            href="/cart"
            aria-label="Shopping bag"
            className="transition-opacity hover:opacity-70"
          >
            <ShoppingBag className="h-h-5.25 w-5.25" strokeWidth={1.8} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
