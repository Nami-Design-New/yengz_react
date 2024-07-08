import React from "react";
import rateowner1 from "../../Assets/images/avatar-placeholder-2.svg";
import { t } from "i18next";
import StarsList from "../StarsList";

const RateCard = ({ rate }) => {
  const getTimeDifference = (createdAt) => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const diff = Math.abs(now - createdDate);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return { days, hours, minutes };
  };

  const formatTimeDifference = (days, hours, minutes) => {
    let formatted = "";
    if (days > 0) {
      formatted += `${t("since")} ${days} ${t("day")}`;
    }
    if (hours > 0) {
      if (formatted) {
        formatted += ` ${t("and")} ${hours} ${t("hour")}`;
      } else {
        formatted += `${t("since")} ${hours} ${t("hour")}`;
      }
    }
    if (minutes > 0) {
      if (formatted) {
        formatted += ` ${t("and")} ${minutes} ${t("minute")}`;
      } else {
        formatted += `${t("since")} ${minutes} ${t("minute")}`;
      }
    }
    return formatted || t("now");
  };

  const timeDifference = getTimeDifference(rate.created_at);
  const formattedTime = formatTimeDifference(
    timeDifference.days,
    timeDifference.hours,
    timeDifference.minutes
  );

  return (
    <div className="rate-card">
      <div className="rate-owner">
        <div className="rate-head">
          <div className="d-flex align-items-center gap-3">
            <div className="img">
              <img src={rate?.user?.image || rateowner1} alt="icon" />
            </div>
            <div className="name-time">
              <h5>{rate?.user?.name}</h5>
              <span>{formattedTime}</span>
            </div>
          </div>
          <StarsList rate={rate.rate} />
        </div>
        <i className="rate-text m-0 mt-3">{`"${rate.comment || " "}" `}</i>
      </div>
    </div>
  );
};

export default RateCard;
