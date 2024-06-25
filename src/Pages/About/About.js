import React from "react";
import about1 from "../../Assets/images/about-1.png";
import m1 from "../../Assets/images/m1.png";
import m2 from "../../Assets/images/m2.png";
import m3 from "../../Assets/images/m3.png";
import m4 from "../../Assets/images/m4.png";
import m5 from "../../Assets/images/m5.png";
import m6 from "../../Assets/images/m6.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SectionHead from "../../Components/SectionHead/SectionHead";


const About = () => {
  return (
    <>
      <div className="section-head">
      <SectionHead />        
      </div>

      <section className="about-section">
        <div className="about_wrap">
          <div className="container">
            <div className="row mb-64">

              <div className="col-lg-6 col-12 mb-lg-0 mb-5">
                <div className="about-text" data-aos="fade-up">

                  <h3>
                    انضم إلى أفضل سوق عالمي للعمال والمُقدمين للخدمات الحرة.
                    
                  </h3>
                  <p>
                    في هذا السوق الرائع، ستجد العديد من الفرص والإمكانيات لتطوير
                    مهاراتك وبناء مستقبل مهني مشرق. نحن هنا لنقدم لك أفضل الفرص
                    للعمل على مشاريع متنوعة ومثيرة، وتقديم خدماتك الاحترافية
                    لعملاء من جميع أنحاء العالم. انضم إلينا اليوم وكن جزءًا من
                    هذه الجماعة المذهلة من الأفراد الملهمين والموهوبين الذين
                    يسعون إلى تحقيق النجاح وتحقيق أحلامهم المهنية.
                  </p>
                  <ul>
                    <li>
                      <i className="fa-sharp fa-regular fa-check"></i> تواصل مع
                      المستقلين ذوي الخبرة التجارية المثبتة
                    </li>
                    <li>
                      <i className="fa-sharp fa-regular fa-check"></i> احصل على
                      الموهبة المثالية من قبل مدير نجاح العملاء
                    </li>
                    <li>
                      <i className="fa-sharp fa-regular fa-check"></i> جودة لا
                      مثيل لها للوظائف البعيدة والمختلطة والمرنة
                    </li>
                  </ul>
                  <a href="search.html">ابحث الان</a>
                </div>
              </div>

              <div className="col-lg-6 col-12">
                <div className="img" data-aos="fade-up">
                  <img src={about1} alt="" />
                </div>
              </div>

            </div>
          </div>

          <div className="counts-row">

            <div className="container">
              <div className="row">
                <div className="col-lg-3 p-3 col-6">
                  <div className="count-div" data-aos="fade-up">
                    <h2>
                      <span>834</span>M
                    </h2>
                    <p>إجمالي المستقلين</p>
                  </div>
                </div>

                <div className="col-lg-3 p-3 col-6">
                  <div className="count-div" data-aos="fade-up">
                    <h2>
                      <span>732</span>M
                    </h2>
                    <p>تقييم ايجابى</p>
                  </div>
                </div>

                <div className="col-lg-3 p-3 col-6">
                  <div className="count-div" data-aos="fade-up">
                    <h2>
                      <span>90</span>M
                    </h2>
                    <p>طلب وارد</p>
                  </div>
                </div>

                <div className="col-lg-3 p-3 col-6">
                  <div className="count-div" data-aos="fade-up">
                    <h2>
                      <span>236</span>M
                    </h2>
                    <p>المشاريع المنجزة</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="container">
            <div className="row">
              <div className="testmonials">
                <h3 data-aos="fade-up">
                  أصوات النجاح: شهادات من عملائنا المميزين
                </h3>
                <Swiper
                  spaceBetween={32}
                  slidesPerView={3}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                  <div className="swiper-slide">
                      <div className="testmional-card">
                        <div className="d-flex flex-column gap-2">
                          <div className="rate">
                            <ul>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                            </ul>
                          </div>
                          <p className="opinion">
                            "لقد كانت تجربتي على هذا الموقع رائعة! وجدت الكثير
                            من المحترفين الموهوبين الذين ساعدوني في إتمام
                            مشاريعي بكل جودة واحترافية. أوصي به بشدة!"
                          </p>
                        </div>
                        <div className="owner">
                          <div className="d-flex flex-column">
                            <h6>محمد رضوان</h6>
                          </div>
                          <span>May 9, 2023</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                  <div className="swiper-slide">
                      <div className="testmional-card">
                        <div className="d-flex flex-column gap-2">
                          <div className="rate">
                            <ul>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                            </ul>
                          </div>
                          <p className="opinion">
                            "لقد كانت تجربتي على هذا الموقع رائعة! وجدت الكثير
                            من المحترفين الموهوبين الذين ساعدوني في إتمام
                            مشاريعي بكل جودة واحترافية. أوصي به بشدة!"
                          </p>
                        </div>
                        <div className="owner">
                          <div className="d-flex flex-column">
                            <h6>محمد رضوان</h6>
                          </div>
                          <span>May 9, 2023</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                  <div className="swiper-slide">
                      <div className="testmional-card">
                        <div className="d-flex flex-column gap-2">
                          <div className="rate">
                            <ul>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                            </ul>
                          </div>
                          <p className="opinion">
                            "لقد كانت تجربتي على هذا الموقع رائعة! وجدت الكثير
                            من المحترفين الموهوبين الذين ساعدوني في إتمام
                            مشاريعي بكل جودة واحترافية. أوصي به بشدة!"
                          </p>
                        </div>
                        <div className="owner">
                          <div className="d-flex flex-column">
                            <h6>محمد رضوان</h6>
                          </div>
                          <span>May 9, 2023</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                  <div className="swiper-slide">
                      <div className="testmional-card">
                        <div className="d-flex flex-column gap-2">
                          <div className="rate">
                            <ul>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                            </ul>
                          </div>
                          <p className="opinion">
                            "لقد كانت تجربتي على هذا الموقع رائعة! وجدت الكثير
                            من المحترفين الموهوبين الذين ساعدوني في إتمام
                            مشاريعي بكل جودة واحترافية. أوصي به بشدة!"
                          </p>
                        </div>
                        <div className="owner">
                          <div className="d-flex flex-column">
                            <h6>محمد رضوان</h6>
                          </div>
                          <span>May 9, 2023</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                  <div className="swiper-slide">
                      <div className="testmional-card">
                        <div className="d-flex flex-column gap-2">
                          <div className="rate">
                            <ul>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </li>
                            </ul>
                          </div>
                          <p className="opinion">
                            "لقد كانت تجربتي على هذا الموقع رائعة! وجدت الكثير
                            من المحترفين الموهوبين الذين ساعدوني في إتمام
                            مشاريعي بكل جودة واحترافية. أوصي به بشدة!"
                          </p>
                        </div>
                        <div className="owner">
                          <div className="d-flex flex-column">
                            <h6>محمد رضوان</h6>
                          </div>
                          <span>May 9, 2023</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>

          <div className="our-partners">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="text-center">
                    <h6 data-aos="fade-up">موثوق به من قبل الأفضل في العالم</h6>
                  </div>
                </div>
              </div>
              <div className="row" data-aos="fade-up">
                <div className="col-6 p-3 col-md-4 col-xl-2">
                  <div className="partner_item text-center">
                    <img className="wa m-auto" src={m1} alt="1.png" />
                  </div>
                </div>
                <div className="col-6 p-3 col-md-4 col-xl-2">
                  <div className="partner_item text-center">
                    <img className="wa m-auto" src={m2} alt="2.png" />
                  </div>
                </div>
                <div className="col-6 p-3 col-md-4 col-xl-2">
                  <div className="partner_item text-center">
                    <img className="wa m-auto" src={m3} alt="3.png" />
                  </div>
                </div>
                <div className="col-6 p-3 col-md-4 col-xl-2">
                  <div className="partner_item text-center">
                    <img className="wa m-auto" src={m4} alt="4.png" />
                  </div>
                </div>
                <div className="col-6 p-3 col-md-4 col-xl-2">
                  <div className="partner_item text-center">
                    <img className="wa m-auto" src={m5} alt="5.png" />
                  </div>
                </div>
                <div className="col-6 p-3 col-md-4 col-xl-2">
                  <div className="partner_item text-center">
                    <img className="wa m-auto" src={m6} alt="6.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Newsletter">
          <NewsLetter />
        </div>
      </section>
      
    </>
  );
};

export default About;
