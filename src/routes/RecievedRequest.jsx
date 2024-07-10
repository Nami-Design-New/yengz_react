import React, { useState } from "react";
import { Link } from "react-router-dom";
import rateowner1 from "../Assets/images/rateowner1.webp";
import rateowner2 from "../Assets/images/rateowner2.webp";
import rateowner3 from "../Assets/images/rateowner3.webp";
import { useTranslation } from "react-i18next";
import StatusFilter from "../ui/StatusFilter";

const RecievedRequest = () => {
  const { t } = useTranslation();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  function handleTogglingFilter() {
    setIsFilterOpen((open) => !open);
  }

  return (
    <main>
      <section className="cart-section container">
        <div className="row">
          <div className={`col-lg-2 side-menu`}>
            <StatusFilter
              isFilterOpen={isFilterOpen}
              setIsFilterOpen={setIsFilterOpen}
            />
          </div>
          <div className="small-filter-header">
            <h6>الطلبات الواردة</h6>
            <button className="openfilter" onClick={handleTogglingFilter}>
              <i className="fa-light fa-sliders"></i>
            </button>
          </div>
          <div className="col-lg-10 co-12">
            <div className="service container">
              <div className="row">
                <div className="col-lg-7 col-12">
                  <div className="service-head h-100">
                    <Link to="/services" className="request-owner-img">
                      <img src={rateowner1} alt="service" />
                    </Link>
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
                      <Link to="/recievedRequestOrders" className="details">
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
                  <div className="service-head h-100">
                    <Link to="/services" className="request-owner-img">
                      <img src={rateowner2} alt="service" />
                    </Link>
                    <div className="title requester-title">
                      <div className="owner">
                        <span>خالد عوض</span>
                      </div>
                      <h5>
                        تنسيق البحوث المكتوبة باللغة الانجليزية للكليات العلمية
                      </h5>
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
                      <Link to="/recievedRequestOrders" className="details">
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
                  <div className="service-head h-100">
                    <Link to="/services" className="request-owner-img">
                      <img src={rateowner3} alt="service" />
                    </Link>
                    <div className="title requester-title">
                      <div className="owner">
                        <span>خالد عوض</span>
                      </div>
                      <h5>التحليل المالي المتقدم وبناء النماذج المالية</h5>
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
                      <Link to="/recievedRequestOrders" className="details">
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

export default RecievedRequest;
