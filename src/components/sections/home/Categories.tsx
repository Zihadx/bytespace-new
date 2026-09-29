import {
  Camera,
  Building2,
  Laptop,
  Megaphone,
  PencilRuler,
  Smartphone,
} from "lucide-react";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400"] });

const categories = [
  { name: "Design", Icon: PencilRuler },
  { name: "Development", Icon: Smartphone },
  { name: "IT & Software", Icon: Laptop },
  { name: "Business", Icon: Building2 },
  { name: "Marketing", Icon: Megaphone },
  { name: "Photography", Icon: Camera },
];

const Categories = () => {
  return (
    <section className="w-full bg-white pb-[8vw] pt-[5vw] text-center custom-container">
      {/* =============Heading ands Description===========*/}
      <h2
        className={`${poppins.className} text-[2.5vw] font-semibold text-gray-950`}
      >
        Explore Diverse Learning Paths at Bytespace
      </h2>

      <p
        className={`${inter.className} mx-auto mt-[1vw] w-[63vw] text-[1.18vw] font-light leading-[2vw] text-gray-500`}
      >
        At Bytespace, we believe in empowering individuals through knowledge.
        Our diverse range of courses spans various fields, ensuring there&apos;s
        something for everyone. Unleash your potential and explore our carefully
        curated categories.
      </p>

      {/* =================Cards================ */}
      <div className="mt-[4.7vw] flex justify-center gap-[2.85vw]">
        {categories.map(({ name, Icon }) => (
          <div
            key={name}
            className="flex h-[11.5vw] w-[11.5vw] flex-col items-center justify-center gap-[0.9vw] rounded-[2vw] border border-gray-300 bg-white"
          >
            <div className="flex size-[4.2vw] items-center justify-center rounded-full bg-[#D4FF1E]">
              <Icon className="size-[1.9vw] text-gray-900" />
            </div>

            <p
              className={`${inter.className} text-[1.25vw] font-normal text-gray-900`}
            >
              {name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
