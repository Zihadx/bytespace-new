import Image from "next/image";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const categories = [
  {
    name: "Design",
    icon: "/images/categories/design.png",
  },
  {
    name: "Development",
    icon: "/images/categories/development.png",
  },
  {
    name: "IT & Software",
    icon: "/images/categories/it-software.png",
  },
  {
    name: "Business",
    icon: "/images/categories/business.png",
  },
  {
    name: "Marketing",
    icon: "/images/categories/marketing.png",
  },
  {
    name: "Photography",
    icon: "/images/categories/photography.png",
  },
];

const Categories = () => {
  return (
    <section className="custom-container w-full bg-white px-5 pb-16 pt-16 text-center sm:px-8 md:pb-20 md:pt-20 lg:px-0 lg:pb-[8vw] lg:pt-[5vw]">
      {/* Heading */}
      <h2
        className={`
          ${poppins.className}
          text-[30px] font-semibold leading-tight text-[#040819]
          sm:text-[36px]
          md:text-[40px]
          lg:text-[2.5vw]
        `}
      >
        Explore Diverse Learning Paths at Bytespace
      </h2>

      {/* Description */}
      <p
        className={`
          ${inter.className}
          mx-auto mt-4 max-w-[600px]
          text-[18px] font-light leading-6 text-[#82868E]
          sm:text-[15px]
          md:text-base
          lg:mt-[1vw] lg:max-w-none lg:w-[63vw]
          lg:text-[1.18vw]
          lg:leading-[2vw]
        `}
      >
        At Bytespace, we believe in empowering individuals through knowledge.
        Our diverse range of courses spans various fields, ensuring there&apos;s
        something for everyone. Unleash your potential and explore our carefully
        curated categories.
      </p>

      {/* Cards */}
      <div
        className="
          mt-10 grid grid-cols-2 justify-items-center gap-4
          sm:mt-12 sm:grid-cols-3 sm:gap-5
          md:mt-14
          lg:mt-[4.7vw] lg:flex lg:justify-center lg:gap-[2.85vw]
        "
      >
        {categories.map(({ name, icon }) => (
          <div
            key={name}
            className="
              group flex aspect-square w-full max-w-[160px]
              cursor-pointer flex-col items-center justify-center
              gap-3 rounded-[24px]
              border border-gray-300 bg-white
              transition-all duration-300 ease-out
              hover:-translate-y-1
              hover:border-[#D4FF1E]
              hover:bg-[#FAFDEB]
              sm:gap-3
              lg:h-[11.5vw] lg:w-[11.5vw]
              lg:max-w-none lg:gap-[0.9vw]
              lg:rounded-[2vw]
              lg:hover:-translate-y-[0.3vw]
            "
          >
            {/* Icon */}
            <div
              className="
                flex size-16 items-center justify-center
                rounded-full bg-[#D4FF1E]
                transition-transform duration-300 ease-out
                group-hover:scale-105
                lg:size-[4.2vw]
              "
            >
              <Image
                src={icon}
                alt={name}
                width={40}
                height={40}
                className="size-8 object-contain lg:size-[1.9vw]"
              />
            </div>

            {/* Name */}
            <p
              className={`
                ${inter.className}
                font-medium text-[#040819]
                text-[20px]
              
              `}
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