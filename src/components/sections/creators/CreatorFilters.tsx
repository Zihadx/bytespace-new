import { ChartNoAxesColumn, Funnel, ListFilter, Shapes } from "lucide-react";

const pill =
  "flex h-12 items-center gap-2 rounded-full border border-gray-300 bg-white px-5 text-base text-gray-900 transition hover:border-gray-900";

const CreatorFilters = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap gap-3">
        <button className={pill}>
          <Funnel className="size-5" /> Filter
        </button>
        <button className={pill}>
          <ChartNoAxesColumn className="size-5" /> Level
        </button>
        <button className={pill}>
          <Shapes className="size-5" /> Category
        </button>
      </div>

      <button className={pill}>
        <ListFilter className="size-5" /> Most relevant
      </button>
    </div>
  );
};

export default CreatorFilters;