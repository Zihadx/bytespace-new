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
    <section className=" bg-[#F4F4F4]">
      <div className="custom-container flex h-50.5 w-full items-center justify-between">
        {companies.map((src) => (
          <Image
            key={src}
            src={src}
            alt="Logo"
            width={168}
            height={41}
            className="h-auto w-[11.65vw] "
          />
        ))}
      </div>
    </section>
  );
};

export default Partnership;
