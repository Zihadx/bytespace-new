import Image from "next/image";

const categories = [
  { name: "Design", icon: "/images/categories/design.png" },
  { name: "Development", icon: "/images/categories/development.png" },
  { name: "IT & Software", icon: "/images/categories/it-software.png" },
  { name: "Business", icon: "/images/categories/business.png" },
  { name: "Marketing", icon: "/images/categories/marketing.png" },
  { name: "Photography", icon: "/images/categories/photography.png" },
];

function Categories() {
  return (
    <section className="custom-container w-full bg-white px-5 pb-16 pt-16 text-center sm:px-8 md:pb-20 md:pt-20 lg:px-0 lg:pb-[8vw] lg:pt-[5vw]">
      <h1
        className="
          text-[30px] font-semibold leading-tight text-[#040819]
          sm:text-[36px]
          md:text-[40px]
          lg:text-[44px]
        "
      >
        Explore Diverse Learning Paths at Bytespace
      </h1>

      <p
        className="
          mx-auto mt-4 max-w-150
          text-[18px] font-light leading-6 text-[#82868E]
          sm:text-[15px]
          md:text-base
          lg:mt-[1vw] lg:max-w-none lg:w-[63vw]
          lg:text-[18px]
          lg:leading-[2vw]
        "
      >
        At Bytespace, we believe in empowering individuals through knowledge.
        Our diverse range of courses spans various fields, ensuring there&apos;s
        something for everyone. Unleash your potential and explore our carefully
        curated categories.
      </p>

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
              group flex aspect-square w-full max-w-40
              cursor-pointer flex-col items-center justify-center
              gap-3 rounded-3xl
              border border-gray-300 bg-white
              transition-all duration-300 ease-out
              hover:-translate-y-1
              hover:border-[#D4FF1E]
              hover:bg-[#FAFDEB]
              lg:h-[11.5vw] lg:w-[11.5vw]
              lg:max-w-none lg:gap-[0.9vw]
              lg:rounded-[2vw]
              lg:hover:translate-y-[-0.3vw]
            "
          >
            <div
              className="
                flex size-16 items-center justify-center
                rounded-full bg-[#D4FB20]
                transition-transform duration-300 ease-out
                group-hover:scale-105
                lg:size-[4.2vw]
              "
            >
              <Image
                src={icon}
                alt=""
                width={40}
                height={40}
                className="size-8 object-contain lg:size-9"
              />
            </div>

            <p className="text-[20px] font-medium text-[#040819]">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;