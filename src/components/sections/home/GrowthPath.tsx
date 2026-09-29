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

const backgroundStyle = {
  backgroundColor: "#fafafa",

  backgroundImage: `
    radial-gradient(
      ellipse 520px 430px at 27% 4%,
      rgba(225, 255, 115, 0.72) 0%,
      rgba(225, 255, 115, 0.42) 35%,
      rgba(225, 255, 115, 0.12) 58%,
      transparent 78%
    ),

    radial-gradient(
      ellipse 470px 430px at 100% 4%,
      rgba(220, 225, 248, 0.62) 0%,
      rgba(220, 225, 248, 0.38) 38%,
      rgba(220, 225, 248, 0.10) 62%,
      transparent 80%
    ),

    radial-gradient(
      ellipse 480px 500px at 0% 46%,
      rgba(205, 217, 249, 0.72) 0%,
      rgba(205, 217, 249, 0.45) 35%,
      rgba(205, 217, 249, 0.12) 65%,
      transparent 82%
    ),

    radial-gradient(
      ellipse 430px 430px at 0% 100%,
      rgba(220, 255, 105, 0.72) 0%,
      rgba(220, 255, 105, 0.42) 35%,
      rgba(220, 255, 105, 0.10) 62%,
      transparent 82%
    ),

    radial-gradient(
      ellipse 520px 470px at 100% 100%,
      rgba(205, 217, 249, 0.72) 0%,
      rgba(205, 217, 249, 0.44) 35%,
      rgba(205, 217, 249, 0.12) 65%,
      transparent 82%
    )
  `,
};

export default function GrowthPath() {
  return (
    <section
      className="relative overflow-hidden px-6 py-[100px]"
      style={backgroundStyle}
    >
      <div className="custom-container relative mx-auto">
        {/* First Row =====*/}
        <div className="flex flex-col md:flex-row gap-5 justify-between">
          {/* Content */}
          <div className="w-1/2 space-y-10">
            <h2 className=" text-[44px] font-semibold leading-[1.05] tracking-[-1.5px] text-[#202124]">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="text-[15.5px] leading-[1.55] text-[#5c5c61]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <div className="flex gap-14">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-[32px] font-medium leading-none text-[#0b3bf0]">
                    {stat.value}
                  </div>

                  <div className="mt-2 text-[15px] text-[#55565b]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-end w-1/2">
            <Image
              src="/images/growth-image-1.png"
              alt="Student learning online"
              width={580}
              height={552}
              priority
              className="h-[552px]"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
          {/* Image */}
          <div className="flex justify-start w-1/2">
            <Image
              src="/images/growth-image-2.png"
              alt="Creator managing courses"
              width={580}
              height={552}
              className="h-[596px]"
            />
          </div>

          {/* Content */}
          <div className="w-1/2 space-y-10">
            <h2 className="text-[44px] font-semibold leading-[1.05] tracking-[-1.5px] text-[#202124]">
              Create &amp; Manage Courses Easily.
            </h2>

            <p className="text-[18px] leading-[1.55] text-[#5c5c61]">
              <span className="font-semibold text-[#202124]">ByteSpace</span>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            <ul className="space-y-4">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2.5 text-[18px] text-[#202124]"
                >
                  <CircleCheck className="size-5 shrink-0 fill-[#0b3bf0] text-white" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
