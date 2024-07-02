import React, { useEffect } from "react";
import avatar from "../../Assets/images/avatar.png";
import { useTranslation } from "react-i18next";
import StarsList from "../../ui/StarsList";
import { useNavigate } from "react-router-dom";
import { IconInfoCircle } from "@tabler/icons-react";

const UserProfileCard = ({ user }) => {
  const { t } = useTranslation();

  return (
    <div className="profile-descripe">
      <div className="banner">
        <div className="user-avatar">
          <a href="assets/images/avatar.png" data-fancybox="user-avatar">
            <img src={user?.image || avatar} alt="user-avatar" />
          </a>
          <span className="status"></span>
        </div>
      </div>
      <div className="name-rate">
        <h6 className="mb-2">{t(user?.name)}</h6>
        <StarsList rate={user?.rate || 0} />
      </div>
      <div className="cash mt-3">
        <div className="row">
          <div className="col-12 p-2">
            <div className="head">
              <h4>
                <IconInfoCircle stroke={2} /> {t("profile.balance")}
              </h4>
              <a href="#!">{t("profile.withdraw")}</a>
            </div>
          </div>
          <div className="col-4 p-2">
            <div className="cash-info">
              <span>{t("profile.totalBalance")}</span>
              <h6>
                {user?.total_balance}{" "}
                <i className="fa-solid fa-dollar-sign"></i>
              </h6>
            </div>
          </div>
          <div className="col-4 p-2">
            <div className="cash-info">
              <span> {t("profile.pendingBalance")} </span>
              <h6>
                {user?.pending_balance}{" "}
                <i className="fa-solid fa-dollar-sign"></i>
              </h6>
            </div>
          </div>
          <div className="col-4 p-2">
            <div className="cash-info">
              <span> {t("profile.availableBalance")} </span>
              <h6>
                {user?.available_balance}{" "}
                <i className="fa-solid fa-dollar-sign"></i>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
