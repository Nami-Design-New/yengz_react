import React from "react";
import rateowner1 from "../../Assets/images/avatar-placeholder-2.svg";
import { t } from "i18next";
import StarsList from "../StarsList";

const RateCard = ({ rate }) => {
  const getTimeDifference = (createdAt) => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    let years = now.getFullYear() - createdDate.getFullYear();
    let months = now.getMonth() - createdDate.getMonth();
    let days = now.getDate() - createdDate.getDate();
    let hours = now.getHours() - createdDate.getHours();
    let minutes = now.getMinutes() - createdDate.getMinutes();

    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours < 0) {
      hours += 24;
      days--;
    }
    if (days < 0) {
      const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += lastMonth.getDate();
      months--;
    }
    if (months < 0) {
      months += 12;
      years--;
    }
    return { years, months, days, hours, minutes };
  };

  const formatTimeDifference = (years, months, days, hours, minutes) => {
    let formatted = "";
    if (years > 0) {
      formatted += `${years} ${t("year")}`;
    }
    if (months > 0) {
      if (formatted) {
        formatted += ` ${t("and")} ${months} ${t("month")}`;
      } else {
        formatted += `${t("since")} ${months} ${t("month")}`;
      }
    }
    if (days > 0) {
      if (formatted) {
        formatted += ` ${t("and")} ${days} ${t("day")}`;
      } else {
        formatted += `${t("since")} ${days} ${t("day")}`;
      }
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
    timeDifference.years,
    timeDifference.months,
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
