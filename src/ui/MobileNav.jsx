import React from "react";
import { Link } from 'react-router-dom';

const MobileNav = () => {
  return (
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
  );
};

export default MobileNav;
