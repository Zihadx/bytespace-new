import Categories from "@/src/components/sections/home/Categories";
import CreatorCTA from "@/src/components/sections/home/CreatorCTA";
import FeaturedCourses from "@/src/components/sections/home/FeaturedCourses";
import GrowthPath from "@/src/components/sections/home/GrowthPath";
import Hero from "@/src/components/sections/home/Hero";
import Partnership from "@/src/components/sections/home/PartnersStrip";
import Testimonials from "@/src/components/sections/home/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Partnership />
      <FeaturedCourses/>
      <Categories />
      <GrowthPath />
      <CreatorCTA/>
      <Testimonials/>
    </div>
  );
};

export default Home;
