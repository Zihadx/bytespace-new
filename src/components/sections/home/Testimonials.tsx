import { testimonials } from "@/src/data/testimonials";
import Image from "next/image";

function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-5 py-16 sm:px-6 sm:py-20 lg:h-186 lg:py-25">
      {/*============= Background glows========= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[12%] h-50 w-70 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7ff3c] opacity-90 blur-[70px] lg:top-56.25 lg:h-62.5 lg:w-95 lg:blur-[90px]" />

        <div className="absolute right-0 top-[55%] h-55 w-50 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7ff3c] opacity-70 blur-[70px] lg:top-83.75 lg:h-70 lg:w-65 lg:opacity-80 lg:blur-[75px]" />

        <div className="absolute right-10 top-5 h-40 w-60 rounded-full bg-[#d7ff3c] opacity-35 blur-[80px] lg:h-50 lg:w-[320px] lg:blur-[90px]" />

        <div className="absolute left-7.5 top-[92%] h-75 w-70 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7f9cf0] opacity-50 blur-[80px] lg:top-175 lg:h-100 lg:w-95 lg:blur-[90px]" />
      </div>

      <div className="custom-container relative z-10">
        {/*============= Header========= */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-end lg:gap-x-9 lg:gap-y-10">
          <h2 className="text-[30px] font-semibold leading-[1.2] tracking-[-0.02em] text-black sm:text-[36px] lg:text-[44px]">
            Discover What Our
            <br className="hidden sm:block" />
            Community Is Saying
          </h2>

          <p className="max-w-142.5 text-base font-light leading-[1.6] text-[#4F4F4F] lg:text-[18px]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/*=========== Testimonials============= */}
        <div className="mt-10 grid grid-cols-1 items-start gap-5 sm:mx-auto sm:max-w-140 md:mt-12 md:max-w-none md:grid-cols-3 lg:mt-18 lg:gap-10">
          {testimonials.map(({ name, role, image, text }) => (
            <article
              key={name}
              className="rounded-3xl bg-white p-5 lg:rounded-[28px] lg:p-6"
            >
              <Image
                src={image}
                alt={name}
                width={80}
                height={80}
                loading="lazy"
                className="h-16 w-16 rounded-full object-cover lg:h-20 lg:w-20"
              />

              <h3 className="mt-5 text-lg font-semibold leading-7 text-black lg:mt-6 lg:text-[20px]">
                {name}
              </h3>

              <p className="text-base font-normal leading-7 text-[#003BE2] lg:text-[18px]">
                {role}
              </p>

              <p className="mt-4 text-[15px] font-light leading-[1.6] text-[#4F4F4F] lg:mt-6.5 lg:text-[18px]">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;