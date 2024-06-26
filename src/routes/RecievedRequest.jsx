import React from "react";
import { Link } from "react-router-dom";
import rateowner1 from "../Assets/images/rateowner1.webp";
import rateowner2 from "../Assets/images/rateowner2.webp";
import rateowner3 from "../Assets/images/rateowner3.webp";

const RecievedRequest = () => {
  return (
    <main>
      <section className="cart-section container">
        <div className="row">
          <div className="col-lg-2">
            <div className="filter side-menu">
              <div className="d-flex justify-content-between">
                <h6>حالة الطلب</h6>
                <div className="colse">
                  <i className="fa-light fa-xmark"></i>
                </div>
              </div>
              <ul className="order-status">
                <li>
                  <input type="checkbox" id="all" checked />
                  <label for="all">الكل</label>
                </li>
                <li>
                  <input type="checkbox" id="waiting" />
                  <label for="waiting">بانتظار التعليمات</label>
                </li>
                <li>
                  <input type="checkbox" id="underway" />
                  <label for="underway">جاري تنفيذها</label>
                </li>
                <li>
                  <input type="checkbox" id="waiting-delivery" />
                  <label for="waiting-delivery">بانتظار الاستلام</label>
                </li>
                <li>
                  <input type="checkbox" id="delivered" />
                  <label for="delivered"> تم تسليمها</label>
                </li>
                <li>
                  <input type="checkbox" id="canceled" />
                  <label for="canceled"> ملغية </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="small-filter-header">
            <h6>الطلبات الواردة</h6>
            <button className="openfilter">
              <i className="fa-light fa-sliders"></i>
            </button>
          </div>
          <div className="col-lg-10 co-12">
            <div className="service container">
              <div className="row">
                <div className="col-lg-7 col-12">
                  <div className="service-head h-100">
                    <Link to="/Services" className="request-owner-img">
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
                      <Link to="/RecivedReqOrder" className="details">
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
                    <Link to="/Services" className="request-owner-img">
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
                      <Link to="/RecivedReqOrder" className="details">
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
                    <Link to="/Services" className="request-owner-img">
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
                      <Link to="/RecivedReqOrder" className="details">
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
