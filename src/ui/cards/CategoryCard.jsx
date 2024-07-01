import React from "react";
import category1 from "../../Assets/images/category1.webp";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { t } = useTranslation();
  return (
    <div className="category-card" data-aos="fade-up">
      <Link to="/search" className="inner-card">
        <div className="category-img">
          <img src={category?.image || category1} alt="" />
        </div>
        <div className="category-content">
          <div className="top-area">
            <h6 className="title mb-1">
              {category?.count || "1.853"} {t("home.service")}
            </h6>
            <h5 className="text">{category?.name || "تصميم وابداع"}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
