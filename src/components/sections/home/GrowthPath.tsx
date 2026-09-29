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

const bg = `
  radial-gradient(ellipse 520px 430px at 27% 4%, rgba(225,255,115,0.7), transparent),
  radial-gradient(ellipse 470px 430px at 100% 4%, rgba(220,225,248,0.6), transparent),
  radial-gradient(ellipse 480px 500px at 0% 46%, rgba(205,217,249,0.7), transparent),
  radial-gradient(ellipse 430px 430px at 5% 85%, rgba(220,255,105,0.7), transparent),
  radial-gradient(ellipse 520px 470px at 85% 90%, rgba(205,217,249, 0.9), transparent)
`;

export default function GrowthPath() {
  return (
    <section className="bg-[#fafafa] px-6 pt-25" style={{ backgroundImage: bg }}>
      <div className="custom-container mx-auto">
        {/* ======first row========*/}
        <div className="flex flex-col gap-5 md:flex-row md:justify-between">
          <div className="w-full space-y-10 md:w-1/2">
            <h2 className="text-[44px] font-semibold leading-[1.1] text-[#202124]">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="text-base leading-7 text-[#5c5c61]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <div className="flex gap-14">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h3 className="text-3xl font-medium text-[#0b3bf0]">
                    {stat.value}
                  </h3>
                  <p className="mt-2 text-[#55565b]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full justify-end md:w-1/2">
            <Image
              src="/images/growth-image-1.png"
              alt="Student learning online"
              width={580}
              height={552}
              className="h-138"
            />
          </div>
        </div>

        {/* ========second row==== */}
        <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
          <div className="flex w-full justify-start md:w-1/2">
            <Image
              src="/images/growth-image-2.png"
              alt="Creator managing courses"
              width={580}
              height={552}
              className="h-149"
            />
          </div>

          <div className="w-full space-y-10 md:w-1/2">
            <h2 className="text-[44px] font-semibold leading-[1.1] text-[#202124]">
              Create &amp; Manage Courses Easily.
            </h2>

            <p className="text-lg leading-7 text-[#5c5c61]">
              <span className="font-semibold text-[#202124]">ByteSpace</span>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-lg">
                  <CircleCheck className="size-5 fill-[#0b3bf0] text-white" />
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