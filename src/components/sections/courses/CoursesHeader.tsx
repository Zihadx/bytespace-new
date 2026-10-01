import { ChevronDown, Search } from "lucide-react";

const CoursesHero = () => {
  return (
    <section
      className="relative bg-[#0B3DFF] px-6 pb-16 pt-20 text-center"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
        backgroundPosition: "center top",
      }}
    >
      <h1 className="text-[34px] mt-2 md:mt-10 font-bold tracking-tight text-white sm:text-[40px]">
        Find Your Next Course
      </h1>

      <form
        role="search"
        className="mx-auto mt-7 flex max-w-170 items-center gap-3"
      >
        {/* ========Search input========= */}
        <label className="flex h-12 flex-1 items-center gap-3 rounded-full bg-white px-5">
          <Search size={18} className="text-[#6B6B73]" />
          <input
            type="search"
            placeholder="Search"
            className="w-full bg-transparent text-[15px] text-[#0B0D21] outline-none placeholder:text-[#9A9AA3]"
          />
        </label>

        {/* ===========dropdown============ */}
        <button
          type="button"
          className="flex h-12 shrink-0 items-center gap-2 rounded-full bg-[#D4F52B] px-5 text-[15px] font-medium text-[#0B0D21] transition-colors hover:bg-[#c6e822]"
        >
          Courses
          <ChevronDown size={16} />
        </button>
      </form>
    </section>
  );
};

export default CoursesHero;