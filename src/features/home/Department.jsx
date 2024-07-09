import React from "react";
import ServiceCard from "../../ui/cards/ServiceCard";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Department = ({ category }) => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="row-head" data-aos="fade-up">
        <h6>{category?.name || "برمجة وتطوير"}</h6>
        <Link to="/search?categories=1">
          {t("home.viewAll")}
          <i className="fa-regular fa-angle-left"></i>
        </Link>
      </div>
      <div className="row mb-5">
        {category?.services?.map((service) => (
          <div className="col-lg-3 col-md-4 col-6 p-2" key={service?.id}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Department;
