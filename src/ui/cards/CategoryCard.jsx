import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { t } = useTranslation();
  return (
    <div className="category-card" data-aos="fade-up">
      <Link to={`/categories/${category.id}`} className="inner-card">
        <div className="category-img">
          <img src={category?.image} alt="" />
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
