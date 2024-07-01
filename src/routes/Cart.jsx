import React from "react";
import bann2 from "../Assets/images/bann2.webp";
import bann from "../Assets/images/bann.webp";
import rateowner1 from "../Assets/images/rateowner1.webp";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <main>
      <section className="cart-section container">
        <div className="row">
          <div className="col-12">
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
                  <div className="more-develop">
                    <div className="d-flex input-field align-items-baseline">
                      <input type="checkbox" id="check-1" />
                      <div className="label">
                        <label htmlFor="check-1">لوغو احترافي للمتجر</label>
                        <p>مقابل 15.00$ إضافية على سعر الخدمة.</p>
                      </div>
                    </div>
                    <div className="d-flex input-field align-items-baseline">
                      <input type="checkbox" id="check-2" />
                      <div className="label">
                        <label htmlFor="check-2">
                          خدمة VIP متجر عربي (هوية بصرية لمتجرك+25 منتج رابح مع
                          وصف إحترافي+ ومقابلة زووم لشرح )
                        </label>
                        <p>
                          مقابل 100.00$ إضافية على سعر الخدمة. سيزيد مدة التنفيذ
                          7 أيام إضافية.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex input-field align-items-baseline">
                      <input type="checkbox" id="check-3" />
                      <div className="label">
                        <label htmlFor="check-3">
                          ترجمة قالب المتجر الى اللغة العربية
                        </label>
                        <p>
                          مقابل 50.00$ إضافية على سعر الخدمة. سيزيد مدة التنفيذ
                          3 أيام إضافية.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-12">
                  <div className="add-cart">
                    <div className="input-field">
                      <button className="add">
                        <i class="fa-solid fa-plus"></i>
                      </button>
                      <input type="number" />
                      <button className="minus">
                        <i class="fa-solid fa-minus"></i>
                      </button>
                    </div>
                    <div className="total d-flex justify-content-between align-items-center">
                      <p>
                        الإجمالي : <br />
                        <span>
                          + <span id="num">1</span> خدمة مضافة
                        </span>
                      </p>
                      <div className="d-flex gap-3">
                        <h6>
                          40.00<i className="fa-solid fa-dollar-sign"></i>
                        </h6>
                        <button>
                          <i className="fa-light fa-trash-can"></i>
                        </button>
                      </div>
                    </div>
                    <button className="request-order">
                      <i className="fa-solid fa-cart-plus"></i> اضف الي السلة
                    </button>
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
                          <img src={rateowner1} alt="owner" />
                        </div>
                        <span>خالد عوض</span>
                      </div>
                    </div>
                  </div>
                  <div className="more-develop">
                    <div className="d-flex input-field align-items-baseline">
                      <input type="checkbox" id="check-1" />
                      <div className="label">
                        <label htmlFor="check-1">ترجمة لأكثر من لغة</label>
                        <p>
                          مقابل 100.00$ إضافية على سعر الخدمة. سيزيد مدة التنفيذ
                          7 أيام إضافية.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-12">
                  <div className="add-cart">
                    <div className="input-field">
                      <button className="add">
                        <i class="fa-solid fa-plus"></i>
                      </button>
                      <input type="number" />
                      <button className="minus">
                        <i class="fa-solid fa-minus"></i>
                      </button>
                    </div>
                    <div className="total d-flex justify-content-between align-items-center">
                      <p>
                        الإجمالي : <br />
                        <span>
                          + <span id="num">1</span> خدمة مضافة
                        </span>
                      </p>
                      <div className="d-flex gap-3">
                        <h6>
                          10.00<i className="fa-solid fa-dollar-sign"></i>
                        </h6>
                        <button>
                          <i className="fa-light fa-trash-can"></i>
                        </button>
                      </div>
                    </div>
                    <button className="request-order">
                      <i className="fa-solid fa-cart-plus"></i> اضف الي السلة
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6 col-12">
                  <Link className="order-now" to="checkout.html">
                    اطلب الان
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
