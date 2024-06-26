import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import category1 from "../Assets/images/category1.webp";
import category2 from "../Assets/images/category2.webp";
import category3 from "../Assets/images/category3.webp";
import category4 from "../Assets/images/category4.webp";
import category5 from "../Assets/images/category5.webp";
import bann from "../Assets/images/bann.webp";
import { Link } from "react-router-dom";
import NewsLetter from "../ui/NewsLetter";
// import Canavs from "../ui/Canavs";

const Home = () => {
  return (
    <>
      <main className="main">
        <section className="mainSection">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-4 order-md-2 p-1">
                {/*orbit canvas */}

                <div id="globe">{/*<Canavs /> */}</div>
              </div>
              <div className="col-md-8 order-md-1 p-1">
                {/*main slider */}

                <div className="mainSlider swiperContainer">
                  <div className="swiper mainSliderContainer">
                    <div className="swiper-wrapper">
                      {/*swiper-slide */}

                      <div className="swiper-slide mainSlideItem">
                        <div className="info">
                          <h1 className="sliderTitle">
                            أكبر سوق عربي لبيع وشراء الخدمات المصغرة
                          </h1>
                          <p className="hint">
                            أنجز أعمالك بسهولة وأمان بلاسعار التي تناسبك
                          </p>
                        </div>
                      </div>
                      {/*swiper-slide */}
                    </div>
                  </div>
                </div>
                <div className="hero_content">
                  <form action="">
                    <div className="input-fileld">
                      <i className="fa-sharp fa-regular fa-magnifying-glass"></i>
                      <input
                        type="text"
                        id="search"
                        name="search"
                        placeholder="جرّب: تصميم تطبيق أو موقع .."
                      />
                      <button>بحث</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*start  categories*/}

        <section className="categories ">
          <div className="container">
            <div className="row-head" data-aos="fade-up">
              <h6>
                <i className="fa-sharp fa-solid fa-grid-2"></i> الأقسام
              </h6>
              <Link to="departments">
                عرض الكل <i className="fa-regular fa-angle-left"></i>
              </Link>
            </div>

            <div className="swiper categories-swiper">
              <div className="swiper-wrapper">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={4}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="category-card" data-aos="fade-up">
                        <Link to="/Search" className="inner-card">
                          <div className="category-img">
                            <img src={category1} alt="" />
                          </div>
                          <div className="category-content">
                            <div className="top-area">
                              <h6 className="title mb-1">1.853 خدمة</h6>
                              <h5 className="text"> برمجة وتطوير </h5>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="category-card" data-aos="fade-up">
                        <Link to="/Search" className="inner-card">
                          <div className="category-img">
                            <img src={category2} alt="" />
                          </div>
                          <div className="category-content">
                            <div className="top-area">
                              <h6 className="title mb-1">1.853 خدمة</h6>
                              <h5 className="text"> تصميم وابداع </h5>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="category-card" data-aos="fade-up">
                        <Link to="/Search" className="inner-card">
                          <div className="category-img">
                            <img src={category3} alt="" />
                          </div>
                          <div className="category-content">
                            <div className="top-area">
                              <h6 className="title mb-1">1.853 خدمة</h6>
                              <h5 className="text"> تسويق الكتروني </h5>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="category-card" data-aos="fade-up">
                        <Link to="/Search" className="inner-card">
                          <div className="category-img">
                            <img src={category4} alt="" />
                          </div>
                          <div className="category-content">
                            <div className="top-area">
                              <h6 className="title mb-1">1.853 خدمة</h6>
                              <h5 className="text"> كتابة وترجمة </h5>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="category-card" data-aos="fade-up">
                        <Link href="search.html" className="inner-card">
                          <div className="category-img">
                            <img src={category5} alt="" />
                          </div>
                          <div className="category-content">
                            <div className="top-area">
                              <h6 className="title mb-1">1.853 خدمة</h6>
                              <h5 className="text"> صوتيات </h5>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        {/*End  categories*/}

        {/*start  departments*/}

        <section className="popular_departments">
          <h2 className="title" data-aos="fade-up">
            الخدمات الاكثر شهرة
          </h2>
          <p className="sub-title" data-aos="fade-up">
            الخدمات الأكثر مشاهدة والأكثر مبيعًا على الإطلاق
          </p>
          <div className="container">
            <div className="row-head" data-aos="fade-up">
              <h6>
                <i className="fa-light fa-briefcase"></i> خدمات أعمال
              </h6>
              <Link to="departments">
                عرض الكل <i className="fa-regular fa-angle-left"></i>
              </Link>
            </div>

            <div className="row mb-5">
              <div className="col-lg-3 col-6 mb-3">
                <div className="service-card" data-aos="fade-up">
                  <Link to="Services" className="img">
                    <img src={bann} alt="" />
                  </Link>
                  <div className="content">
                    <h6>اصنع لك تطبيق متجر الكتروني باستخدام flutter...</h6>
                    <p>
                      <a href="#!">برمجة وتطوير</a> / <span>إنشاء تطبيق</span>
                    </p>
                    <div className="d-flex gap-3">
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
                      <span className="sell-count">( 4 )</span>
                    </div>
                    <h6 className="start-from">
                      تبدأ من : <b>10.00$</b>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 mb-3">
                <div className="service-card" data-aos="fade-up">
                  <Link to="Services" className="img">
                    <img src={bann} alt="" />
                  </Link>
                  <div className="content">
                    <h6>اصنع لك تطبيق متجر الكتروني باستخدام flutter...</h6>
                    <p>
                      <a href="#!">برمجة وتطوير</a> / <span>إنشاء تطبيق</span>
                    </p>
                    <div className="d-flex gap-3">
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
                      <span className="sell-count">( 4 )</span>
                    </div>
                    <h6 className="start-from">
                      تبدأ من : <b>10.00$</b>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 mb-3">
                <div className="service-card" data-aos="fade-up">
                  <Link to="Services" className="img">
                    <img src={bann} alt="" />
                  </Link>
                  <div className="content">
                    <h6>اصنع لك تطبيق متجر الكتروني باستخدام flutter...</h6>
                    <p>
                      <a href="#!">برمجة وتطوير</a> / <span>إنشاء تطبيق</span>
                    </p>
                    <div className="d-flex gap-3">
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
                      <span className="sell-count">( 4 )</span>
                    </div>
                    <h6 className="start-from">
                      تبدأ من : <b>10.00$</b>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-6 mb-3">
                <div className="service-card" data-aos="fade-up">
                  <Link to="Services" className="img">
                    <img src={bann} alt="" />
                  </Link>
                  <div className="content">
                    <h6>اصنع لك تطبيق متجر الكتروني باستخدام flutter...</h6>
                    <p>
                      <a href="#!">برمجة وتطوير</a> / <span>إنشاء تطبيق</span>
                    </p>
                    <div className="d-flex gap-3">
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
                      <span className="sell-count">( 4 )</span>
                    </div>
                    <h6 className="start-from">
                      تبدأ من : <b>10.00$</b>
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="row-head" data-aos="fade-up">
              <h6>
                <i className="fa-sharp fa-light fa-code"></i> خدمات برمجة وتطوير
              </h6>
              <Link to="departments">
                عرض الكل <i className="fa-regular fa-angle-left"></i>
              </Link>
            </div>

            <div className="row mb-5">
              <div className="col-lg-3 col-6 mb-3">
                <div className="service-card" data-aos="fade-up">
                  <Link to="Services" className="img">
                    <img src={bann} alt="" />
                  </Link>
                  <div className="content">
                    <h6>اصنع لك تطبيق متجر الكتروني باستخدام flutter...</h6>
                    <p>
                      <a href="#!">برمجة وتطوير</a> / <span>إنشاء تطبيق</span>
                    </p>
                    <div className="d-flex gap-3">
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
                      <span className="sell-count">( 4 )</span>
                    </div>
                    <h6 className="start-from">
                      تبدأ من : <b>10.00$</b>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 mb-3">
                <div className="service-card" data-aos="fade-up">
                  <Link to="Services" className="img">
                    <img src={bann} alt="" />
                  </Link>
                  <div className="content">
                    <h6>اصنع لك تطبيق متجر الكتروني باستخدام flutter...</h6>
                    <p>
                      <a href="#!">برمجة وتطوير</a> / <span>إنشاء تطبيق</span>
                    </p>
                    <div className="d-flex gap-3">
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
                      <span className="sell-count">( 4 )</span>
                    </div>
                    <h6 className="start-from">
                      تبدأ من : <b>10.00$</b>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 mb-3">
                <div className="service-card" data-aos="fade-up">
                  <Link to="Services" className="img">
                    <img src={bann} alt="" />
                  </Link>
                  <div className="content">
                    <h6>اصنع لك تطبيق متجر الكتروني باستخدام flutter...</h6>
                    <p>
                      <a href="#!">برمجة وتطوير</a> / <span>إنشاء تطبيق</span>
                    </p>
                    <div className="d-flex gap-3">
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
                      <span className="sell-count">( 4 )</span>
                    </div>
                    <h6 className="start-from">
                      تبدأ من : <b>10.00$</b>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 mb-3">
                <div className="service-card" data-aos="fade-up">
                  <Link to="Services" className="img">
                    <img src={bann} alt="" />
                  </Link>
                  <div className="content">
                    <h6>اصنع لك تطبيق متجر الكتروني باستخدام flutter...</h6>
                    <p>
                      <a href="#!">برمجة وتطوير</a> / <span>إنشاء تطبيق</span>
                    </p>
                    <div className="d-flex gap-3">
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
                      <span className="sell-count">( 4 )</span>
                    </div>
                    <h6 className="start-from">
                      تبدأ من : <b>10.00$</b>
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="row-head" data-aos="fade-up">
              <h6>
                <i className="fa-light fa-language"></i> خدمات كتابة وترجمة
              </h6>
              <Link to="departments">
                عرض الكل <i className="fa-regular fa-angle-left"></i>
              </Link>
            </div>

            <div className="row mb-5">
              <div className="col-lg-3 col-6 mb-3">
                <div className="service-card" data-aos="fade-up">
                  <Link to="Services" className="img">
                    <img src={bann} alt="" />
                  </Link>
                  <div className="content">
                    <h6>اصنع لك تطبيق متجر الكتروني باستخدام flutter...</h6>
                    <p>
                      <a href="#!">برمجة وتطوير</a> / <span>إنشاء تطبيق</span>
                    </p>
                    <div className="d-flex gap-3">
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
                      <span className="sell-count">( 4 )</span>
                    </div>
                    <h6 className="start-from">
                      تبدأ من : <b>10.00$</b>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 mb-3">
                <div className="service-card" data-aos="fade-up">
                  <Link to="Services" className="img">
                    <img src={bann} alt="" />
                  </Link>

                  <div className="content">
                    <h6>اصنع لك تطبيق متجر الكتروني باستخدام flutter...</h6>
                    <p>
                      <a href="#!">برمجة وتطوير</a> / <span>إنشاء تطبيق</span>
                    </p>
                    <div className="d-flex gap-3">
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
                      <span className="sell-count">( 4 )</span>
                    </div>
                    <h6 className="start-from">
                      تبدأ من : <b>10.00$</b>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 mb-3">
                <div className="service-card" data-aos="fade-up">
                  <Link to="Services" className="img">
                    <img src={bann} alt="" />
                  </Link>
                  <div className="content">
                    <h6>اصنع لك تطبيق متجر الكتروني باستخدام flutter...</h6>
                    <p>
                      <a href="#!">برمجة وتطوير</a> / <span>إنشاء تطبيق</span>
                    </p>
                    <div className="d-flex gap-3">
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
                      <span className="sell-count">( 4 )</span>
                    </div>
                    <h6 className="start-from">
                      تبدأ من : <b>10.00$</b>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 mb-3">
                <div className="service-card" data-aos="fade-up">
                  <Link to="Services" className="img">
                    <img src={bann} alt="" />
                  </Link>
                  <div className="content">
                    <h6>اصنع لك تطبيق متجر الكتروني باستخدام flutter...</h6>
                    <p>
                      <a href="#!">برمجة وتطوير</a> / <span>إنشاء تطبيق</span>
                    </p>
                    <div className="d-flex gap-3">
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
                      <span className="sell-count">( 4 )</span>
                    </div>
                    <h6 className="start-from">
                      تبدأ من : <b>10.00$</b>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*End  departments*/}

        {/*start  newsletter*/}

        <NewsLetter />

        {/*End  newsletter*/}
      </main>
      <div className="smallNav">
        <ul>
          <li>
            <Link to="index.html" className="active">
              <i className="fa-sharp fa-solid fa-house"></i>
              <span>الرئيسية</span>
            </Link>
          </li>
          <li>
            <Link to="profile.html">
              <i className="fa-solid fa-user"></i>
              <span>حسابى</span>
            </Link>
          </li>
          <li>
            <Link to="cart.html">
              <i className="fa-sharp fa-solid fa-cart-shopping"></i>
              <span>السلة</span>
            </Link>
          </li>
          <li>
            <Link to="notifications.html">
              <i className="fa-sharp fa-solid fa-bell"></i>
              <span>الاشعارات</span>
              <span className="num-count2">3</span>
            </Link>
          </li>
          <li>
            <Link to="recieved-requests.html">
              <i className="fa-sharp fa-solid fa-cubes"></i>
              <span>الطلبات</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
