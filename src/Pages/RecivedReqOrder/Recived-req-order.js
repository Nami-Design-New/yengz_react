import React, { useState } from "react";
import rateowner1 from "../../Assets/images/rateowner1.webp";
import Modal from "react-bootstrap/Modal";

const RecivedReqOrder = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <main>
        <section className="cart-section container">
          <div className="row">
            <div className="col-12">
              <div className="service container">
                <div className="row justify-content-center">
                  <div className="col-lg-9 col-12 mb-5">
                    <div className="service-head">
                      <a href="service.html" className="request-owner-img">
                        <img src={rateowner1} alt="service" />
                      </a>
                      <div className="title requester-title">
                        <div className="owner">
                          <span>خالد عوض</span>
                        </div>
                        <h5>
                          انشاء متجر الكتروني احترافي على منصة ووردبريس ووكومرس
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 col-12">
                    <div className="products-card">
                      <ul className="order">
                        <li>
                          <p>رقم الطلب</p>
                          <div className="price-count">
                            <span className="order-number">#3146465</span>
                          </div>
                        </li>
                        <li>
                          <p>قيمة الطلب</p>
                          <div className="price-count">
                            <span className="price">
                              40.00
                              <i className="fa-regular fa-dollar-sign"></i>
                            </span>
                          </div>
                        </li>
                        <li>
                          <p>تاريخ الشراء</p>
                          <div className="price-count">
                            <span>منذ 5 ايام و 7 ساعات</span>
                          </div>
                        </li>
                        <li>
                          <p>تاريخ التسليم المتوقع</p>
                          <div className="price-count">
                            <span>20 / 11 / 2023</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="progress-card order-d">
                      <div className="progress-details">
                        <div className="pro-container">
                          <p className="status">جاري تنفيذها</p>
                          <div className="progress">
                            <div
                              className="progress-bar sucses"
                              role="progressbar"
                              style={{ width: "50%" }}
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <a href="chat.html" className="chat">
                          <i className="fa-light fa-message-lines"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 order-buttons">
                    <button
                      className="deliver"
                      data-bs-toggle="modal"
                      data-bs-target="#rateModal"
                      onClick={handleShow}
                    >
                      ارسل طلب تسليم
                    </button>

                    <div
                      className="modal show"
                      style={{ display: "block", position: "initial" }}
                    >
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header></Modal.Header>
                        <Modal.Body>
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="rateModalLabel">
                                تقييم الخدمة
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>

                            <div className="modal-body">
                              <form action="">
                                <div className="rate_field">
                                  <h6>التسليم بالموعد </h6>
                                  <div className="stars">
                                    <div className="sr star-rating-onTimeDelivery">
                                      <input
                                        type="radio"
                                        id="star5_onTimeDelivery"
                                        name="rating_onTimeDelivery"
                                        value="5"
                                      />
                                      <label
                                        for="star5_onTimeDelivery"
                                        title="5 stars"
                                      >
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                      </label>
                                      <input
                                        type="radio"
                                        id="star4_onTimeDelivery"
                                        name="rating_onTimeDelivery"
                                        value="4"
                                      />
                                      <label
                                        for="star4_onTimeDelivery"
                                        title="4 stars"
                                      >
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                      </label>
                                      <input
                                        type="radio"
                                        id="star3_onTimeDelivery"
                                        name="rating_onTimeDelivery"
                                        value="3"
                                      />
                                      <label
                                        for="star3_onTimeDelivery"
                                        title="3 stars"
                                      >
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                      </label>
                                      <input
                                        type="radio"
                                        id="star2_onTimeDelivery"
                                        name="rating_onTimeDelivery"
                                        value="2"
                                      />
                                      <label
                                        for="star2_onTimeDelivery"
                                        title="2 stars"
                                      >
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                      </label>
                                      <input
                                        type="radio"
                                        id="star1_onTimeDelivery"
                                        name="rating_onTimeDelivery"
                                        value="1"
                                      />
                                      <label
                                        for="star1_onTimeDelivery"
                                        title="1 star"
                                      >
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="rate_field">
                                  <h6> التواصل والمتابعه </h6>
                                  <div className="stars">
                                    <div className="sr star-rating-followUp">
                                      <input
                                        type="radio"
                                        id="star5_followUp"
                                        name="rating_followUp"
                                        value="5"
                                      />
                                      <label
                                        for="star5_followUp"
                                        title="5 stars"
                                      >
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                      </label>
                                      <input
                                        type="radio"
                                        id="star4_followUp"
                                        name="rating_followUp"
                                        value="4"
                                      />
                                      <label
                                        for="star4_followUp"
                                        title="4 stars"
                                      >
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                      </label>
                                      <input
                                        type="radio"
                                        id="star3_followUp"
                                        name="rating_followUp"
                                        value="3"
                                      />
                                      <label
                                        for="star3_followUp"
                                        title="3 stars"
                                      >
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                      </label>
                                      <input
                                        type="radio"
                                        id="star2_followUp"
                                        name="rating_followUp"
                                        value="2"
                                      />
                                      <label
                                        for="star2_followUp"
                                        title="2 stars"
                                      >
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                      </label>
                                      <input
                                        type="radio"
                                        id="star1_followUp"
                                        name="rating_followUp"
                                        value="1"
                                      />
                                      <label
                                        for="star1_followUp"
                                        title="1 star"
                                      >
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="rate_field">
                                  <h6> جوده الخدمة </h6>
                                  <div className="stars">
                                    <div className="sr star-rating-qos">
                                      <input
                                        type="radio"
                                        id="star5_qos"
                                        name="rating_qos"
                                        value="5"
                                      />
                                      <label for="star5_qos" title="5 stars">
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                      </label>
                                      <input
                                        type="radio"
                                        id="star4_qos"
                                        name="rating_qos"
                                        value="4"
                                      />
                                      <label for="star4_qos" title="4 stars">
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                      </label>
                                      <input
                                        type="radio"
                                        id="star3_qos"
                                        name="rating_qos"
                                        value="3"
                                      />
                                      <label for="star3_qos" title="3 stars">
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                      </label>
                                      <input
                                        type="radio"
                                        id="star2_qos"
                                        name="rating_qos"
                                        value="2"
                                      />
                                      <label for="star2_qos" title="2 stars">
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                      </label>
                                      <input
                                        type="radio"
                                        id="star1_qos"
                                        name="rating_qos"
                                        value="1"
                                      />
                                      <label for="star1_qos" title="1 star">
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <textarea
                                  name="comment"
                                  id="comment"
                                  placeholder="اكتب تجربتك"
                                ></textarea>
                                <button onClick={handleClose}>ارسال</button>
                              </form>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </div>
                  </div>
                  <div className="col-lg-9 order-buttons">
                    <button className="report-order">
                      <i className="fa-light fa-circle-info"></i>
                      ابلغ عن مشكلة
                    </button>
                    <button className="cancle-order">
                      <i className="fa-sharp fa-light fa-circle-xmark"></i>
                      الغاء الطلب
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div
        className="modal fade"
        id="rateModal"
        tabindex="-1"
        aria-labelledby="rateModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="rateModalLabel">
                تقييم الخدمة
              </h5>
            </div>

            <div className="modal-body">
              <form action="">
                <div className="rate_field">
                  <h6>التسليم بالموعد </h6>
                  <div className="stars">
                    <div className="sr star-rating-onTimeDelivery">
                      <input
                        type="radio"
                        id="star5_onTimeDelivery"
                        name="rating_onTimeDelivery"
                        value="5"
                      />
                      <label for="star5_onTimeDelivery" title="5 stars">
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </label>
                      <input
                        type="radio"
                        id="star4_onTimeDelivery"
                        name="rating_onTimeDelivery"
                        value="4"
                      />
                      <label for="star4_onTimeDelivery" title="4 stars">
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </label>
                      <input
                        type="radio"
                        id="star3_onTimeDelivery"
                        name="rating_onTimeDelivery"
                        value="3"
                      />
                      <label for="star3_onTimeDelivery" title="3 stars">
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </label>
                      <input
                        type="radio"
                        id="star2_onTimeDelivery"
                        name="rating_onTimeDelivery"
                        value="2"
                      />
                      <label for="star2_onTimeDelivery" title="2 stars">
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </label>
                      <input
                        type="radio"
                        id="star1_onTimeDelivery"
                        name="rating_onTimeDelivery"
                        value="1"
                      />
                      <label for="star1_onTimeDelivery" title="1 star">
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="rate_field">
                  <h6> التواصل والمتابعه </h6>
                  <div className="stars">
                    <div className="sr star-rating-followUp">
                      <input
                        type="radio"
                        id="star5_followUp"
                        name="rating_followUp"
                        value="5"
                      />
                      <label for="star5_followUp" title="5 stars">
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </label>
                      <input
                        type="radio"
                        id="star4_followUp"
                        name="rating_followUp"
                        value="4"
                      />
                      <label for="star4_followUp" title="4 stars">
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </label>
                      <input
                        type="radio"
                        id="star3_followUp"
                        name="rating_followUp"
                        value="3"
                      />
                      <label for="star3_followUp" title="3 stars">
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </label>
                      <input
                        type="radio"
                        id="star2_followUp"
                        name="rating_followUp"
                        value="2"
                      />
                      <label for="star2_followUp" title="2 stars">
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </label>
                      <input
                        type="radio"
                        id="star1_followUp"
                        name="rating_followUp"
                        value="1"
                      />
                      <label for="star1_followUp" title="1 star">
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="rate_field">
                  <h6> جوده الخدمة </h6>
                  <div className="stars">
                    <div className="sr star-rating-qos">
                      <input
                        type="radio"
                        id="star5_qos"
                        name="rating_qos"
                        value="5"
                      />
                      <label for="star5_qos" title="5 stars">
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </label>
                      <input
                        type="radio"
                        id="star4_qos"
                        name="rating_qos"
                        value="4"
                      />
                      <label for="star4_qos" title="4 stars">
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </label>
                      <input
                        type="radio"
                        id="star3_qos"
                        name="rating_qos"
                        value="3"
                      />
                      <label for="star3_qos" title="3 stars">
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </label>
                      <input
                        type="radio"
                        id="star2_qos"
                        name="rating_qos"
                        value="2"
                      />
                      <label for="star2_qos" title="2 stars">
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </label>
                      <input
                        type="radio"
                        id="star1_qos"
                        name="rating_qos"
                        value="1"
                      />
                      <label for="star1_qos" title="1 star">
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </label>
                    </div>
                  </div>
                </div>
                <textarea
                  name="comment"
                  id="comment"
                  placeholder="اكتب تجربتك"
                ></textarea>
                <button>ارسال</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecivedReqOrder;
