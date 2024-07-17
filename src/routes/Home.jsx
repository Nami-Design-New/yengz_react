import React from "react";
import "swiper/css";
import NewsLetter from "../ui/NewsLetter";
import HeroSection from "../features/home/HeroSection";
import CategoriesSection from "../features/home/CategoriesSection";
import PopularServicesSection from "../features/home/PopularServicesSection";
import LatestProjects from "../features/home/LatestProjects";
import Parteners from "../features/home/Parteners";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <PopularServicesSection />
      <LatestProjects />
      <Parteners />
      <NewsLetter />
    </>
  );
};

export default Home;
