import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import rateowner1 from "../../Assets/images/rateowner1.webp";
import rateowner2 from "../../Assets/images/rateowner2.webp";
import rateowner3 from "../../Assets/images/rateowner3.webp";
import Rect from "../../Assets/images/Rect.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IconCirclePlus, IconPlus } from "@tabler/icons-react";
import ServiceCard from "../../ui/cards/ServiceCard";

const ProfileTabs = ({ user }) => {
  const { t } = useTranslation();
  return (
    <Tabs defaultActiveKey="about" id="uncontrolled-tab-example">
      {/* about me */}
      <Tab eventKey="about" title={t("profile.aboutMe")} className="tab_item">
        <div className="user_about">
          {user?.about ? (
            <p>{user?.about}</p>
          ) : (
            <Link to="/edit-profile">
              <IconPlus stroke={1} /> {t("profile.noAbout")}
            </Link>
          )}
        </div>
      </Tab>

      {/* services */}
      <Tab
        eventKey="service"
        title={t("profile.services")}
        className="tab_item"
      >
        <div className="services-contianer">
          <Link to="/add-sevice" className="add-service">
            <IconCirclePlus stroke={2} /> {t("profile.addService")}
          </Link>
          <div className="container mt-3">
            <div className="row">
              <div className="col-lg-6 col-12 p-2">
                <ServiceCard canEdit={true} />
              </div>
            </div>
          </div>
        </div>
      </Tab>

      <Tab eventKey="Rating" title="التقييمات" className="tab_item">
        <div>
          <div className="rate-card">
            <div className="rate-owner">
              <div className="rate-head d-flex">
                <div className="img">
                  <img src={rateowner1} alt="rater" />
                </div>
                <div className="name-time">
                  <h5>احمد محسن</h5>
                  <span>منذ 9 أيام و18 ساعة</span>
                </div>
              </div>
              <p className="rate-text">
                انصح به وبقوة لن تجدون مثل خدمته وابداعه واخلاقه قد يفوتكم عمركم
                اذا لم تتعملو معه لانه جدا بعد خدمته تقولون فعلا يستحق التتعامل
                معه
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
                تجربة جدا رائعة مع الاخ رشيد محترف جدا في التصميم وتم التسليم
                بالموعد بالاضافة لكونه شخص راقي جدا بالتعامل سررت بمعرفتك وجزاك
                الله كل خير وبالتأكيد لن يكون اخر تعامل شكرا،شكرا اخي رشيد
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
      </Tab>

      <Tab eventKey="documentation" title="توثيقات" className="tab_item">
        <div className="tab-pane">
          <ul className="verify-list">
            <li className="d-flex gap-2">
              <span>
                <i className="ti ti-md ti-discount-check-filled"></i>
              </span>{" "}
              الهوية الشخصية
            </li>
            <li className="d-flex gap-2">
              <span>
                <i className="ti ti-md ti-discount-check-filled"></i>
              </span>{" "}
              رقم الجوال
            </li>
            <li className="d-flex gap-2">
              <span>
                <i className="ti ti-md ti-discount-check-filled"></i>
              </span>{" "}
              البريد الإلكتروني
            </li>
          </ul>

          <div className="unverified-box">
            <h6>الحساب غير موثق</h6>
            <a href="auth-verify-steps.html">توثيق الحساب</a>
          </div>
        </div>
      </Tab>

      <Tab eventKey="statistics" title="احصائيات" className="tab_item">
        <div
          className="tab-pane"
          id="pills-statics"
          role="tabpanel"
          aria-labelledby="pills-statics-tab"
        >
          <ul className="statics-list">
            <li className="d-flex justify-content-between">
              <h6>متوسط سرعة الرد</h6>
              <span>
                60 <small>د</small>
              </span>
            </li>
            <li className="d-flex justify-content-between">
              <h6>الخدمات المنشورة</h6>
              <span>4</span>
            </li>
            <li className="d-flex justify-content-between">
              <h6>عدد العملاء</h6>
              <span>65</span>
            </li>
          </ul>
        </div>
      </Tab>

      <Tab eventKey="My business" title="اعمالي" className="tab_item">
        <div className="tab-pane ">
          <ul className="statics-list">
            <li className="d-flex justify-content-between">
              <div className="Item_bussnies row">
                <div className="box col-5">
                  <img src={Rect} alt="" />
                  <h4>تنفيذ اردوينو</h4>
                  <div className="icons">
                    <div className="backG">
                      <i className="fa-solid fa-pen"></i>
                    </div>
                    <div className="backG">
                      <i className="fa-solid fa-trash"></i>
                    </div>
                  </div>
                </div>
                <div className="box col-5">
                  <img src={Rect} alt="" />
                  <h4>تنفيذ اردوينو</h4>
                  <div className="icons">
                    <div className="backG">
                      <i className="fa-solid fa-pen"></i>
                    </div>
                    <div className="backG">
                      <i className="fa-solid fa-trash"></i>
                    </div>
                  </div>
                </div>

                <div className="box col-5">
                  <img src={Rect} alt="" />
                  <h4>تنفيذ اردوينو</h4>
                  <div className="icons">
                    <div className="backG">
                      <i className="fa-solid fa-pen"></i>
                    </div>
                    <div className="backG">
                      <i className="fa-solid fa-trash"></i>
                    </div>
                  </div>
                </div>

                <div className="box col-5">
                  <img src={Rect} alt="" />
                  <h4>تنفيذ اردوينو</h4>
                  <div className="icons">
                    <div className="backG">
                      <i className="fa-solid fa-pen"></i>
                    </div>
                    <div className="backG">
                      <i className="fa-solid fa-trash"></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Tab>

      <Tab eventKey="My testimonials" title="شهاداتي " className="tab_item">
        <div className="tab-pane ">
          <ul className="statics-list">
            <li className="d-flex justify-content-between">
              <div className="Item_bussnies row">
                <div className="box col-6">
                  <img src={Rect} alt="" />
                  <h4>تنفيذ اردوينو</h4>
                  <div className="icons">
                    <div className="backG">
                      <i className="fa-solid fa-pen"></i>
                    </div>
                    <div className="backG">
                      <i className="fa-solid fa-trash"></i>
                    </div>
                  </div>
                </div>
                <div className="box col-6">
                  <img src={Rect} alt="" />
                  <h4>تنفيذ اردوينو</h4>
                  <div className="icons">
                    <div className="backG">
                      <i className="fa-solid fa-pen"></i>
                    </div>
                    <div className="backG">
                      <i className="fa-solid fa-trash"></i>
                    </div>
                  </div>
                </div>

                <div className="box col-6">
                  <img src={Rect} alt="" />
                  <h4>تنفيذ اردوينو</h4>
                  <div className="icons">
                    <div className="backG">
                      <i className="fa-solid fa-pen"></i>
                    </div>
                    <div className="backG">
                      <i className="fa-solid fa-trash"></i>
                    </div>
                  </div>
                </div>

                <div className="box col-6">
                  <img src={Rect} alt="" />
                  <h4>تنفيذ اردوينو</h4>
                  <div className="icons">
                    <div className="backG">
                      <i className="fa-solid fa-pen"></i>
                    </div>
                    <div className="backG">
                      <i className="fa-solid fa-trash"></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Tab>
    </Tabs>
  );
};

export default ProfileTabs;
