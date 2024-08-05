import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ServiceCard from "./../../ui/cards/ServiceCard";

const SimilarServices = ({ services }) => {
  const { t } = useTranslation();
  return (
    <section className="mb-5 container pt-0" style={{ padding: "0 16px" }}>
      <div className="container">
        {/* section head */}
        <div className="row-head" data-aos="fade-up">
          <h6>
            <i className="fa-sharp fa-solid fa-grid-2"></i>{" "}
            {t("addService.SimilarServices")}
          </h6>
        </div>
        <Swiper
          spaceBetween={12}
          slidesPerView={4}
          speed={1000}
          loop={true}
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mainSliderContainer w-100"
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
          {services?.map((ser) => (
            <SwiperSlide key={ser.id}>
              <ServiceCard service={ser} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SimilarServices;
