import Image from "next/image";
import { CircleCheck } from "lucide-react";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const features = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const backgroundGradients = `
  radial-gradient(ellipse 520px 430px at 27% 4%, rgba(225,255,115,0.7), transparent),
  radial-gradient(ellipse 470px 430px at 100% 4%, rgba(220,225,248,0.6), transparent),
  radial-gradient(ellipse 480px 500px at 0% 46%, rgba(205,217,249,0.7), transparent),
  radial-gradient(ellipse 430px 430px at 5% 85%, rgba(220,255,105,0.7), transparent),
  radial-gradient(ellipse 520px 470px at 85% 90%, rgba(205,217,248,0.9), transparent)
`;

export default function GrowthPath() {
  return (
    <section
      className="bg-[#fafafa] px-5 py-16 sm:px-8 sm:pt-20 md:px-10 md:pt-24 lg:px-6 lg:pt-25"
      style={{ backgroundImage: backgroundGradients }}
    >
      <div className="custom-container mx-auto">
        {/* ==============First row============= */}
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="w-full md:w-[48%]">
            <h2 className="text-[32px] font-semibold leading-[1.15] text-[#242528] sm:text-[38px] md:text-[40px] lg:text-[44px] lg:leading-[1.1]">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="mt-6 text-[18px] leading-6 text-[#4B4C53] lg:mt-8">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-6 sm:mt-10 sm:gap-x-14">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h3 className="text-2xl font-medium text-[#0b3bf0] sm:text-3xl">
                    {stat.value}
                  </h3>

                  <p className="mt-1 text-sm text-[#55565b] sm:mt-2 sm:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full justify-center md:w-[48%] md:justify-end">
            <Image
              src="/images/growth-image-1.png"
              alt="Student learning online"
              width={580}
              height={552}
              className="h-auto w-full max-w-145"
            />
          </div>
        </div>

        {/* ==============Second row============ */}
        <div className="mt-16 flex flex-col items-center gap-12 sm:mt-20 md:mt-24 md:flex-row md:justify-between md:gap-8">
          <div className="flex w-full justify-center md:w-[48%] md:justify-start">
            <Image
              src="/images/growth-image-2.png"
              alt="Creator managing courses"
              width={580}
              height={552}
              className="h-auto w-full max-w-145"
            />
          </div>

          <div className="w-full md:w-[48%]">
            <h2 className="text-[44px] font-semibold leading-[1.15] text-[#242528]">
              Create &amp; Manage Courses Easily.
            </h2>

            <p className="mt-6 text-[18px] leading-7 text-[#4B4C53] lg:mt-8">
              <span className="font-semibold text-[#242528]">ByteSpace</span>{" "}
              supports individuals or entities in the creation, publication,
              and administration of educational courses.
            </p>

            <ul className="mt-7 space-y-4 sm:mt-8">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-[18px] text-[#242528] sm:text-lg"
                >
                  <CircleCheck className="size-5 shrink-0 fill-[#0b3bf0] text-white sm:size-6" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}