import React from "react";
import HeroSection from "../features/home/HeroSection";
import CategoriesSection from "../features/home/CategoriesSection";
import PopularServicesSection from "../features/home/PopularServicesSection";
import LatestProjects from "../features/home/LatestProjects";
import Parteners from "../features/home/Parteners";
import AboutApp from "../features/home/AboutApp";
import DownloadApp from "../features/home/DownloadApp";
import HowItWorks from "../features/home/HowItWorks";
import JoinYnjz from "../features/home/JoinYnjz";
import WhyYenjz from "../features/home/WhyYenjz";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutApp />
      <CategoriesSection />
      <JoinYnjz />
      <WhyYenjz />
      <PopularServicesSection />
      <LatestProjects />
      <DownloadApp />;
      <HowItWorks />
      <Parteners />
    </>
  );
};

export default Home;
