import {
  ChartNoAxesColumn,
  Funnel,
  ListFilter,
  Shapes,
} from "lucide-react";
import { Category } from "@/src/types/course";

interface CourseFiltersProps {
  categories: Category[];
}

const pillButton =
  "inline-flex h-10 items-center gap-2 rounded-full border border-[#DEDEE2] bg-white px-4 text-[14px] font-medium text-[#3D3D45] transition-colors hover:border-[#BDBDC4]";

const CourseFilters = ({ categories }: CourseFiltersProps) => {
  return (
    <div>
      {/*================= Filter ============== */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <button type="button" className={pillButton}>
            <Funnel size={16} />
            Filter
          </button>

          <button type="button" className={pillButton}>
            <ChartNoAxesColumn size={16} />
            Level
          </button>

          <button type="button" className={pillButton}>
            <Shapes size={16} />
            Category
          </button>
        </div>

        <button type="button" className={pillButton}>
          <ListFilter size={16} />
          Most relevant
        </button>
      </div>

      {/* =========== Categories============= */}
      <div className="mt-5 flex gap-3 overflow-x-auto pb-1 scrollbar-none [&::-webkit-scrollbar]:hidden">
        {categories.map((category, index) => (
          <button
            key={category.id}
            type="button"
            className={`h-10 shrink-0 rounded-full px-5 text-[14px] font-medium transition-colors ${
              index === 0
                ? "bg-[#D4F52B] text-[#0B0D21]"
                : "bg-[#F3F3F5] text-[#3D3D45] hover:bg-[#E9E9EC]"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseFilters;