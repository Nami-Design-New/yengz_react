import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

function WorkViewModal({ showModal, setShowModal, targetWork, setTargetWork }) {
  const { t } = useTranslation();
  return (
    <Modal
      show={showModal}
      onHide={() => {
        setShowModal(false);
        setTargetWork(null);
      }}
      centered
      size="lg"
      style={{ backgroundColor: "transparent !important" }}
      className="add-work-modal"
    >
      <Modal.Header className="pb-0" closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body className="add-work">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          speed={1000}
          loop={true}
          modules={[Autoplay]}
          dir="rtl"
          className="worksViewModalSwiper"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {targetWork?.images &&
            targetWork?.images?.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="work-modal-img-box">
                  <img src={image.image} alt="work" />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </Modal.Body>
    </Modal>
  );
}

export default WorkViewModal;
