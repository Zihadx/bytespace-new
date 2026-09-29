import Image from "next/image";
import { Search } from "lucide-react";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

// Grid lines for background--------------- 
const gridStyle = {
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.1) 2px, transparent 2px),
    linear-gradient(90deg, rgba(255,255,255,0.1) 2px, transparent 2px)
  `,
  backgroundSize: "8.333vw 8.333vw",
};

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0038E1] pt-[10.8%]">

      <div className="absolute inset-0" style={gridStyle} />

      {/* ============Hero content============*/}

      <div className="relative w-full aspect-1442/873">
        <Image
          src="/images/hero/ellipse.png"
          alt=""
          width={1146}
          height={446}
          priority
          className="absolute bottom-0 left-[10.3%] h-auto w-[79.5%]"
        />

        {/* ==================3D ornaments================ */}
        <Image
          src="/images/hero/ornaments.png"
          alt=""
          width={1442}
          height={873}
          priority
          className="absolute left-0 top-[8%] h-auto w-full"
        />

        {/* ===============Man ====================*/}
        <Image
          src="/images/hero/man.png"
          alt=""
          width={730}
          height={761}
          priority
          className="absolute bottom-0 left-[28.4%] h-auto w-[50.6%]"
        />

        {/* ================ui ux card==================== */}
        <Image
          src="/images/hero/card-uiux.png"
          alt=""
          width={208}
          height={70}
          className="absolute left-[28.2%] top-[55.3%] h-auto w-[14.4%]"
        />

        {/* ================ progress card  ====================*/}
        <Image
          src="/images/hero/card-progress.png"
          alt=""
          width={232}
          height={131}
          className="absolute left-[58.5%] top-[56.7%] h-auto w-[16.1%]"
        />

        {/* ============= students card================== */}
        <Image
          src="/images/hero/card-students.png"
          alt=""
          width={258}
          height={121}
          className="absolute left-[22.9%] top-[78%] h-auto w-[17.9%]"
        />

        {/* ========== Section Heading ===========*/}
        <h1
          className={`${poppins.className} absolute left-0 top-[1.4%] w-full text-center text-[5vw] font-semibold leading-[5.9vw] tracking-[-0.011em] text-white`}
        >
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        {/* ===========Section Description======== */}
        <p
          className={`${inter.className} absolute left-0 top-[25.2%] w-full text-center text-[1.14vw] font-light leading-[1.66vw] text-white`}
        >
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* ==========Search input form=========*/}
        <div className="absolute left-[30%] top-[35%] h-[3.6vw] w-[31.9%]">
          <Search className="absolute left-[1.87vw] top-1/2 size-[1.25vw] -translate-y-1/2 text-[#6B7280]" />
          <input
            type="text"
            placeholder="Course, topic, creator"
            className={`${inter.className} h-full w-full rounded-full bg-white pl-[3.9vw] pr-[1.4vw] text-[1.18vw] text-slate-900 outline-none placeholder:text-[#8B93A1]`}
          />
        </div>
        <button
          type="button"
          className={`${inter.className} absolute left-[63%] top-[35%] h-[3.2vw] w-[7.1%] rounded-full bg-[#CCFF00] text-[1.18vw] font-medium text-black hover:bg-[#bff000]`}
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default Hero;