import rateowner2 from "../Assets/images/rateowner2.webp";
import rateowner1 from "../Assets/images/rateowner1.webp";
import rateowner3 from "../Assets/images/rateowner3.webp";
import vector88 from "../Assets/images/vector88.png";
import avatarPlaceholder from "../Assets/images/avatar-placeholder-2.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination, Scrollbar } from "swiper/modules";

import { Link } from "react-router-dom";
import useServiceDetails from "../features/services/useServiceDetails";
import { useState } from "react";

const Services = () => {
  const { data } = useServiceDetails();
  const [avatarError, setAvatarError] = useState(false);

  function handleAvatarError() {
    setAvatarError(true);
  }

  console.log(data);

  return (
    <main>
      <section className="service-details container">
        <div className="row">
          <div className="service-content col-lg-7 col-12 p-3">
            {/* service slider */}
            <div className="swiper mySwiper">
              <div className="swiper-container mySwiper">
                <Swiper
                  spaceBetween={600}
                  slidesPerView={1}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  effect="fade"
                  loop={true}
                  scrollbar={{ draggable: true }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Scrollbar, EffectFade, Autoplay]}
                  className="mySwiper"
                >
                  {data?.images?.map((image) => (
                    <SwiperSlide key={image.image} className="service-slide">
                      <img src={image.image} alt="service" />
                    </SwiperSlide>
                  ))}

                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </Swiper>
              </div>
            </div>

            <div className="content">
              {/* service owner */}
              <div className="service-owner-card">
                <div className="d-flex justify-content-between h-100">
                  <div className="owner">
                    <div className="img">
                      <Link
                        to="assets/images/rate-owner2.jpg"
                        data-fancybox="owner"
                      >
                        {avatarError ? (
                          <img
                            src={data?.user.image}
                            alt="owner"
                            onError={handleAvatarError}
                          />
                        ) : (
                          <img src={avatarPlaceholder} alt="owner" />
                        )}
                      </Link>
                    </div>
                    <div className="title">
                      <h6>{data?.user?.name || "خالد عوض"}</h6>
                      {data?.is_favorite && (
                        <span>
                          <i className="ti ti-md ti-briefcase"></i> بائع مميز
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="btns">
                    <Link to="/chat" className="butn">
                      <i className="fa-regular fa-message-lines"></i>
                    </Link>
                    <div className="dropdown">
                      <button
                        className="butn dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa-regular fa-share-nodes"></i>
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
                          <button onClick={`copyToClipboard('#url',event)`}>
                            <i className="fa-sharp fa-regular fa-copy"></i>
                          </button>
                          <span
                            onClick={`copyToClipboard('#url',event)`}
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
              {/* service details */}
              <h4>{data?.title}</h4>
              <p>
                <Link to={`/search?categories=${data?.category?.id}`}>
                  {data?.category?.name}
                </Link>{" "}
                /{" "}
                <Link to={`/search?sub_categories=${data?.sub_category_id}`}>
                  {data?.sub_category?.name}
                </Link>
              </p>
              <p>{data?.description}</p>
              {/* service features (more development) */}
              {data?.developments && data?.developments.length > 0 && (
                <div className="more-develop">
                  <h6>
                    <img src={vector88} alt="icon" /> تطويرات متوفرة لهذه الخدمة
                  </h6>
                  {data?.developments.map((development) => (
                    <div
                      className="d-flex input-field align-items-baseline"
                      key={development?.id}
                    >
                      <input
                        type="checkbox"
                        id="check-1"
                        checked={development.in_cart}
                      />
                      <div className="label">
                        <label htmlFor="check-1">
                          {development.description}
                        </label>
                        <p>مقابل {development.price}$ إضافية على سعر الخدمة.</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {/* add to cart */}
              <div className="add-cart">
                <div className="input-field">
                  <button className="add">
                    <i className="fa-regular fa-plus"></i>
                  </button>
                  <input type="number" />
                  <button className="minus">
                    <i className="fa-regular fa-minus"></i>
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
                  <i className="fa-regular fa-cart-plus"></i> اضف الي السلة
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-12 p-3">
            {/* service card */}
            <div className="service-card">
              <div className="label d-flex align-items-center gap-2">
                <i className="fa-regular fa-circle-info"></i>
                <p className="p-0 m-0">بطاقة الخدمة</p>
              </div>
              <ul className="card-ul">
                <li className="rate d-flex justify-content-between">
                  <p>
                    التقييمات{" "}
                    {data?.user.customer_count &&
                      `(${data?.user.customer_count})`}{" "}
                  </p>
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
                  <span>{data?.orders_count}</span>
                </li>
                <li className=" d-flex justify-content-between">
                  <p>سعر الخدمة يبدأ من</p>
                  <span>${data?.price}</span>
                </li>
                <li className=" d-flex justify-content-between">
                  <p>مدة التسليم</p>
                  <span>{data?.days} يوم</span>
                </li>
              </ul>
            </div>
            {/* rating cards */}
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
