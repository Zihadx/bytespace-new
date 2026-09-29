import Categories from "@/src/components/sections/home/Categories";
import CreatorCTA from "@/src/components/sections/home/CreatorCTA";
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
      <CreatorCTA/>
    </div>
  );
};

export default Home;
