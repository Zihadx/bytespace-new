import Image from "next/image";
import Link from "next/link";

const linkColumns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

const bottomLinks = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

function Footer() {
  return (
    <footer className="w-full bg-white text-gray-900">
      <div className="custom-container">
        <div className="flex flex-col gap-12 pb-16 pt-12 sm:pb-24 lg:flex-row lg:gap-10 lg:pb-32 lg:pt-17.5">
          <div className="w-full lg:w-1/2">
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label="ByteSpace home"
            >
              <Image
                src="/images/logo_vector.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <h1 className="text-xl font-bold leading-none text-black">
                ByteSpace
              </h1>
            </Link>

            <p className="mt-2.5 max-w-md text-base leading-6">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6 lg:mt-11">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="h-13 w-full min-w-0 rounded-full border border-gray-300 px-6 text-base leading-6 outline-none placeholder:text-gray-600 focus:border-black sm:max-w-94 sm:flex-1"
              />

              <button
                type="submit"
                className="h-13 w-full shrink-0 rounded-full bg-[#CBFC01] text-base leading-6 text-black transition-opacity hover:opacity-80 sm:h-11.5 sm:w-26"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-5 max-w-md text-xs leading-5 sm:mt-6">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Link columns: 2 on phones, 3 from sm, spread out on desktop */}
          <div className="grid w-full grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:mt-10 lg:flex lg:w-1/2 lg:justify-between">
            {linkColumns.map((column, index) => (
              <ul
                key={index}
                className="flex flex-col gap-4 text-base lg:gap-4.5"
              >
                {column.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="transition-opacity hover:opacity-60"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-gray-300 pb-8 pt-6 text-xs leading-5 sm:flex-row sm:justify-between lg:pb-12">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {bottomLinks.map((item) => (
              <Link
                key={item}
                href="#"
                className="transition-opacity hover:opacity-60"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;