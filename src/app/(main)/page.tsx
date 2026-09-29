import Categories from "@/src/components/sections/home/Categories";
import GrowthPath from "@/src/components/sections/home/GrowthPath";
import Hero from "@/src/components/sections/home/Hero";
import Partnership from "@/src/components/sections/home/PartnersStrip";

const Home = () => {
  return (
    <div>
      <Hero />
      <Partnership />
      <Categories />
      <GrowthPath />
    </div>
  );
};

export default Home;
