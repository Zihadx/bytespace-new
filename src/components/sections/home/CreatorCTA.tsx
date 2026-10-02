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

function CreatorCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0037e0] px-5 text-center text-white sm:px-8 lg:h-147 lg:px-6">
      {/* ============= Grid===============*/}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [--grid-h:16.666vw] [--grid-line:1px] [--grid-w:16.666vw] sm:[--grid-h:12.5vw] sm:[--grid-w:12.5vw] lg:[--grid-h:147px] lg:[--grid-line:2px] lg:[--grid-w:8.333vw]"
        style={gridStyle}
      />

      {/* ===========Ornament 3D elements ==========*/}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden bg-cover bg-center lg:block"
        style={{ backgroundImage: ornamentUrl }}
      />

      <div className="custom-container relative z-10 mx-auto flex h-full min-h-140 flex-col items-center justify-center py-20 sm:py-24 lg:min-h-0 lg:py-0">
        <h2 className="max-w-[320px] text-[44px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#F5F5F6] sm:max-w-125 sm:text-[38px] md:max-w-140 md:text-[42px] lg:max-w-150 lg:text-[44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        <p className="mt-5 max-w-82.5 text-[18px] leading-6 text-[#F5F5F6] sm:mt-8 sm:max-w-150 sm:text-base sm:leading-7 md:max-w-200 lg:mt-10 lg:max-w-242.5">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <button
          type="button"
          className="mt-7 flex h-11.5 w-44.5 max-w-50 items-center justify-center rounded-full bg-[#D4FB20] px-6 text-[18px] font-medium text-[#202124] transition-colors hover:bg-[#cfff00] sm:mt-8 lg:mt-10"
        >
          Join as Creator
        </button>
      </div>
    </section>
  );
}

export default CreatorCTA;