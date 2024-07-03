import React from "react";
import { useTranslation } from "react-i18next";
import rateowner1 from "../../Assets/images/rateowner1.webp";
import StarsList from "../StarsList";

const UserReviewCard = ({ review }) => {
  const { t } = useTranslation();
  return (
    <div className="rate-card">
      <div className="rate-owner">
        <div className="rate-head d-flex">
          <div className="img">
            <img src={review?.user?.image || rateowner1} alt="rater" />
          </div>
          <div className="name-time">
            <h5>{review?.user?.name || "احمد محمد"}</h5>
            <span>منذ 9 أيام و18 ساعة</span>
          </div>
        </div>
        <p className="rate-text p-2">
          {review?.text || "هذا النص هو مثال لنص يمكن ان يستبدل في نفس المساحة"}
        </p>
        <div className="rating-cards container">
          <div className="row">
            <div className="col-4 p-2">
              <div className="r-card ">
                <h6>{t("profile.deliverOnTime")}</h6>
                <StarsList rate={review?.deliver_on_time || 0} />
              </div>
            </div>
            <div className="col-4 p-2">
              <div className="r-card ">
                <h6>{t("profile.communicationAndFollowUp")}</h6>
                <StarsList rate={review?.communication_and_follow_up || 0} />
              </div>
            </div>
            <div className="col-4 p-2">
              <div className="r-card ">
                <h6>{t("profile.serviceQuality")}</h6>
                <StarsList rate={review?.service_quality || 0} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReviewCard;
