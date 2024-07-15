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
        {" "}
        <div className="work-modal-content">
          <h3>{targetWork?.title}</h3>
          <h5 className="m-0">{targetWork?.description}</h5>
          <div className="modal-info-item">
            <i class="fa-solid fa-clipboard"></i>
            <p className="m-0 item-value">{targetWork?.link}</p>
          </div>
          <div className="modal-info-item">
            <i class="fa-solid fa-calendar-days"></i>
            <p className="m-0 item-value">
              {new Date(targetWork?.start_date).toLocaleString()}
            </p>
          </div>
          <div className="modal-info-item">
            <i class="fa-solid fa-calendar-days"></i>
            <p className="m-0 item-value">
              {new Date(targetWork?.end_date).toLocaleString()}
            </p>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body className="add-work col-12">
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
              <SwiperSlide key={image.id} className="row p-0 m-0">
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
