import React from "react";
import { Link } from "react-router-dom";
import StarsList from "../StarsList";
import { useTranslation } from "react-i18next";

const SimillarServCard = ({ service }) => {
  const { t } = useTranslation();

  return (
    <div className="service-card" data-aos="fade-up">
      <Link to={`/services/${service?.id}`} className="img">
        <img src={service?.image} alt="" />
      </Link>
      <div className="content">
        <h6>{service?.days}</h6>
        <p>
          <span>{service?.title}</span> <span>{service?.price}</span>
        </p>
        <div className="d-flex gap-3 align-items-center">
          <StarsList rate={service?.rate || 0} />
          <span className="sell-count">( {service?.sell_count || 0} )</span>
        </div>
        <h6 className="start-from">
          {t("home.startFrom")} : <b>{service?.price || 0} $</b>
        </h6>
        <Link to={`/edit-service/${service?.id}`} className="editService">
          <i className="fa-regular fa-file-pen"></i>
        </Link>
      </div>
    </div>
  );
};

export default SimillarServCard;
