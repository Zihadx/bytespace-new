import Image from "next/image";
import { Course } from "@/src/types/course";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#E8E8EB] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#DCDCE1] hover:shadow-[0_16px_40px_rgba(11,13,33,0.08)]">
      {/* Course Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F4F4F5]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Level Badge */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#171717] shadow-sm backdrop-blur-sm">
            {course.level}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Instructor */}
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#B7F500] text-xs font-bold text-[#171717]">
              {course.instructor.charAt(0).toUpperCase()}
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-[#30303A]">
                {course.instructor}
              </p>
            </div>
          </div>

          {course.additionalInstructors && (
            <span className="shrink-0 text-xs font-medium text-gray-400">
              +{course.additionalInstructors.replace("+", "")}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="mb-3 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-[#F5B301]"
              aria-hidden="true"
            >
              <path d="M12 2.5l2.94 5.95 6.56.95-4.75 4.63 1.12 6.54L12 17.48l-5.87 3.09 1.12-6.54L2.5 9.4l6.56-.95L12 2.5z" />
            </svg>

            <span className="text-sm font-semibold text-[#171717]">
              {course.rating.toFixed(1)}
            </span>
          </div>

          <span className="text-xs text-gray-400">
            ({course.comments} reviews)
          </span>
        </div>

        {/* Title */}
        <h3 className="line-clamp-2 min-h-[56px] text-lg font-semibold leading-7 tracking-tight text-[#0B0D21] transition-colors duration-200 group-hover:text-[#45454F]">
          {course.title}
        </h3>

        {/* Course Meta */}
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path d="M4 5.5A2.5 2.5 0 016.5 3H20v17H6.5A2.5 2.5 0 014 17.5v-12z" />
              <path d="M4 17.5A2.5 2.5 0 016.5 15H20" />
            </svg>

            {course.lessons} Lessons
          </span>

          <span className="flex items-center gap-1.5">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>

            {course.duration}
          </span>
        </div>

        {/* Divider */}
        <div className="my-5 h-px w-full bg-[#EEEEF0]" />

        {/* Bottom */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="mb-1 text-xs font-medium text-gray-400">
              {course.priceType === "lifetime"
                ? "Lifetime access"
                : course.priceType}
            </p>

            <p className="text-2xl font-bold tracking-tight text-[#0B0D21]">
              ${course.price}
            </p>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B0D21] text-white transition-all duration-300 hover:bg-[#B7F500] hover:text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#0B0D21] focus:ring-offset-2"
            aria-label={`View ${course.title}`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;