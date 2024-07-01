import React from "react";
import Orbit3d from "./../../ui/Orbit3d";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="mainSection">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* orbit */}
          <div className="col-md-4 order-md-2 p-1">
            <Orbit3d />
          </div>
          {/* slider & search */}
          <div className="col-md-8 order-md-1 p-1">
            <div className="mainSlider swiperContainer">
              <Swiper
                spaceBetween={16}
                slidesPerView={1}
                speed={1000}
                loop={true}
                modules={[Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="mainSliderContainer"
              >
                <SwiperSlide>
                  <div className="info">
                    <h1 className="sliderTitle">
                      {t("home.heroSectionTitle")}
                    </h1>
                    <p className="hint">{t("home.heroSectionSubTitle")}</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="info">
                    <h1 className="sliderTitle">
                      {t("home.heroSectionTitle")}
                    </h1>
                    <p className="hint">{t("home.heroSectionSubTitle")}</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="info">
                    <h1 className="sliderTitle">
                      {t("home.heroSectionTitle")}
                    </h1>
                    <p className="hint">{t("home.heroSectionSubTitle")}</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="info">
                    <h1 className="sliderTitle">
                      {t("home.heroSectionTitle")}
                    </h1>
                    <p className="hint">{t("home.heroSectionSubTitle")}</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="hero_content">
              <form action="">
                <div className="input-fileld">
                  <i className="fa-sharp fa-regular fa-magnifying-glass"></i>
                  <input
                    type="text"
                    id="search"
                    name="search"
                    placeholder={t("home.searchPlaceHolder")}
                  />
                  <button>{t("home.search")}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
