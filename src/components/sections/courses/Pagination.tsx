import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  return (
    <nav
      aria-label="Pagination"
      className="mx-auto flex w-fit items-center gap-5 rounded-full border border-[#DEDEE2] bg-white px-3 py-2"
    >
      {/* ===========Previous============= */}
      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-full text-[#0B0D21] transition-colors hover:bg-[#F3F3F5]"
      >
        <ChevronLeft size={20} />
      </button>

      {/* ===========Pages ===========*/}
      <div className="flex items-center gap-5">
        <button
          type="button"
          className="text-[16px] font-semibold text-[#B5B5BD]"
        >
          1
        </button>

        <button
          type="button"
          className="text-[16px] font-semibold text-[#0B0D21] hover:text-[#0B3DFF]"
        >
          2
        </button>

        <button
          type="button"
          className="text-[16px] font-semibold text-[#0B0D21] hover:text-[#0B3DFF]"
        >
          3
        </button>

        <button
          type="button"
          className="text-[16px] font-semibold text-[#0B0D21] hover:text-[#0B3DFF]"
        >
          4
        </button>

        <button
          type="button"
          className="text-[16px] font-semibold text-[#0B0D21] hover:text-[#0B3DFF]"
        >
          5
        </button>
      </div>

      {/*=========== Next======= */}
      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-full text-[#0B0D21] transition-colors hover:bg-[#F3F3F5]"
      >
        <ChevronRight size={20} />
      </button>
    </nav>
  );
};

export default Pagination;