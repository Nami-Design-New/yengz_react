import React from "react";
import rateowner3 from "../Assets/images/rateowner3.webp";

const Notifcations = () => {
  return (
    <main>
      <div className="notifications_section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12 d-flex flex-column gap-2">
              <div className="notify">
                <div className="notify_info">
                  <div className="img">
                    <img src={rateowner3} alt="avatar" />
                  </div>
                  <div className="content">
                    <h6>رسالة جديدة</h6>
                    <p>انشاء متجر الكتروني احترافي على منصة ووردبريس ووكومرس</p>
                  </div>
                </div>
                <div className="date_time">
                  <span>
                    12 / 1 / 2024 <i className="fa-thin fa-calendar-days"></i>
                  </span>
                  <span>
                    03:45 <i className="fa-sharp fa-light fa-clock"></i>
                  </span>
                </div>
              </div>
              <div className="notify">
                <div className="notify_info">
                  <div className="img">
                    <img src={rateowner3} alt="avatar" />
                  </div>
                  <div className="content">
                    <h6>رسالة جديدة</h6>
                    <p>انشاء متجر الكتروني احترافي على منصة ووردبريس ووكومرس</p>
                  </div>
                </div>
                <div className="date_time">
                  <span>
                    12 / 1 / 2024 <i className="fa-thin fa-calendar-days"></i>
                  </span>
                  <span>
                    03:45 <i className="fa-sharp fa-light fa-clock"></i>
                  </span>
                </div>
              </div>
              <div className="notify">
                <div className="notify_info">
                  <div className="img">
                    <img src={rateowner3} alt="avatar" />
                  </div>
                  <div className="content">
                    <h6>رسالة جديدة</h6>
                    <p>انشاء متجر الكتروني احترافي على منصة ووردبريس ووكومرس</p>
                  </div>
                </div>
                <div className="date_time">
                  <span>
                    12 / 1 / 2024 <i className="fa-thin fa-calendar-days"></i>
                  </span>
                  <span>
                    03:45 <i className="fa-sharp fa-light fa-clock"></i>
                  </span>
                </div>
              </div>
              <div className="notify">
                <div className="notify_info">
                  <div className="img">
                    <img src={rateowner3} alt="avatar" />
                  </div>
                  <div className="content">
                    <h6>رسالة جديدة</h6>
                    <p>انشاء متجر الكتروني احترافي على منصة ووردبريس ووكومرس</p>
                  </div>
                </div>
                <div className="date_time">
                  <span>
                    12 / 1 / 2024 <i className="fa-thin fa-calendar-days"></i>
                  </span>
                  <span>
                    03:45 <i className="fa-sharp fa-light fa-clock"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-12 d-flex justify-content-center mt-4">
              <div className="pagination">
                <button className="nextBtn">التالى</button>
                <div className="dots">
                  <button className="dot">1</button>
                  <button className="dot">2</button>
                  <button className="dot">3</button>
                  <button className="dot">4</button>
                </div>
                <button className="prevBtn">السابق</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Notifcations;
