const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
    text: `"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."`,
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    text: `"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."`,
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    text: `"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."`,
  },
];

// shared font helpers so the JSX stays short
const poppins = "font-[family-name:var(--font-poppins)]";
const outfit = "font-[family-name:var(--font-outfit)]";

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-5 py-16 sm:px-6 sm:py-20 lg:h-[744px] lg:py-[100px]">
      {/* Background glows (percent on mobile so they follow the content, px on desktop) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Lime glow behind the intro */}
        <div className="absolute left-1/2 top-[12%] h-[200px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7ff3c] opacity-90 blur-[70px] lg:top-[225px] lg:h-[250px] lg:w-[380px] lg:blur-[90px]" />

        {/* Lime glow on the right edge */}
        <div className="absolute right-0 top-[55%] h-[220px] w-[200px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7ff3c] opacity-70 blur-[70px] lg:top-[335px] lg:h-[280px] lg:w-[260px] lg:opacity-80 lg:blur-[75px]" />

        {/* Faint lime wash, top right */}
        <div className="absolute right-[-40px] top-[20px] h-[160px] w-[240px] rounded-full bg-[#d7ff3c] opacity-35 blur-[80px] lg:h-[200px] lg:w-[320px] lg:blur-[90px]" />

        {/* Blue glow, bottom left */}
        <div className="absolute left-[30px] top-[92%] h-[300px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7f9cf0] opacity-50 blur-[80px] lg:top-[700px] lg:h-[400px] lg:w-[380px] lg:blur-[90px]" />
      </div>

      <div className="custom-container relative z-10">
        {/* Intro */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-end lg:gap-x-9 lg:gap-y-10">
          <h2
            className={`${poppins} text-[30px] font-semibold leading-[1.2] tracking-[-0.02em] text-black sm:text-[36px] lg:text-[44px]`}
          >
            Discover What Our
            <br className="hidden sm:block" /> Community Is Saying
          </h2>

          <p
            className={`${outfit} max-w-[570px] text-base font-light leading-[1.6] text-[#4F4F4F] lg:text-[18px]`}
          >
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Cards: stacked on mobile, 3 columns from md */}
        <div className="mt-10 grid grid-cols-1 items-start gap-5 sm:mx-auto sm:max-w-[560px] md:mt-12 md:max-w-none md:grid-cols-3 md:gap-5 lg:mt-[72px] lg:gap-10">
          {testimonials.map(({ name, role, image, text }) => (
            <article
              key={name}
              className="rounded-3xl bg-white p-5 lg:rounded-[28px] lg:p-6"
            >
              <img
                src={image}
                alt={name}
                width={80}
                height={80}
                loading="lazy"
                className="h-16 w-16 rounded-full object-cover lg:h-20 lg:w-20"
              />

              <h3
                className={`${poppins} mt-5 text-lg font-semibold leading-7 text-black lg:mt-6 lg:text-[20px]`}
              >
                {name}
              </h3>

              <p
                className={`${outfit} text-base font-normal leading-7 text-[#003BE2] lg:text-[18px]`}
              >
                {role}
              </p>

              <p
                className={`${outfit} mt-4 text-[15px] font-light leading-[1.6] text-[#4F4F4F] lg:mt-[26px] lg:text-[18px]`}
              >
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
