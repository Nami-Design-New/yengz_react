import React from "react";
import avatar from "../Assets/images/avatar.png";

import Tabsui from "../ui/Tabsui";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <main>
      <section className="profile-section container">
        <div className="row">
          <div className="profile-descripe col-lg-5 col-12">
            <div className="banner">
              <div className="user-avatar">
                <Link to="assets/images/avatar.png" data-fancybox="user-avatar">
                  <img src={avatar} alt="user-avatar" />
                </Link>
                <span className="status"></span>
              </div>
            </div>
            <div className="name-rate">
              <h6>خالد عوض</h6>
              <span>
                <i className="ti ti-md ti-briefcase"></i> بائع مميز
              </span>
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
            <div className="cash">
              <div className="head">
                <h4>
                  <i className="ti ti-md ti-info-circle"></i> الرصيد
                </h4>
                <Link to="#!">سحب</Link>
              </div>
              <div className="row mt-3">
                <div className="col-4 p-0">
                  <div className="cash-info">
                    <span>الرصيد الكلي</span>
                    <h6>
                      100.00 <i className="fa-solid fa-dollar-sign"></i>
                    </h6>
                  </div>
                </div>
                <div className="col-4 p-0">
                  <div className="cash-info">
                    <span> رصيد معلّق </span>
                    <h6>
                      0.00 <i className="fa-solid fa-dollar-sign"></i>
                    </h6>
                  </div>
                </div>
                <div className="col-4 p-0">
                  <div className="cash-info">
                    <span> أرباح يمكن سحبها </span>
                    <h6>
                      89.00 <i className="fa-solid fa-dollar-sign"></i>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-taps col-lg-7 col-12 pe-lg-5 ps-lg-5 pe-0 ps-0">
            <Tabsui />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
