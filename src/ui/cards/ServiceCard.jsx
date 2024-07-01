import React from "react";
import { Link } from "react-router-dom";
import bann from "../../Assets/images/bann.webp";

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card" data-aos="fade-up">
      <Link to="/services" className="img">
        <img src={bann || service?.image} alt="" />
      </Link>
      <div className="content">
        <h6>
          {service?.title || "اصنع لك تطبيق متجر الكتروني باستخدام flutter..."}
        </h6>
        <p>
          <Link to="#!">برمجة وتطوير</Link> / <span>إنشاء تطبيق</span>
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
  );
};

export default ServiceCard;
