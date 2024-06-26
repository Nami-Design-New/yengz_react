import React from "react";

import avatar from "../Assets/images/avatar.png";
import av1 from "../Assets/images/av1.png";
import av2 from "../Assets/images/av2.png";
import logo from "../Assets/images/logo.svg";
import { Link } from "react-router-dom";
import "../styles/fontawesome.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import "../styles/dropdownes.css";

const Navbar = () => {
  return (
    <header>
      <nav className="tnavbar">
        <div className="toogler">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="small-media-menu">
          <div className="user">
            <Link to="profile" className="avatar">
              <img src={avatar} alt="" />5
            </Link>
            <div className="userr">
              <h6>محمدعبد المعطي</h6>
              <span>بائع مميز</span>
            </div>
          </div>
        </div>

        <div className="right-wrapper">
          <div className="logo d-block">
            <Link to="/">
              <img className="brand" src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="nav-links">
            <li className="nav-link">
              <Link to="services.html">
                <i className="far fa-plus"></i> اضف خدمه
              </Link>
            </li>
            <li className="nav-link">
              <Link to="departments">
                <i className="far fa-cube"></i> الأقسام
              </Link>
            </li>
            <li className="nav-link">
              <Link to="purchases">
                <i className="far fa-shopping-bag"></i> المشتريات
              </Link>
              <span className="num-count2">3</span>
            </li>
            <li className="nav-link">
              <Link to="RecievedRequest">
                <i className="far fa-clipboard-list-check"></i> الطلبات الواردة
              </Link>
              <span className="num-count2">2</span>
            </li>
            <li className="nav-link">
              <Link to="Requests">
                <i className="far fa-hand-point-up"></i> اطلب خدمة علي زوقك
              </Link>
            </li>
          </ul>
        </div>

        <div className="left-wrapper">
          <ul className="loged-in-minor-menu">
            {/* search*/}
            <li className="link">
              <Dropdown>
                <Dropdown.Toggle
                  style={{ backgroundColor: "#f4f4f4" }}
                  id="dropdown-basic"
                >
                  <i className="fa-regular fa-magnifying-glass"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item className="dropItem">
                    <form action="search.html" aria-labelledby="searchmenu">
                      <input
                        className="Search_input"
                        type="text"
                        placeholder="ابحث عن..."
                      />
                    </form>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>

            {/*lang*

            <li className="link">

            <Dropdown>
                <Dropdown.Toggle  style={{backgroundColor:"#f4f4f4"}} id="dropdown-basic">
                <i className='fa-regular fa-language rounded-circle '></i>


                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu"> 

                  <Dropdown.Item >
                  <Link className="dropdown-item" to="#">
                    <div className="circle-filled"></div>
                    عربى
                  </Link>


                  </Dropdown.Item>

                  <Dropdown.Item >
                  <Link className="dropdown-item" to="#">
                    <div className="circle-outline"></div>
                    English
                  </Link>


                  </Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>




            </li>

        */}

            {/*Cart*/}
            <li className="link hide-sm2">
              <Link to="cart.html" className="cart btn">
                <i className="fa-light fa-cart-shopping"></i>
                <span className="num-count">1</span>
              </Link>
            </li>

            {/*messsage*/}
            <li className="link hide-sm2">
              <Dropdown>
                <Dropdown.Toggle
                  style={{ backgroundColor: "#f4f4f4" }}
                  id="dropdown-basic"
                >
                  <i className="fa-regular fa-message-lines"></i>
                  <span className="num-count">1</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="drop_Message_Menu">
                  <Dropdown.Item className="drop_Message">
                    <Link to="/chat" style={{ display: "flex" }}>
                      <div className="image-wrap">
                        <img src={av1} alt="user" />
                      </div>
                      <div className="text-wrap">
                        <div className="d-flex justify-content-between">
                          <h6>خالد عوض</h6>
                          <span className="time">20 / 10 / 2024</span>
                        </div>
                        <p>
                          انشاء متجر الكتروني احترافي على منصة ووردبريس ووكومرس
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="me">150 دولار ان شاء الله</h5>
                          <span className="message-number">2</span>
                        </div>
                      </div>
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item className="drop_Message">
                    <Link to="/chat" style={{ display: "flex" }}>
                      <div className="image-wrap">
                        <img src={av2} alt="user" />
                      </div>
                      <div className="text-wrap">
                        <div className="d-flex justify-content-between">
                          <h6>خالد عوض</h6>
                          <span className="time">18 / 10 / 2024</span>
                        </div>
                        <br />
                        <p>نظام الكتروني لعيادة طبية</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="me">150 دولار ان شاء الله</h5>
                          <span className="message-number">2</span>
                        </div>
                      </div>
                    </Link>
                  </Dropdown.Item>

                  <div className="showall">
                    <Link to="notifications.html">جميع الإشعارات</Link>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </li>

            {/*auth login  */}
            <li className="link hide-sm2">
              <div className="btns">
                <Link to="auth-login.html">
                  <i className="fa-light fa-arrow-right-to-bracket"></i> دخول
                </Link>
                <Link to="auth-register.html">
                  <i className="fa-light fa-user-plus"></i> حساب جديد
                </Link>
              </div>
            </li>

            {/*profile picture */}
            <li className="link hide-sm2">
              <Dropdown>
                <Dropdown.Toggle
                  style={{ backgroundColor: "#f4f4f4" }}
                  id="dropdown-basic"
                >
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="usermenu"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={avatar} alt="user-avatar" />
                  </button>
                </Dropdown.Toggle>

                <Dropdown.Menu className="Menu">
                  <Dropdown.Item>
                    <Link className="dropdown-item_Link" to="profile.html">
                      <i className="fa-solid fa-user"></i>
                      محمد عبد المعطي
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item>
                    <Link className="dropdown-item_Link" to="profile.html">
                      <i className="fa-sharp fa-solid fa-dollar-sign"></i>
                      الرصيد
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item>
                    <Link className="dropdown-item_Link" to="profile.html">
                      <i className="fa-solid fa-sliders"></i>
                      الإعدادات
                    </Link>
                  </Dropdown.Item>
                  <hr />

                  <Dropdown.Item>
                    <Link className="dropdown-item_Link" to="/About">
                      <i className="fa-sharp fa-solid fa-pen-to-square"></i>
                      تعديل الحساب
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item>
                    <Link className="dropdown-item_Link" to="/Contact">
                      <i className="fa-solid fa-circle-info"></i>
                      المساعده
                    </Link>
                  </Dropdown.Item>
                  <hr />

                  <Dropdown.Item>
                    <Link className="dropdown-item_Link" to="profile.html">
                      <i className="fa-solid fa-right-from-bracket"></i>
                      تسجيل الخروج
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
