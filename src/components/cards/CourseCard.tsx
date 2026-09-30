import Image from "next/image";
import { Course } from "@/src/types/course";

interface CourseCardProps {
  course: Course;
}

function CourseCard({ course }: CourseCardProps) {
  const stats = [
    `${course.lessons} Lessons`,
    course.duration,
    `${course.comments} Comments`,
  ];

  return (
    <article className="group w-full rounded-[28px] border border-[#DEDEE2] bg-white p-3.5 pb-5 transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(11,13,33,0.08)]">
      {/*=============== Course image ============*/}
      <div className="relative aspect-7/4 overflow-hidden rounded-[18px] bg-[#F4F4F5]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-1.5">
          {stats.map((stat) => (
            <span
              key={stat}
              className="whitespace-nowrap rounded-full bg-white/75 px-3 py-1.25 text-[12px] font-medium leading-4 text-[#4A4A52] backdrop-blur-md"
            >
              {stat}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4">
        {/* ==============Title and rating =================*/}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="line-clamp-2 text-[21px] font-bold leading-6 tracking-[-0.01em] text-black">
              {course.title}
            </h3>

            <p className="mt-1 text-[12px] leading-4 text-[#6B6B73]">
              by{" "}
              <span className="font-medium text-[#0B3DE6]">
                {course.instructor}
              </span>
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 pt-0.5">
            <span className="text-[19px] font-normal leading-6 text-[#6B6B73]">
              {course.rating.toFixed(1)}
            </span>

            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-[#C9CBD1]"
              aria-hidden="true"
            >
              <path d="M12 2.5l2.94 5.95 6.56.95-4.75 4.63 1.12 6.54L12 17.48l-5.87 3.09 1.12-6.54L2.5 9.4l6.56-.95L12 2.5z" />
            </svg>
          </div>
        </div>

        {/* ===========Level and students==============*/}
        <div className="mt-4 flex items-center justify-between gap-2">
          <span className="inline-flex h-8.5 items-center gap-2 rounded-full bg-[#F3F3F5] px-4 text-[13px] font-medium text-[#55555D]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 20v-8" />
              <path d="M10 20V4" />
              <path d="M16 20v-9" />
            </svg>

            {course.level}
          </span>

          <div className="flex items-center">
            {course.studentAvatars.map((avatar, index) => (
              <div key={index} className={index > 0 ? "-ml-2.5" : ""}>
                <Image
                  src={avatar}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                />
              </div>
            ))}

            <span className="-ml-2.5 flex h-8.5 w-8.5 items-center justify-center rounded-full border-2 border-white bg-[#D4F52B] text-[12px] font-medium text-[#1A1A1A]">
              {course.additionalStudents}
            </span>
          </div>
        </div>

        {/* ======Price ================*/}
        <div className="mt-4 flex items-baseline gap-0.5">
          <span className="text-[22px] font-bold leading-7 text-[#0B3DE6]">
            ${course.price}
          </span>

          <span className="text-[12px] font-normal text-[#6B6B73]">
            {course.priceType}
          </span>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;