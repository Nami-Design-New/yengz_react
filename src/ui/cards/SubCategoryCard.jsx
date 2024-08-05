import React from "react";
import { useTranslation } from "react-i18next";

const SubCategoryCard = ({ subCategory, onClick }) => {
  const { t } = useTranslation();
  return (
    <div
      className="category-card"
      data-aos="fade-up"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div className="inner-card">
        <div className="category-img">
          <img src={subCategory?.image} alt="" />
        </div>
        <div className="category-content">
          <div className="top-area">
            <h6 className="title mb-1">
              {subCategory?.count || "1.853"} {t("home.service")}
            </h6>
            <h5 className="text">{subCategory?.name || "تصميم وابداع"}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryCard;
