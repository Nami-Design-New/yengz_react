import React, { useState } from "react";
import avatar from "../../Assets/images/avatar.jpg";
import StarsList from "../../ui/StarsList";
import { useTranslation } from "react-i18next";
import {
  IconCirclePlus,
  IconInfoCircle,
  IconRosetteDiscountCheckFilled,
} from "@tabler/icons-react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserProfileCard = ({ user, isMyAccount }) => {
  const { t } = useTranslation();

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props.content}
    </Tooltip>
  );

  return (
    <div className="profile-descripe">
      <div className="banner">
        <div className="user-avatar">
          <img src={user?.image || avatar} alt="user-avatar" />
          {user?.verified === 1 && (
            <span className="status">
              <IconRosetteDiscountCheckFilled />
            </span>
          )}
        </div>
      </div>
      <div className="name-rate">
        <h6 className="mb-2">{t(user?.name)}</h6>
        <StarsList rate={user?.rate || 0} />
      </div>
      {isMyAccount && (
        <div className="cash mt-3">
          <div className="row">
            <div className="col-12 p-2">
              <div className="head">
                <h4>
                  <IconInfoCircle stroke={2} /> {t("profile.balance")}
                </h4>
                <Link to="/balance">{t("profile.withdraw")}</Link>
              </div>
            </div>
            <div className="col-6 p-2">
              <div className="cash-info">
                <span className="d-flex align-items-center justify-content-between w-100">
                  {t("profile.totalBalance")}
                  <OverlayTrigger
                    placement="bottom"
                    overlay={renderTooltip({
                      content: t("profile.totalBalanceTooltip"),
                    })}
                  >
                    <i className="info-label fa-light fa-circle-info"></i>
                  </OverlayTrigger>
                </span>
                <h6>
                  {user?.total_balance}{" "}
                  <i className="fa-solid fa-dollar-sign"></i>
                </h6>
              </div>
            </div>
            <div className="col-6 p-2">
              <div className="cash-info">
                <span className="d-flex align-items-center justify-content-between w-100">
                  {t("profile.pendingBalance")}
                  <OverlayTrigger
                    placement="bottom"
                    overlay={renderTooltip({
                      content: t("profile.pendingBalanceTooltip"),
                    })}
                  >
                    <i className="info-label fa-light fa-circle-info"></i>
                  </OverlayTrigger>
                </span>
                <h6>
                  {user?.pending_balance}{" "}
                  <i className="fa-solid fa-dollar-sign"></i>
                </h6>
              </div>
            </div>
            <div className="col-6 p-2">
              <div className="cash-info">
                <span className="d-flex align-items-center justify-content-between w-100">
                  {t("profile.availableBalance")}
                  <OverlayTrigger
                    placement="bottom"
                    overlay={renderTooltip({
                      content: t("profile.availableBalanceTooltip"),
                    })}
                  >
                    <i className="info-label fa-light fa-circle-info"></i>
                  </OverlayTrigger>
                </span>
                <h6>
                  {user?.available_balance}{" "}
                  <i className="fa-solid fa-dollar-sign"></i>
                </h6>
              </div>
            </div>
            <div className="col-6 p-2">
              <div className="cash-info">
                <span className="d-flex align-items-center justify-content-between w-100">
                  {t("profile.wallet")}
                  <OverlayTrigger
                    placement="bottom"
                    overlay={renderTooltip({
                      content: t("profile.walletTooltip"),
                    })}
                  >
                    <i className="info-label fa-light fa-circle-info"></i>
                  </OverlayTrigger>
                </span>
                <h6>
                  {user?.wallet} <i className="fa-solid fa-dollar-sign"></i>
                </h6>
              </div>
            </div>
            <div className="col-12 p-2 d-flex align-items-center justify-content-center">
              <Link to="/balance" className="deposit-link">
                <IconCirclePlus stroke={2} /> {t("profile.deposit")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileCard;
