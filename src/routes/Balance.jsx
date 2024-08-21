import SectionHeader from "../ui/SectionHeader";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useState } from "react";
import ChargeModal from "../ui/modals/ChargeModal";
import WithdrawModal from "../ui/modals/WithdrawModal";

function Balance() {
  const { t } = useTranslation();
  const user = useSelector((state) => state.authedUser.user);
  const [showChargeModel, setShowChargeModel] = useState(false);
  const [showWithdrawModel, setShowWithdrawModel] = useState(false);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props.content}
    </Tooltip>
  );

  return (
    <>
      <SectionHeader />
      <section className="balance_section">
        <div className="container">
          <div className="blanceHeader">
            <h3>{t("balance.accountBalance")}</h3>
            <div className="btns-wrapper">
              <button className="btn" onClick={() => setShowChargeModel(true)}>
                {t("balance.depositBalance")}
              </button>
              <button
                className="btn"
                onClick={() => setShowWithdrawModel(true)}
              >
                {t("balance.withdrawBalance")}
              </button>
            </div>
          </div>
          <div className="content-body">
            <div className="balance-boxes-wrapper">
              <div className="balance-box">
                <span className="d-flex align-items-center justify-content-between w-100">
                  {t("balance.totalBalance")}
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
              <div className="balance-box">
                <span className="d-flex align-items-center justify-content-between w-100">
                  {t("balance.pendingBalance")}
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
              <div className="balance-box">
                <span className="d-flex align-items-center justify-content-between w-100">
                  {t("balance.availableBalance")}
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
              <div className="balance-box">
                <span className="d-flex align-items-center justify-content-between w-100">
                  {t("balance.wallet")}
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
            <div className="transactions-wrapper">
              <h3>{t("balance.transactions")}</h3>
              <div className="transactions-aside">
                <div className="filter-box">
                  <h5 className="box-header">{t("balance.period")}</h5>
                  <div className="box-content">
                    <div className="item">
                      <div className="input-field">
                        <label htmlFor="date-from">{t("balance.from")}</label>
                        <input
                          type="date"
                          className="form-date"
                          placeholder={t("balance.from")}
                          id="date-from"
                        />
                      </div>
                      <div className="input-field">
                        <label htmlFor="date-to">{t("balance.to")}</label>
                        <input
                          type="date"
                          className="form-date"
                          placeholder={t("balance.to")}
                          id="date-to"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="filter-box">
                  <h5 className="box-header">{t("balance.transactionType")}</h5>
                  <div className="box-content">
                    <div className="item">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        name="transactionType"
                        value="deposit"
                        id="deposit"
                      />
                      <label htmlFor="deposit">{t("balance.deposit")}</label>
                    </div>
                    <div className="item">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        name="transactionType"
                        value="fees"
                        id="fees"
                      />
                      <label htmlFor="fees">{t("balance.fees")}</label>
                    </div>
                    <div className="item">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        name="transactionType"
                        value="finishingProject"
                        id="finishingProject"
                      />
                      <label htmlFor="finishingProject">
                        {t("balance.finishingProject")}
                      </label>
                    </div>
                    <div className="item">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        name="transactionType"
                        value="refund"
                        id="refund"
                      />
                      <label htmlFor="refund">{t("balance.refund")}</label>
                    </div>
                    <div className="item">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        name="transactionType"
                        value="withdraw"
                        id="withdraw"
                      />
                      <label htmlFor="withdraw">{t("balance.withdraw")}</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="transactions-body">
                <div className="transaction-box">
                  <div className="money-wrapper">
                    <h5>
                      +20.00<i className="fa-solid fa-dollar-sign"></i>
                    </h5>
                  </div>
                  <div className="info-wrapper">
                    <h6 className="info-header">
                      الربح من إكمال مشروع <span>في برمجة وتطوير الويب</span>
                    </h6>
                    <div className="info-boxes-wrapper">
                      <div className="info-box">
                        <i className="fa-regular fa-timer"></i>
                        20/4/2024
                      </div>
                    </div>
                  </div>
                </div>
                <div className="transaction-box">
                  <div className="money-wrapper">
                    <h5>
                      +276.00<i className="fa-solid fa-dollar-sign"></i>
                    </h5>
                  </div>
                  <div className="info-wrapper">
                    <h6 className="info-header">
                      الربح من إكمال مشروع <span>كتابة محتوى موقع</span>
                    </h6>
                    <div className="info-boxes-wrapper">
                      <div className="info-box">
                        <i className="fa-regular fa-timer"></i>
                        1/2/2024
                      </div>
                    </div>
                  </div>
                </div>
                <div className="transaction-box">
                  <div className="money-wrapper">
                    <h5>
                      +340.00<i className="fa-solid fa-dollar-sign"></i>
                    </h5>
                  </div>
                  <div className="info-wrapper">
                    <h6 className="info-header">
                      الربح من إكمال مشروع{" "}
                      <span>ترجمة كتاب تقني على الووردبريس</span>
                    </h6>
                    <div className="info-boxes-wrapper">
                      <div className="info-box">
                        <i className="fa-regular fa-timer"></i>
                        5/8/2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ChargeModal
          showModal={showChargeModel}
          setShowModal={setShowChargeModel}
        />
        <WithdrawModal
          showModal={showWithdrawModel}
          setShowModal={setShowWithdrawModel}
        />
      </section>
    </>
  );
}

export default Balance;
