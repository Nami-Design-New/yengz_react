import React from "react";;
import { useTranslation } from "react-i18next";
import Department from "./Department";

const PopularServicesSection = () => {
  const { t } = useTranslation();
  return (
    <section className="popular_departments">
      <h2 className="title" data-aos="fade-up">
        {t("home.bestServices")}
      </h2>
      <p className="sub-title" data-aos="fade-up">
        {t("home.bestServicesSubTitle")}
      </p>

      <div className="container">
        <Department />
      </div>
    </section>
  );
};

export default PopularServicesSection;
