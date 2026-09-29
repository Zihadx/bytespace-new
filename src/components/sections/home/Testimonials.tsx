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

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-6 py-25 h-[744px]">
      {/* Background spotlight: blurred blobs, positioned in px from the top */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Main lime glow — behind the intro, slightly left of the paragraph */}
        <div className="absolute left-1/2 top-[225px] h-[250px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7ff3c] opacity-90 blur-[90px]" />

        {/* Right-edge lime glow — beside the third card */}
        <div className="absolute right-0 top-[335px] h-[280px] w-[260px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7ff3c] opacity-80 blur-[75px]" />

        {/* Faint lime wash — top-right corner */}
        <div className="absolute right-[-40px] top-[20px] h-[200px] w-[320px] rounded-full bg-[#d7ff3c] opacity-35 blur-[90px]" />

        {/* Blue glow — bottom-left corner */}
        <div className="absolute left-[30px] top-[700px] h-[400px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7f9cf0] opacity-50 blur-[90px]" />
      </div>

      <div className="relative z-10 custom-container">
        {/* Intro: heading + paragraph, bottom-aligned on desktop */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-end lg:gap-x-9">
          <h2 className="font-[family-name:var(--font-poppins)] text-[44px] font-semibold leading-[1.2] tracking-[-0.02em] text-black">
            Discover What Our
            <br />
            Community Is Saying
          </h2>

          <p className="max-w-[570px] font-[family-name:var(--font-outfit)] text-[18px] font-light leading-[1.6] text-[#555]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Cards: natural height (no stretch), 40px gap */}
        <div className="mt-[72px] grid grid-cols-1 items-start gap-10 md:grid-cols-3">
          {testimonials.map((t) => (
            <article key={t.name} className="rounded-[28px] bg-white p-6">
              <img
                src={t.image}
                alt={t.name}
                className="h-20 w-20 rounded-full object-cover"
              />

              <h3 className="mt-6 font-[family-name:var(--font-poppins)] text-[20px] font-semibold leading-7 text-black">
                {t.name}
              </h3>

              <p className="font-[family-name:var(--font-outfit)] text-[18px] font-normal leading-7 text-[#1a47d9]">
                {t.role}
              </p>

              <p className="mt-[26px] font-[family-name:var(--font-outfit)] text-[18px] font-light leading-[1.6] text-[#555]">
                {t.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;