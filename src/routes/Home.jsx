import React from "react";
import "swiper/css";
import NewsLetter from "../ui/NewsLetter";
import HeroSection from "../features/home/HeroSection";
import CategoriesSection from "../features/home/CategoriesSection";
import PopularServicesSection from "../features/home/PopularServicesSection";

const Home = () => {
  function handleSubmitSearch(e) {
    e.preventDefault();
    const searchInput = e.target[0].value;
    navigate(`/search?search=${searchInput}`);
  }

  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <PopularServicesSection />
      <NewsLetter />
    </>
  );
};

export default Home;
