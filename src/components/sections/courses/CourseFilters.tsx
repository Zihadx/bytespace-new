"use client";

import { useRef, useState } from "react";
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
  "inline-flex h-10 shrink-0 items-center gap-2 rounded-full border border-[#DEDEE2] bg-white px-4 text-[14px] font-medium text-[#3D3D45] transition-colors hover:border-[#BDBDC4]";

const hideScrollbar =
  "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden";

const CourseFilters = ({ categories }: CourseFiltersProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ isDown: false, startX: 0, scrollLeft: 0, moved: false });
  const [activeId, setActiveId] = useState(categories[0]?.id);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !scrollRef.current) return;
    drag.current = {
      isDown: true,
      startX: e.clientX,
      scrollLeft: scrollRef.current.scrollLeft,
      moved: false,
    };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.isDown || !scrollRef.current) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 5) drag.current.moved = true;
    scrollRef.current.scrollLeft = drag.current.scrollLeft - dx;
  };

  const endDrag = () => {
    drag.current.isDown = false;
  };

  return (
    <div className="w-full min-w-0 max-w-full">
      {/* =================Filter buttons================= */}
      <div className="flex min-w-0 items-center justify-between gap-3">
        <div
          className={`flex min-w-0 flex-1 items-center gap-3 overflow-x-auto whitespace-nowrap ${hideScrollbar}`}
        >
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

      {/* =================Categories================= */}
      <div
        ref={scrollRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={(e) => {
          if (drag.current.moved) {
            e.preventDefault();
            e.stopPropagation();
            drag.current.moved = false;
          }
        }}
        className={`mt-5 w-full min-w-0 max-w-full cursor-grab select-none overflow-x-auto pb-1 active:cursor-grabbing ${hideScrollbar}`}
      >
        <div className="flex w-max flex-nowrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveId(category.id)}
              className={`h-10 shrink-0 whitespace-nowrap rounded-full px-5 text-[14px] font-medium transition-colors ${
                category.id === activeId
                  ? "bg-[#D4F52B] text-[#0B0D21]"
                  : "bg-[#F3F3F5] text-[#3D3D45] hover:bg-[#E9E9EC]"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseFilters;