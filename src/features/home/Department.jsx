import React from "react";
import ServiceCard from "../../ui/cards/ServiceCard";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Department = ({ category }) => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="row-head" data-aos="fade-up">
        <h6>{category?.name || "برمجة وتطوير"}</h6>
        <Link to="/search?categories=1">
          {t("home.viewAll")}
          <i className="fa-regular fa-angle-left"></i>
        </Link>
      </div>
      <div className="row mb-5">
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          speed={1000}
          loop={true}
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mainSliderContainer"
          breakpoints={{
            992: {
              slidesPerView: 4
            },
            768: {
              slidesPerView: 3
            },
            350: {
              slidesPerView: 2
            }
          }}
          dir="rtl"
        >
          {category?.services?.map((service) => (
            <SwiperSlide key={service.id}>
              <ServiceCard service={service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Department;
