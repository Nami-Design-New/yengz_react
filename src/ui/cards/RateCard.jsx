import React from "react";
import rateowner1 from "../../Assets/images/avatar-placeholder-2.svg";
import StarsList from "../StarsList";
import { formatTimeDifference, getTimeDifference } from "./../../utils/helpers";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const RateCard = ({ rate }) => {
  const { t } = useTranslation();
  const timeDifference = getTimeDifference(rate?.created_at);
  const formattedTime = formatTimeDifference(
    timeDifference.years,
    timeDifference.months,
    timeDifference.days,
    timeDifference.hours,
    timeDifference.minutes,
    t
  );

  return (
    <div className="rate-card">
      <div className="rate-owner">
        <div className="rate-head">
          <div className="d-flex align-items-center gap-3">
            <Link to={`/profile/${rate?.user?.id}`} className="img">
              <img src={rate?.user?.image || rateowner1} alt="icon" />
            </Link>
            <Link to={`/profile/${rate?.user?.id}`} className="name-time">
              <h5>{rate?.user?.name}</h5>
              <span>{formattedTime}</span>
            </Link>
          </div>
          <StarsList rate={rate?.rate} />
        </div>
        <i className="rate-text m-0 mt-3">{`"${rate?.comment || " "}" `}</i>
      </div>
    </div>
  );
};

export default RateCard;
