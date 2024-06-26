import React from "react";
import { Link } from "react-router-dom";
import rateowner1 from "../Assets/images/rateowner1.webp";
import bann from "../Assets/images/bann.webp";

function OrderDetails() {
  return (
    <main>
      <section className="cart-section container">
        <div className="row">
          <div className="col-12">
            <div className="service container">
              <div className="row justify-content-center">
                <div className="col-lg-9 col-12 mb-5">
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
                            40.00 <i className="fa-regular fa-dollar-sign"></i>
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
                      <Link to="/chat" className="chat">
                        <i className="fa-light fa-message-lines"></i>
                      </Link>
                    </div>
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
  )
}

export default OrderDetails