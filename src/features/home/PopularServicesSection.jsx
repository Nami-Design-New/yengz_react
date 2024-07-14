import React from "react";
import { useTranslation } from "react-i18next";
import Department from "./Department";
import useGetHomeServices from "./useGetHomeServices";

const PopularServicesSection = () => {
  const { t } = useTranslation();
  const { data: homeServices } = useGetHomeServices();
  return (
    <section className="popular_departments">
      <h2 className="title" data-aos="fade-up">
        {t("home.bestServices")}
      </h2>
      <p className="sub-title" data-aos="fade-up">
        {t("home.bestServicesSubTitle")}
      </p>
      {homeServices?.map((category) => (
        <Department key={category?.id} category={category} />
      ))}
    </section>
  );
};

export default PopularServicesSection;
