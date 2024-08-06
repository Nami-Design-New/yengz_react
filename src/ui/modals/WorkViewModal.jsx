import { Modal } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { calculateDate } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function WorkViewModal({ showModal, setShowModal, targetWork }) {
  const lang = useSelector((state) => state.language.lang);
  return (
    <Modal
      show={showModal}
      onHide={() => {
        setShowModal(false);
      }}
      centered
      size="lg"
    >
      <Modal.Header className="pb-0" closeButton />
      <Modal.Body className="col-12 p-2">
        <div className="work-view-modal">
          <Swiper
            spaceBetween={12}
            slidesPerView={1}
            speed={1000}
            loop={true}
            modules={[Autoplay]}
            dir={lang === "ar" ? "rtl" : "ltr"}
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
          <div className="work-modal-content">
            <h3>{targetWork?.title}</h3>
            <h5>{targetWork?.description}</h5>
            <div className="modal-info-item">
              <i className="fa-solid fa-clipboard"></i>
              <Link
                target="_blank"
                to={targetWork?.link}
                className="m-0 item-value"
              >
                {targetWork?.link}
              </Link>
            </div>
            <div className="modal-info-items">
              <div className="modal-info-item">
                <i className="fa-solid fa-calendar-days"></i>
                <p className="m-0 item-value">
                  {calculateDate(targetWork?.start_date)}
                </p>
              </div>
              <div className="modal-info-item">
                <i className="fa-solid fa-calendar-days"></i>
                <p className="m-0 item-value">
                  {calculateDate(targetWork?.end_date)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default WorkViewModal;
