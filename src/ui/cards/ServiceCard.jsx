import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import bann from "../../Assets/images/bann.webp";
import useTruncateString from "../../hooks/useTruncateString";
import StarsList from "../StarsList";

const ServiceCard = ({ service, canEdit, handleDelete }) => {
  const { t } = useTranslation();
  const truncate = useTruncateString(service?.title);
  return (
    <div className="service-card" data-aos="fade-up">
      <Link to={`/services/${service?.id}`} className="img">
        <img src={service?.image || bann} alt="" />
      </Link>
      <div className="content">
        <h6>{truncate}</h6>
        <p>
          <span>{service?.category?.name || "برمجة وتطوير"}</span> /{" "}
          <span>{service?.subCategory?.name || "تطبيقات"}</span>
        </p>
        <div className="d-flex gap-3 align-items-center">
          <StarsList rate={service?.rate || 0} />
          <span className="sell-count">( {service?.sell_count || 0} )</span>
        </div>
        <h6 className="start-from">
          {t("home.startFrom")} : <b>{service?.price || 0} $</b>
        </h6>
        {canEdit && (
          <div className="editService">
            <Link to={`/edit-service/${service?.id}`}>
              <i className="fa-regular fa-file-pen"></i>
            </Link>
            <button onClick={() => handleDelete(service?.id)}>
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
