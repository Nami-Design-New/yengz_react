import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";
import slide1 from "../../Assets/images/slide1.jpg";
import slide2 from "../../Assets/images/slide2.jpg";
import slide3 from "../../Assets/images/slide3.jpg";

const HeroSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  function handleSubmitSearch(e) {
    e.preventDefault();
    const searchInput = e.target[0].value;
    navigate(`/services?search=${searchInput}`);
  }

  return (
    <section className="hero_section">
      <Swiper
        slidesPerView={1}
        speed={1000}
        loop={true}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="hero_slider"
      >
        <SwiperSlide>
          <img src={slide1} alt="slide-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide-2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide-3" />
        </SwiperSlide>
      </Swiper>
      <div className="hero_content">
        <div className="info">
          <h2>{t("home.heroSectionTitle")}</h2>
          <h2>{t("home.heroSectionSubTitle")}</h2>
        </div>
        <form onSubmit={handleSubmitSearch}>
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
    </section>
  );
};

export default HeroSection;
