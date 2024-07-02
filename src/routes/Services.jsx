import React from "react";

import servicet4 from "../Assets/images/servicet4.mp4";
import rateowner2 from "../Assets/images/rateowner2.webp";
import servicet3 from "../Assets/images/servicet3.mp4";
import servicet2 from "../Assets/images/servicet2.mp4";
import rateowner1 from "../Assets/images/rateowner1.webp";
import rateowner3 from "../Assets/images/rateowner3.webp";
import vector88 from "../Assets/images/vector88.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <main>
      <section className="service-details container">
        <div className="row">
          <div className="service-content col-lg-7 col-12 p-3">
            <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                <Swiper
                  spaceBetween={600}
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <video loop autoPlay width="750" height="500" controls>
                      <source src={servicet4} type="video/mp4" />
                    </video>
                  </SwiperSlide>
                  <SwiperSlide>
                    <video width="750" height="500" controls>
                      <source src={servicet2} type="video/mp4" />
                    </video>
                  </SwiperSlide>
                  <SwiperSlide>
                    <video width="750" height="500" controls>
                      <source src={servicet3} type="video/mp4" />
                    </video>
                  </SwiperSlide>
                  ...
                </Swiper>
              </div>
              {/**/}

              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-pagination"></div>
            </div>

            <div className="content">
              <div className="service-owner-card">
                <div className="d-flex justify-content-between h-100">
                  <div className="owner">
                    <div className="img">
                      <Link
                        to="assets/images/rate-owner2.jpg"
                        data-fancybox="owner"
                      >
                        <img src={rateowner2} alt="owner" />
                      </Link>
                    </div>
                    <div className="title">
                      <h6>خالد عوض</h6>
                      <span>
                        <i className="ti ti-md ti-briefcase"></i> بائع مميز
                      </span>
                    </div>
                  </div>
                  <div className="btns">
                    <Link to="/chat" className="butn">
                      <i className="ti ti-md ti-message-2"></i>
                    </Link>
                    <div className="dropdown">
                      <button
                        className="butn dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-md ti-share"></i>
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <h5>مشاركة</h5>
                        <ul className="social">
                          <li>
                            <Link to="#">
                              <i className="fa-brands fa-facebook-f"></i>
                            </Link>
                            facebook
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fa-brands fa-instagram"></i>
                            </Link>
                            Instagram
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fa-brands fa-twitter"></i>
                            </Link>
                            Twitter
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fa-brands fa-snapchat"></i>
                            </Link>
                            Snapchat
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fa-light fa-share-nodes"></i>
                            </Link>
                            More
                          </li>
                        </ul>
                        <p className="text-center">او نسخ الرابط</p>
                        <div className="link">
                          <button onclick="copyToClipboard('#url',event)">
                            <i className="fa-sharp fa-regular fa-copy"></i>
                          </button>
                          <span
                            onclick="copyToClipboard('#url',event)"
                            id="url"
                          >
                            https://www.link.com/file/NlfVhYygR9mAQasassdsada/
                            <div className="alert copied">تم نسخ الرابط</div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4>انشاء متجر الكتروني احترافي على منصة ووردبريس ووكومرس</h4>
              <p>
                <Link to="#!">برمجة وتطوير</Link> / <span>إنشاء تطبيق</span>
              </p>
              <p>
                مرحبا بك. <br />
                هل تخطط للحصول على متجر إلكتروني إحترافي، متجاوب على منصة
                ووكومرس؟ إذا كان الأمر كذلك ، انتبه! أخيرًا ، هذه خدمة جديدة
                ومبتكرة تم إنشاؤها فقط للأشخاص مثلك تمامًا! سأقوم متجر الكتروني
                احترافي علي المنصة الخاصة بكفي هذه الخدمة سأتولى ببناء متجرك
                الجديد على منصة ووردبريس ووكومرس بشكل إحترافي جداً مع تصميم عصري
                وممتاز،ستحصل على كل ما تحتاجه لجعل متجرك مثاليًا، والبدء فورا في
                بيع كل منتجاتك وتحقيق دخل إضافي لمحفظتك،على ماذا ستحصل في هذه
                الخدمة ؟ ✓ إنشاء 5 أقسام وإضافتها إلى القائمة الرئيسية، وتعديل 3
                صفحات/ الرئيسية/ و من نحن /اتصل بنا
              </p>
              <div className="more-develop">
                <h6>
                  <img src={vector88} alt="icon" /> تطويرات متوفرة لهذه الخدمة
                </h6>
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
                      خدمة VIP متجر عربي (هوية بصرية لمتجرك+25 منتج رابح مع وصف
                      إحترافي+ ومقابلة زووم لشرح )
                    </label>
                    <p>
                      مقابل 100.00$ إضافية على سعر الخدمة. سيزيد مدة التنفيذ 7
                      أيام إضافية.
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
                      مقابل 50.00$ إضافية على سعر الخدمة. سيزيد مدة التنفيذ 3
                      أيام إضافية.
                    </p>
                  </div>
                </div>
              </div>
              <div className="add-cart">
                <div className="input-field">
                  <button className="add">
                    <i className="ti ti-md ti-plus"></i>
                  </button>
                  <input type="number" />
                  <button className="minus">
                    <i className="ti ti-md ti-minus"></i>
                  </button>
                </div>
                <div className="total d-flex justify-content-between align-items-center">
                  <p>
                    الإجمالي : <br />
                    <span>
                      + <span id="num">1</span> خدمة مضافة
                    </span>
                  </p>
                  <h6>
                    40.00<i className="fa-solid fa-dollar-sign"></i>
                  </h6>
                </div>
                <button className="request-order">
                  <i className="fa-solid fa-cart-plus"></i> اضف الي السلة
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-12 p-3">
            <div className="service-card">
              <div className="label">
                <i className="ti ti-md ti-info-hexagon-filled"></i>
                <p>بطاقة الخدمة</p>
              </div>
              <ul className="card-ul">
                <li className="rate d-flex justify-content-between">
                  <p>التقييمات ( 53 )</p>
                  <div className="rate">
                    <ul>
                      <li className="star">
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li className="star">
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li className="star">
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li className="star">
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className=" d-flex justify-content-between">
                  <p>المشترين</p>
                  <span>135</span>
                </li>
                <li className=" d-flex justify-content-between">
                  <p>طلبات جاري تنفيذها</p>
                  <span>1</span>
                </li>
                <li className=" d-flex justify-content-between">
                  <p>سعر الخدمة يبدأ من</p>
                  <span>$35.00</span>
                </li>
                <li className=" d-flex justify-content-between">
                  <p>مدة التسليم</p>
                  <span>ثلاثة أيام</span>
                </li>
              </ul>
            </div>
            <div className="rating-cards-container">
              <div className="rate-card">
                <div className="rate-owner">
                  <div className="rate-head d-flex">
                    <div className="img">
                      <img src={rateowner1} alt="icon" />
                    </div>
                    <div className="name-time">
                      <h5>احمد محسن</h5>
                      <span>منذ 9 أيام و18 ساعة</span>
                    </div>
                  </div>
                  <p className="rate-text">
                    انصح به وبقوة لن تجدون مثل خدمته وابداعه واخلاقه قد يفوتكم
                    عمركم اذا لم تتعملو معه لانه جدا بعد خدمته تقولون فعلا يستحق
                    التتعامل معه
                  </p>
                  <div className="rating-cards container">
                    <div className="row">
                      <div className="col-4 p-2">
                        <div className="r-card ">
                          <h6>التسليم بالموعد </h6>
                          <div className="rate">
                            <ul>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 p-2">
                        <div className="r-card ">
                          <h6>التواصل والمتابعة</h6>
                          <div className="rate">
                            <ul>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 p-2">
                        <div className="r-card ">
                          <h6>جودة الخدمة</h6>
                          <div className="rate">
                            <ul>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rate-card">
                <div className="rate-owner">
                  <div className="rate-head d-flex">
                    <div className="img">
                      <img src={rateowner3} alt="rater" />
                    </div>
                    <div className="name-time">
                      <h5>خالد عوض</h5>
                      <span>منذ 10 أيام و19 ساعة</span>
                    </div>
                  </div>
                  <p className="rate-text">
                    رقي في التعامل ومتعاون جدا وانصح الجميع بالتعامل معه
                  </p>
                  <div className="rating-cards container">
                    <div className="row">
                      <div className="col-4 p-2">
                        <div className="r-card ">
                          <h6>التسليم بالموعد</h6>
                          <div className="rate">
                            <ul>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 p-2">
                        <div className="r-card ">
                          <h6>التواصل والمتابعة</h6>
                          <div className="rate">
                            <ul>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 p-2">
                        <div className="r-card ">
                          <h6>جودة الخدمة</h6>
                          <div className="rate">
                            <ul>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rate-card">
                <div className="rate-owner">
                  <div className="rate-head d-flex">
                    <div className="img">
                      <img src={rateowner2} alt="rater" />
                    </div>
                    <div className="name-time">
                      <h5>يوسف الشربيني</h5>
                      <span>منذ 17 يوم و15 ساعة</span>
                    </div>
                  </div>
                  <p className="rate-text">
                    تجربة جدا رائعة مع الاخ رشيد محترف جدا في التصميم وتم
                    التسليم بالموعد بالاضافة لكونه شخص راقي جدا بالتعامل سررت
                    بمعرفتك وجزاك الله كل خير وبالتأكيد لن يكون اخر تعامل
                    شكرا،شكرا اخي رشيد
                  </p>
                  <div className="rating-cards container">
                    <div className="row">
                      <div className="col-4 p-2">
                        <div className="r-card ">
                          <h6>التسليم بالموعد</h6>
                          <div className="rate">
                            <ul>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 p-2">
                        <div className="r-card ">
                          <h6>التواصل والمتابعة</h6>
                          <div className="rate">
                            <ul>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 p-2">
                        <div className="r-card ">
                          <h6>جودة الخدمة</h6>
                          <div className="rate">
                            <ul>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
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

export default Services;
