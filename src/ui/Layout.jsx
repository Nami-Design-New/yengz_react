import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="layoutContainer">
      <Navbar />
      <div className="contnet">
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
      <div className="smallNav">
        <ul>
          <li>
            <Link to="/" className="active">
              <i className="fa-sharp fa-solid fa-house"></i>
              <span>الرئيسية</span>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <i className="fa-solid fa-user"></i>
              <span>حسابى</span>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="fa-sharp fa-solid fa-cart-shopping"></i>
              <span>السلة</span>
            </Link>
          </li>
          <li>
            <Link to="/notifications">
              <i className="fa-sharp fa-solid fa-bell"></i>
              <span>الاشعارات</span>
              <span className="num-count2">3</span>
            </Link>
          </li>
          <li>
            <Link to="/recieved-requests">
              <i className="fa-sharp fa-solid fa-cubes"></i>
              <span>الطلبات</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
