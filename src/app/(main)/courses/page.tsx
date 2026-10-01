import CourseCard from "@/src/components/cards/CourseCard";
import CourseFilters from "@/src/components/sections/courses/CourseFilters";
import CoursesHero from "@/src/components/sections/courses/CoursesHeader";
import Pagination from "@/src/components/sections/courses/Pagination";
import { getAllCourses, getCategories } from "@/src/services/courses";

export const metadata = {
  title: "Courses | ByteSpace",
  description: "Find your next course on ByteSpace.",
};

const CoursesPage = () => {
  const categories = getCategories();
  const courses = getAllCourses();

  return (
    <main className="bg-white">
      <CoursesHero />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-14">
        <CourseFilters categories={categories} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 18).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-14">
          <Pagination />
        </div>
      </div>
    </main>
  );
};

export default CoursesPage;
