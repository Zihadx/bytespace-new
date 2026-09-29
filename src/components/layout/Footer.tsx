import Image from "next/image";
import Link from "next/link";

const column1 = [
  "Featured Courses",
  "Featured Categories",
  "Business",
  "IT",
  "Design",
];

const column2 = ["Development", "Marketing", "Photography", "Finance", "Sport"];

const column3 = [
  "Become a Creator",
  "Affiliate Program",
  "Contact",
  "Help",
  "About",
];

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-900">
      <div className="custom-container">
        <div className="flex flex-col gap-10 pb-32 pt-17.5 lg:flex-row">
          {/*===============logo ===========*/}
          <div className="w-full lg:w-1/2">
            <Link
              href="/"
              className="flex items-center gap-2.5"
              aria-label="ByteSpace home"
            >
              <div className="relative h-8 w-8">
                <Image
                  src="/images/logo_vector.png"
                  alt="ByteSpace"
                  width={32}
                  height={32}
                />
              </div>

              <span className="text-[20px] font-bold leading-none text-black">
                ByteSpace
              </span>
            </Link>

            <p className="mt-2.5 text-[16px] leading-6">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/*============= Newsletter================ */}
            <div className="mt-11 flex items-start gap-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-13 w-94 rounded-full border border-gray-300 px-6 text-[16px] leading-6 outline-none placeholder:text-gray-600"
              />

              <button className="h-11.5 w-26 rounded-full bg-[#CBFC01] text-[16px] font-normal leading-6 text-black">
                Search
              </button>
            </div>

            <p className="mt-6 text-[12px]">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* =================link columns ==============*/}
          <div className="mt-10 flex w-full flex-col items-center justify-between gap-10 md:flex-row lg:w-1/2">
            <ul className="flex flex-col gap-4.5 text-[16px]">
              {column1.map((item) => (
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

            <ul className="flex flex-col gap-4.5 text-[16px] leading-5">
              {column2.map((item) => (
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

            <ul className="flex flex-col gap-4.5 text-[16px]">
              {column3.map((item) => (
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
          </div>
        </div>

        {/* ==============Bottom bar============= */}
        <div className="flex flex-col gap-3 border-t border-gray-300 pb-12 pt-6 text-[12px] leading-5 sm:flex-row sm:justify-between">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
