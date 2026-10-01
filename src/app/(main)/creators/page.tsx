import CourseCard from "@/src/components/cards/CourseCard";
import CreatorFilters from "@/src/components/sections/creators/CreatorFilters";
import CreatorHero, {
  type Creator,
} from "@/src/components/sections/creators/CreatorHero";
import { getAllCourses } from "@/src/services/courses";

export const metadata = {
  title: "PurePearl Studio | ByteSpace",
  description: "Courses and products from PurePearl Studio on ByteSpace.",
};

// Static data===============.
const creator: Creator = {
  name: "PurePearl Studio",
  tagline: "Passionate UI/UX, Web designer",
  avatar: "/images/purepearl.png",
  bio: [
    "Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
    "ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
  ],
  products: 3,
  followers: 12,
};

const CreatorPage = () => {
  const courses = getAllCourses().slice(0, 6);

  return (
    <main className="bg-white">
      <CreatorHero creator={creator} />

      <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-16">
        <CreatorFilters />

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CreatorPage;
