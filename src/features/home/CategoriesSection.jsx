import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import CategoryCard from "../../ui/cards/CategoryCard";
import useCategoriesList from "./../categories/useCategoriesList";

const CategoriesSection = () => {
  const { t } = useTranslation();
  const { isLoading, data } = useCategoriesList();

  return (
    <section className="categories ">
      <div className="container">
        {/* section head */}
        <div className="row-head" data-aos="fade-up">
          <h6>
            <i className="fa-sharp fa-solid fa-grid-2"></i>{" "}
            {t("home.categories")}
          </h6>
          <Link to="/categories">
            {t("home.viewAll")}
            <i className="fa-regular fa-angle-left"></i>
          </Link>
        </div>

        <div className="swiper categories-swiper">
          <div className="swiper-wrapper">
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
              {data?.data?.map((category) => (
                <SwiperSlide key={category.id}>
                  <CategoryCard category={category} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
