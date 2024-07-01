import React from "react";
import bann2 from "../Assets/images/bann2.webp"
import bann from "../Assets/images/bann.webp"
import rateowner1 from "../Assets/images/rateowner1.webp"
import { Link } from "react-router-dom";


const Cart = () => {
    
  return (
    <main>
      <section class="cart-section container">
        <div class="row">
          <div class="col-12">
            <div class="service container">
              <div class="row">
                <div class="col-lg-7 col-12">
                  <div class="service-head">
                    <Link to="/services" class="img">
                      <img src={bann} alt="service" />
                    </Link>
                    <div class="title">
                      <h5>
                        انشاء متجر الكتروني احترافي على منصة ووردبريس ووكومرس
                      </h5>
                      <div class="owner">
                        <div class="owner-avatar">
                          <img
                            src="assets/images/rate-owner1.jpg"
                            alt="owner"
                          />
                        </div>
                        <span>خالد عوض</span>
                      </div>
                    </div>
                  </div>
                  <div class="more-develop">
                    <div class="d-flex input-field align-items-baseline">
                      <input type="checkbox" id="check-1" />
                      <div class="label">
                        <label for="check-1">لوغو احترافي للمتجر</label>
                        <p>مقابل 15.00$ إضافية على سعر الخدمة.</p>
                      </div>
                    </div>
                    <div class="d-flex input-field align-items-baseline">
                      <input type="checkbox" id="check-2" />
                      <div class="label">
                        <label for="check-2">
                          خدمة VIP متجر عربي (هوية بصرية لمتجرك+25 منتج رابح مع
                          وصف إحترافي+ ومقابلة زووم لشرح )
                        </label>
                        <p>
                          مقابل 100.00$ إضافية على سعر الخدمة. سيزيد مدة التنفيذ
                          7 أيام إضافية.
                        </p>
                      </div>
                    </div>
                    <div class="d-flex input-field align-items-baseline">
                      <input type="checkbox" id="check-3" />
                      <div class="label">
                        <label for="check-3">
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
                <div class="col-lg-5 col-12">
                  <div class="add-cart">
                    <div class="input-field">
                      <button class="add">
                        <i class="ti ti-md ti-plus"></i>
                      </button>
                      <input type="number" />
                      <button class="minus">
                        <i class="ti ti-md ti-minus"></i>
                      </button>
                    </div>
                    <div class="total d-flex justify-content-between align-items-center">
                      <p>
                        الإجمالي : <br />
                        <span>
                          + <span id="num">1</span> خدمة مضافة
                        </span>
                      </p>
                      <div class="d-flex gap-3">
                        <h6>
                          40.00<i class="fa-solid fa-dollar-sign"></i>
                        </h6>
                        <button>
                          <i class="fa-light fa-trash-can"></i>
                        </button>
                      </div>
                    </div>
                    <button class="request-order">
                      <i class="fa-solid fa-cart-plus"></i> اضف الي السلة
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="service container">
              <div class="row">
                <div class="col-lg-7 col-12">
                  <div class="service-head">

                    <Link to="/services" class="img">
                      <img src={bann2}  alt="service" />
                    </Link>

                    <div class="title">
                      <h5>
                        تنسيق البحوث المكتوبة باللغة الانجليزية للكليات العلمية
                      </h5>
                      <div class="owner">
                        <div class="owner-avatar">
                          <img
                            src={rateowner1}
                            alt="owner"
                          />
                        </div>
                        <span>خالد عوض</span>
                      </div>
                    </div>
                  </div>
                  <div class="more-develop">
                    <div class="d-flex input-field align-items-baseline">
                      <input type="checkbox" id="check-1" />
                      <div class="label">
                        <label for="check-1">ترجمة لأكثر من لغة</label>
                        <p>
                          مقابل 100.00$ إضافية على سعر الخدمة. سيزيد مدة التنفيذ
                          7 أيام إضافية.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 col-12">
                  <div class="add-cart">
                    <div class="input-field">
                      <button class="add">
                        <i class="ti ti-md ti-plus"></i>
                      </button>
                      <input type="number" />
                      <button class="minus">
                        <i class="ti ti-md ti-minus"></i>
                      </button>
                    </div>
                    <div class="total d-flex justify-content-between align-items-center">
                      <p>
                        الإجمالي : <br />
                        <span>
                          + <span id="num">1</span> خدمة مضافة
                        </span>
                      </p>
                      <div class="d-flex gap-3">
                        <h6>
                          10.00<i class="fa-solid fa-dollar-sign"></i>
                        </h6>
                        <button>
                            
                          <i class="fa-light fa-trash-can"></i>
                        </button>
                      </div>
                    </div>
                    <button class="request-order">
                      <i class="fa-solid fa-cart-plus"></i> اضف الي السلة
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-6 col-md-6 col-12">
                  <Link class="order-now" to="checkout.html">
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
