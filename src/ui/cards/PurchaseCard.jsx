import React from "react";
import { useTranslation } from "react-i18next";
import bann from "../../Assets/images/bann.webp";
import rateowner1 from "../../Assets/images/rateowner1.webp";
import { Link } from "react-router-dom";
import { formatTimeDifference, getTimeDifference } from "../../utils/helpers";

const PurchaseCard = ({ purchase }) => {
  const { t } = useTranslation();
  const timeDifference = getTimeDifference(purchase?.created_at);
  const formattedTime = formatTimeDifference(
    timeDifference.years,
    timeDifference.months,
    timeDifference.days,
    timeDifference.hours,
    timeDifference.minutes,
    t
  );

  return (
    <>
      <div className="service container">
        <div className="row">
          <div className="col-lg-7 col-12">
            <div className="service-head">
              <Link to={`/service/${purchase?.service?.id}`} className="img">
                <img src={purchase?.service?.image || bann} alt="service" />
              </Link>
              <div className="title">
                <h5>{purchase?.service?.title}</h5>
                <Link
                  to={`/profile/${purchase?.service?.user?.id}`}
                  className="owner"
                >
                  <div className="owner-avatar">
                    <img
                      src={purchase?.service?.user?.image || rateowner1}
                      alt="owner"
                    />
                  </div>
                  <span>{purchase?.service?.user?.name}</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <div className="progress-card">
              <div className="progress-details">
                <div className="pro-container">
                  <p className="status">{purchase?.status}</p>
                  <div className="progress">
                    <div
                      className="progress-bar sucses"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <Link to="/order-details" className="details">
                  {t("details")}
                </Link>
              </div>
              <div className="time-price">
                <span>
                  <i className="fa-sharp fa-light fa-clock"></i>
                  {formattedTime}
                </span>
                <h5>
                  {purchase?.price}{" "}
                  <i className="fa-regular fa-dollar-sign"></i>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseCard;
