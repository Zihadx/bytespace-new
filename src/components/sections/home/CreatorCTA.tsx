import type { CSSProperties } from "react";

const ornamentUrl = 'url("/images/ornaments-2.png")';

const gridStyle: CSSProperties = {
  backgroundImage: `
    linear-gradient(
      rgba(255, 255, 255, 0.18) var(--grid-line),
      transparent var(--grid-line)
    ),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.18) var(--grid-line),
      transparent var(--grid-line)
    )
  `,
  backgroundSize: "var(--grid-w) var(--grid-h)",
};

const topBandStyle: CSSProperties = {
  backgroundImage: ornamentUrl,
  backgroundSize: "100% auto",
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  WebkitMaskImage: "linear-gradient(to bottom, #000 55%, transparent 100%)",
  maskImage: "linear-gradient(to bottom, #000 55%, transparent 100%)",
};

const bottomBandStyle: CSSProperties = {
  backgroundImage: ornamentUrl,
  backgroundSize: "100% auto",
  backgroundPosition: "bottom center",
  backgroundRepeat: "no-repeat",
  WebkitMaskImage: "linear-gradient(to top, #000 55%, transparent 100%)",
  maskImage: "linear-gradient(to top, #000 55%, transparent 100%)",
};

const CreatorCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#0037e0] px-5 text-center text-white sm:px-8 lg:h-[588px] lg:px-6">
      {/* Grid: square cells on mobile, original size on lg+ */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [--grid-h:16.666vw] [--grid-line:1px] [--grid-w:16.666vw] sm:[--grid-h:12.5vw] sm:[--grid-w:12.5vw] lg:[--grid-h:147px] lg:[--grid-line:2px] lg:[--grid-w:8.333vw]"
        style={gridStyle}
      />

      {/* Ornament: desktop (unchanged) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden bg-cover bg-center lg:block"
        style={{ backgroundImage: ornamentUrl }}
      />

      {/* Ornament: mobile/tablet (top + bottom bands, faded before the text) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 lg:hidden"
      >
        <div
          className="absolute inset-x-0 top-0 h-[34%] opacity-80"
          style={topBandStyle}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[34%] opacity-80"
          style={bottomBandStyle}
        />
      </div>

      {/* Content */}
      <div className="custom-container relative z-10 mx-auto flex h-full min-h-[560px] flex-col items-center justify-center py-20 sm:min-h-[560px] sm:py-24 lg:min-h-0 lg:py-0">
        <h2 className="max-w-[320px] text-[44px] text-[#F5F5F6] font-semibold leading-[1.15] tracking-[-0.02em] sm:max-w-[500px] sm:text-[38px] md:max-w-[560px] md:text-[42px] lg:max-w-[600px] lg:text-[44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        <p className="mt-5 max-w-[330px] text-[18px] leading-6 text-[#F5F5F6] sm:mt-8 sm:max-w-[600px] sm:text-base sm:leading-7 md:max-w-[800px] lg:mt-10 lg:max-w-[970px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <button
          type="button"
          className="mt-7 flex h-[46px] w-full max-w-[200px] items-center justify-center rounded-full bg-[#D4FB20] px-6 text-[18px] font-medium text-[#202124] transition-colors hover:bg-[#cfff00] sm:mt-8 sm:h-[46px] sm:w-[172px] sm:max-w-none lg:mt-10"
        >
          Join as Creator
        </button>
      </div>
    </section>
  );
};

export default CreatorCTA;