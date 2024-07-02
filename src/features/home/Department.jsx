import React from "react";
import ServiceCard from "../../ui/cards/ServiceCard";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Department = ({ department }) => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="row-head" data-aos="fade-up">
        <h6>
          {department?.icon || <i className="fa-light fa-briefcase"></i>}{" "}
          {department?.title || "برمجة وتطوير"}
        </h6>
        <Link to="/categories">
          {t("home.viewAll")}
          <i className="fa-regular fa-angle-left"></i>
        </Link>
      </div>
      <div className="row mb-5">
        <div className="col-lg-3 col-6 mb-3">
          <ServiceCard />
        </div>
      </div>
    </div>
  );
};

export default Department;
