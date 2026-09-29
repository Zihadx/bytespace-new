import Image from "next/image";
import { Search } from "lucide-react";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const Hero = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#0038E1] pt-8 lg:pt-[10.8%]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.1) 2px, transparent 2px)",
        backgroundSize: "8.333vw 8.333vw",
      }}
    >
      <div
        className="
          relative
          min-h-[480px]
          w-full
          px-5
          sm:min-h-[480px]
          lg:min-h-0
          lg:aspect-[1442/873]
          lg:px-0
        "
      >
        {/* Heading */}
        <h1
          className={`
            ${poppins.className}
            relative z-10 mx-auto
            max-w-175
            text-center text-[34px]
            font-semibold leading-[1.08]
            tracking-[-0.02em] text-white
            sm:text-[46px]
            lg:absolute lg:left-0 lg:top-[1.4%]
            lg:w-full lg:max-w-none
            lg:px-0 lg:text-[5vw]
            lg:leading-[5.9vw]
            lg:tracking-[-0.011em]
            mt-20
            lg:mt-0
          `}
        >
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        {/* Description */}
        <p
          className={`
            ${inter.className}
            relative z-10
            mx-auto mt-5
            max-w-[560px]
            text-center text-[14px]
            font-light leading-6 text-white
            sm:mt-6 sm:text-[16px]
            lg:absolute lg:left-0 lg:top-[25.2%]
            lg:mt-0 lg:w-full lg:max-w-none
            lg:text-[1.14vw]
            lg:leading-[1.66vw]
          `}
        >
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* Search */}
        <div
          className="
            relative z-20 mx-auto mt-6
            flex h-11 w-full max-w-[500px] gap-2
            sm:mt-7 sm:h-12
            lg:absolute lg:left-[30%] lg:top-[35%]
            lg:mt-0 lg:block lg:h-[3.6vw]
            lg:w-[31.9%] lg:max-w-none
          "
        >
          {/* Input */}
          <div className="relative flex-1 lg:h-full lg:w-full">
            <Search
              className="
                absolute left-4 top-1/2 size-5
                -translate-y-1/2 text-[#6B7280]
                lg:left-[1.87vw] lg:size-[1.25vw]
              "
            />

            <input
              type="text"
              placeholder="Course, topic, creator"
              className={`
                ${inter.className}
                h-full w-full rounded-full
                bg-white pl-11 pr-3
                text-sm text-slate-900
                outline-none
                placeholder:text-[#8B93A1]
                sm:text-[15px]
                lg:pl-[3.9vw]
                lg:pr-[1.4vw]
                lg:text-[1.18vw]
              `}
            />
          </div>

          {/* Button */}
          <button
            type="button"
            className={`
              ${inter.className}
              h-full shrink-0
              rounded-full bg-[#CCFF00]
              px-5 text-sm font-medium
              text-black transition
              hover:bg-[#bff000]
              sm:px-6 sm:text-[15px]
              lg:absolute lg:left-[104%]
              lg:top-[5.5%]
              lg:h-[89%]
              lg:w-[22.3%]
              lg:px-0
              lg:text-[1.18vw]
            `}
          >
            Search
          </button>
        </div>

        {/* Ellipse */}
        <Image
          src="/images/hero/ellipse.png"
          alt=""
          width={1146}
          height={446}
          priority
          className="
            absolute bottom-0 left-[5%]
            h-auto w-[90%]
            sm:left-[8%] sm:w-[84%]
            lg:left-[10.3%] lg:w-[79.5%]
          "
        />

        {/* Ornaments */}
        <Image
          src="/images/hero/ornaments.png"
          alt=""
          width={1442}
          height={873}
          priority
          className="
            absolute left-1/2 bottom-0
            h-auto w-[145%] max-w-none
            -translate-x-1/2
            sm:w-[125%]
            lg:left-0 lg:top-[8%]
            lg:bottom-auto lg:w-full
            lg:translate-x-0
          "
        />

        {/* Person */}
        <Image
          src="/images/hero/man.png"
          alt=""
          width={730}
          height={761}
          priority
          className="
            absolute bottom-0 left-1/2
            h-auto w-[55%] max-w-[300px]
            -translate-x-1/2
            sm:w-[50%] sm:max-w-[350px]
            lg:left-[28.4%]
            lg:w-[50.6%]
            lg:max-w-none
            lg:translate-x-0
          "
        />

        {/* UI/UX Card */}
        <Image
          src="/images/hero/card-uiux.png"
          alt=""
          width={208}
          height={70}
          className="
            absolute bottom-[20%] left-[3%]
            h-auto w-[28%]
            sm:left-[10%] sm:w-[22%]
            lg:left-[28.2%] lg:top-[55.3%]
            lg:bottom-auto lg:w-[14.4%]
          "
        />

        {/* Progress Card */}
        <Image
          src="/images/hero/card-progress.png"
          alt=""
          width={232}
          height={131}
          className="
            absolute bottom-[20%] right-[3%]
            h-auto w-[30%]
            sm:right-[10%] sm:w-[23%]
            lg:left-[58.5%] lg:right-auto
            lg:top-[56.7%] lg:bottom-auto
            lg:w-[16.1%]
          "
        />

        {/* Students Card */}
        <Image
          src="/images/hero/card-students.png"
          alt=""
          width={258}
          height={121}
          className="
            absolute bottom-[2%] left-[4%]
            h-auto w-[32%]
            sm:left-[10%] sm:w-[25%]
            lg:left-[22.9%] lg:top-[78%]
            lg:bottom-auto lg:w-[17.9%]
          "
        />
      </div>
    </section>
  );
};

export default Hero;
