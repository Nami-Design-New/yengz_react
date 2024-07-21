import React from "react";
import { useTranslation } from "react-i18next";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import useGetLatestProjects from "../projects/useGetLatestProjects";
import "swiper/swiper-bundle.css";
import ProjectCard from "../../ui/cards/ProjectCard";

const LatestProjects = () => {
  const { t } = useTranslation();
  const { data: projects } = useGetLatestProjects();

  return (
    <section className="popular_departments pt-0">
      <div className="container">
        <div className="row-head" data-aos="fade-up">
          <h6>{t("home.latestProjects")}</h6>
          <Link to="/service-orders">
            {t("home.viewAll")}
            <i className="fa-regular fa-angle-left"></i>
          </Link>
        </div>
        <div className="row mb-5">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            speed={1000}
            loop={true}
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="mainSliderContainer"
            breakpoints={{
              992: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              350: {
                slidesPerView: 1,
              },
            }}
            dir="rtl"
          >
            {projects?.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
