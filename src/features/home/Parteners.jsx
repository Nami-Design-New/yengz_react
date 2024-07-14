import React from "react";
import { useTranslation } from "react-i18next";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import OrderBox from "../../ui/cards/OrderBox";
import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";
import usePartenersList from "./usePartenersList";

function Parteners() {
  const { t } = useTranslation();
  const { data: parteners } = usePartenersList();

  return (
    <section className="popular_departments pt-0">
      <div className="container">
        <div
          className="row-head d-flex flex-column gap-1 justify-content-center"
          data-aos="fade-up"
        >
          <h2 className="title" data-aos="fade-up">
            {t("home.parteners")}
          </h2>
          <p className="sub-title m-0" data-aos="fade-up">
            {t("home.partenersSubTitle")}
          </p>
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
                slidesPerView: 4,
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
            {parteners?.map((partener) => (
              <SwiperSlide key={partener.id} className="partener-slide">
                <img src={partener.image} alt="partener" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Parteners;