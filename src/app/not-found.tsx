import Link from "next/link";
import GridBackground from "../components/ui/GridBackground";

export const metadata = {
  title: "Page not found | ByteSpace",
};

const NotFound = () => {
  return (
    <main>
      <GridBackground className="flex min-h-screen flex-col items-center px-6 pt-32 pb-24 text-center">
        {/* Big 404 that fades into the background at the bottom */}
        <h1
          className="select-none bg-gradient-to-b from-[#CDF723] from-45% to-[#0039E0] to-95% bg-clip-text text-[clamp(9rem,33vw,30rem)] font-bold leading-[0.8] text-transparent"
          aria-label="404"
        >
          404
        </h1>

        <h2 className="relative -mt-[2vw] max-w-[900px] text-[clamp(2.25rem,5.5vw,4.5rem)] font-semibold leading-[1.1]">
          The page you are looking for doesn’t exist
        </h2>

        <p className="mt-10 text-base font-light text-white/90">
          Try to use a correct url or go back to homepage to start again
        </p>

        <Link
          href="/"
          className="mt-10 rounded-full bg-[#CDF723] px-6 py-3.5 text-base font-medium text-black transition hover:brightness-95"
        >
          Back to Home
        </Link>
      </GridBackground>
    </main>
  );
};

export default NotFound;