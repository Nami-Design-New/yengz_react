import React from "react";
import about7 from "../Assets/images/about7.webp";
import { Link, useLocation } from "react-router-dom";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const SectionHeader = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="text-wrap" data-aos="fade-up">
            <Link to="/">الرئيسية</Link>
            <span>/</span>
            <h1 className="m-0">{t(`routes.${location.pathname.split("/")[1]}`)}</h1>
          </div>
        </div>
        <div className="col-6 hide-sm">
          <div className="img" data-aos="zoom-in">
            <img src={about7} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
