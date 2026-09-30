import Image from "next/image";
import GridBackground from "@/src/components/ui/GridBackground";

export type Creator = {
  name: string;
  tagline: string;
  avatar: string;
  bio: string[];
  products: number;
  followers: number;
};

const CreatorHero = ({ creator }: { creator: Creator }) => {
  return (
    <GridBackground className="px-6 pb-[82px] pt-[172px]">
      <div className="mx-auto max-w-[1200px]">
        {/* ========== Creator Avtar + name=========== */}
        <div className="flex items-start gap-6">
          <Image
            src={creator.avatar}
            alt={creator.name}
            width={96}
            height={96}
            className="size-24 rounded-[20px] bg-pink-200 object-cover"
          />
          <div className="pt-1">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-[40px] font-semibold leading-tight">
                {creator.name}
              </h1>
              <span className="rounded-full bg-[#CDF723] px-6 py-1.5 text-base text-black">
                Creator
              </span>
            </div>
            <p className="mt-1 text-lg font-light">{creator.tagline}</p>
          </div>
        </div>

        {/* ===========Bio========= */}
        <div className="mt-[50px] space-y-0 text-[17px] font-light leading-[29px]">
          {creator.bio.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        {/* =============Stats + follow========= */}
        <div className="mt-[50px] flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-4">
            <Stat value={creator.products} label="Products" />
            <Stat value={creator.followers} label="Followers" />
          </div>
          <button className="rounded-full bg-[#CDF723] px-6 py-3.5 text-lg font-medium text-black transition hover:brightness-95">
            Follow
          </button>
        </div>
      </div>
    </GridBackground>
  );
};

const Stat = ({ value, label }: { value: number; label: string }) => (
  <div className="rounded-full bg-white px-6 py-3 text-lg text-black">
    <span className="text-[#0039E0]">{value}</span> {label}
  </div>
);

export default CreatorHero;