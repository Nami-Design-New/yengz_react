import React from "react";
import { Link } from "react-router-dom";
import bann from "../../Assets/images/bann.webp";
import useTruncateString from "../../hooks/useTruncateString";
import { useTranslation } from "react-i18next";
import StarsList from "../StarsList";

const ServiceCard = ({ service }) => {
  const { t } = useTranslation();
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
          <span>{service?.category || "برمجة وتطوير"}</span> /{" "}
          <span>{service?.subCategory || "تطبيقات"}</span>
        </p>
        <div className="d-flex gap-3 align-items-center">
          <StarsList rate={service?.rate || 2} />
          <span className="sell-count">( {service?.sell_count || 0} )</span>
        </div>
        <h6 className="start-from">
          {t("home.startFrom")} : <b>{service?.price || 0} $</b>
        </h6>
      </div>
    </div>
  );
};

export default ServiceCard;
