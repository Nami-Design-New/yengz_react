import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination, Scrollbar } from "swiper/modules";

function ServiceSlider({ images }) {
  return (
    <div className="swiper mySwiper">
      <div className="swiper-container mySwiper">
        <Swiper
          spaceBetween={600}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          effect="fade"
          loop={true}
          scrollbar={{ draggable: true }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Scrollbar, EffectFade, Autoplay]}
          className="mySwiper"
        >
          {images?.map((image) => (
            <SwiperSlide key={image.image} className="service-slide">
              <img src={image.image} alt="service" />
            </SwiperSlide>
          ))}

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </div>
  );
}

export default ServiceSlider;
