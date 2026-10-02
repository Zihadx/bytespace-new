import Image from "next/image";

const companies = [
  "/images/logos/logo-1.png",
  "/images/logos/logo-2.png",
  "/images/logos/logo-3.png",
  "/images/logos/logo-4.png",
  "/images/logos/logo-5.png",
];

const Partnership = () => {
  return (
    <section className="bg-[#F5F5F6]">
      <div className="custom-container flex h-50.5 w-full items-center justify-between max-md:h-auto max-md:flex-wrap max-md:justify-center max-md:gap-x-8 max-md:gap-y-6 max-md:py-8">
        {companies.map((src, index) => (
          <div
            key={src}
            className={`flex w-[calc(50%-1rem)] items-center justify-center md:w-auto ${
              index === companies.length - 1 ? "max-md:w-full" : ""
            }`}
          >
            <Image
              src={src}
              alt={`Company logo ${index + 1}`}
              width={168}
              height={41}
              className="h-auto w-[11.65vw] max-md:w-30"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partnership;