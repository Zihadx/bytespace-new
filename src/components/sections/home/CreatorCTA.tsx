const gridStyle = {
  backgroundImage: `
    linear-gradient(
      rgba(255, 255, 255, 0.1) 2px,
      transparent 2px
    ),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1) 2px,
      transparent 2px
    )
  `,
  backgroundSize: "8.333vw 147px",
};

const CreatorCTA = () => {
  return (
    <section className="relative h-[588px] overflow-hidden bg-[#0037e0] px-6 text-center text-white">
      {/* Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={gridStyle}
      />

      {/* Ornament */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/ornaments-2.png")',
        }}
      />

      {/* Content */}
      <div className="custom-container relative z-10 mx-auto flex h-full flex-col items-center justify-center">
        <h2 className="max-w-[600px] text-[44px] font-semibold leading-[1.2] tracking-[-0.02em]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        <p className="mt-10 max-w-[970px] text-[18px] leading-7">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <button
          type="button"
          className="mt-10 flex h-[46px] w-[172px] items-center justify-center rounded-full bg-[#d9ff1a] px-6 text-[18px] font-medium text-[#202124] transition-colors hover:bg-[#cfff00]"
        >
          Join as Creator
        </button>
      </div>
    </section>
  );
};

export default CreatorCTA;