import React, { useState } from "react";
import { Link } from "react-router-dom";
import bann2 from "../Assets/images/bann2.webp";
import bann from "../Assets/images/bann.webp";
import rateowner1 from "../Assets/images/rateowner1.webp";
import rateowner2 from "../Assets/images/rateowner2.webp";
import law from "../Assets/images/law.jpg";
import av2 from "../Assets/images/av2.png";
import av1 from "../Assets/images/av1.png";
import servicet1 from "../Assets/images/servicet1.jpg";
import fin from "../Assets/images/fin.webp";
import avatar from "../Assets/images/avatar.png";
import { useTranslation } from "react-i18next";
import StatusFilter from "../ui/StatusFilter";

const Purchases = () => {
  const { t } = useTranslation();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  function handleTogglingFilter() {
    setIsFilterOpen((open) => !open);
  }

  return (
    <main>
      <section className="cart-section container">
        <div className="row">
          <div className={`col-lg-2`}>
            <StatusFilter isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen}/>
          </div>
          <div className="small-filter-header">
            <h6>قائمة المشتريات</h6>
            <button className="openfilter" onClick={handleTogglingFilter}>
              <i className="fa-light fa-sliders"></i>
            </button>
          </div>
          <div className="col-lg-10 co-12">
            <div className="service container">
              <div className="row">
                <div className="col-lg-7 col-12">
                  <div className="service-head">
                    <Link to="/services" className="img">
                      <img src={bann} alt="service" />
                    </Link>
                    <div className="title">
                      <h5>
                        انشاء متجر الكتروني احترافي على منصة ووردبريس ووكومرس
                      </h5>
                      <div className="owner">
                        <div className="owner-avatar">
                          <img src={rateowner1} alt="owner" />
                        </div>
                        <span>خالد عوض</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-12">
                  <div className="progress-card">
                    <div className="progress-details">
                      <div className="pro-container">
                        <p className="status">بانتظار التعليمات</p>
                        <div className="progress">
                          <div
                            className="progress-bar sucses"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <Link to="/order-details" className="details">
                        التفاصيل
                      </Link>
                    </div>
                    <div className="time-price">
                      <span>
                        <i className="fa-sharp fa-light fa-clock"></i> منذ 36
                        دقيقة
                      </span>
                      <h5>
                        40.00 <i className="fa-regular fa-dollar-sign"></i>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="service container">
              <div className="row">
                <div className="col-lg-7 col-12">
                  <div className="service-head">
                    <Link to="/services" className="img">
                      <img src={bann2} alt="service" />
                    </Link>
                    <div className="title">
                      <h5>
                        تنسيق البحوث المكتوبة باللغة الانجليزية للكليات العلمية
                      </h5>
                      <div className="owner">
                        <div className="owner-avatar">
                          <img src={rateowner2} alt="owner" />
                        </div>
                        <span>خالد عوض</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-12">
                  <div className="progress-card">
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
                      <Link to="/order-details" className="details">
                        التفاصيل
                      </Link>
                    </div>
                    <div className="time-price">
                      <span>
                        <i className="fa-sharp fa-light fa-clock"></i> منذ 2
                        أيام و 13 ساعات
                      </span>
                      <h5>
                        10.00 <i className="fa-regular fa-dollar-sign"></i>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="service container">
              <div className="row">
                <div className="col-lg-7 col-12">
                  <div className="service-head">
                    <Link to="/services" className="img">
                      <img src={law} alt="service" />
                    </Link>
                    <div className="title">
                      <h5>انشاء الابحاث القانونية في جميع فروع القانون .</h5>
                      <div className="owner">
                        <div className="owner-avatar">
                          <img src={av2} alt="owner" />
                        </div>
                        <span>خالد عوض</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-12">
                  <div className="progress-card">
                    <div className="progress-details">
                      <div className="pro-container">
                        <p className="status">بانتظار الاستلام</p>
                        <div className="progress">
                          <div
                            className="progress-bar sucses"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <Link to="/order-details" className="details">
                        التفاصيل
                      </Link>
                    </div>
                    <div className="time-price">
                      <span>
                        <i className="fa-sharp fa-light fa-clock"></i>منذ 5 ايام
                        و 7 ساعات
                      </span>
                      <h5>
                        40.00 <i className="fa-regular fa-dollar-sign"></i>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="service container">
              <div className="row">
                <div className="col-lg-7 col-12">
                  <div className="service-head">
                    <Link to="/services" className="img">
                      <img src={servicet1} alt="service" />
                    </Link>
                    <div className="title">
                      <h5>
                        انشاء متجر الكتروني احترافي على منصة ووردبريس ووكومرس
                      </h5>
                      <div className="owner">
                        <div className="owner-avatar">
                          <img src={avatar} alt="owner" />
                        </div>
                        <span>خالد عوض</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-12">
                  <div className="progress-card">
                    <div className="progress-details">
                      <div className="pro-container">
                        <p className="status">تم تسليمها</p>
                        <div className="progress">
                          <div
                            className="progress-bar sucses"
                            role="progressbar"
                            style={{ width: "100%" }}
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <Link to="/order-details" className="details">
                        التفاصيل
                      </Link>
                    </div>
                    <div className="time-price">
                      <span>
                        <i className="fa-sharp fa-light fa-clock"></i> منذ 2
                        شهور و 11 يوم
                      </span>
                      <h5>
                        40.00 <i className="fa-regular fa-dollar-sign"></i>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="service container">
              <div className="row">
                <div className="col-lg-7 col-12">
                  <div className="service-head">
                    <Link to="/services" className="img">
                      <img src={fin} alt="service" />
                    </Link>

                    <div className="title">
                      <h5>التحليل المالي المتقدم وبناء النماذج المالية</h5>
                      <div className="owner">
                        <div className="owner-avatar">
                          <img src={av1} alt="service" />
                        </div>
                        <span>خالد عوض</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-12">
                  <div className="progress-card">
                    <div className="progress-details">
                      <div className="pro-container">
                        <p className="status">ملغية</p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "100%" }}
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <Link to="/order-details" className="details">
                        التفاصيل
                      </Link>
                    </div>
                    <div className="time-price">
                      <span>
                        <i className="fa-sharp fa-light fa-clock"></i>منذ 3 شهور
                        و 7 يوم
                      </span>
                      <h5>
                        40.00 <i className="fa-regular fa-dollar-sign"></i>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Purchases;
