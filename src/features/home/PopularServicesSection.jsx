import React from "react";
import { useTranslation } from "react-i18next";
import Department from "./Department";
import { Link } from "react-router-dom";

const PopularServicesSection = () => {
  const { t } = useTranslation();
  return (
    <section className="popular_departments">
      <h2 className="title" data-aos="fade-up">
        <Link to="/service-orders">{t("home.bestServices")}</Link>
      </h2>
      <p className="sub-title" data-aos="fade-up">
        {t("home.bestServicesSubTitle")}
      </p>
      <Department />
      {/* <Swiper
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
            {data?.data?.map((service) => (
              <SwiperSlide key={service.id}>
                <Department service={service} />
              </SwiperSlide>
            ))}
          </Swiper> */}
    </section>
  );
};

export default PopularServicesSection;
