import { IconEdit, IconTrash } from "@tabler/icons-react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ConfirmationModal from "../../ui/modals/ConfirmationModal";

function BankAcountCard() {
  const { t } = useTranslation();
  const [showConfirmation, setShowConfirmation] = useState(false);

  function handleDelete() {
    setShowConfirmation(false);
  }

  return (
    <>
      <div className="bank-acc-card">
        <div className="image-wrapper">
          <i class="fa-sharp fa-regular fa-building-columns"></i>
        </div>
        <div className="info-wrapper">
          <h5>Ahmed Elsayed</h5>
          <div className="info-boxes-wrapper">
            <div className="info-box">
              <span className="box-title">IBAN:</span>
              <span className="box-value">Ah132141937248312321</span>
            </div>
            <div className="info-box">
              <span className="box-title">{t("balance.bankName")}:</span>
              <span className="box-value">RIYAD BANK</span>
            </div>
            <div className="info-box">
              <span className="box-title">{t("balance.status")}:</span>
              <span className="box-value">متاح للسحب</span>
            </div>
          </div>
        </div>
        <div className="icons">
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <IconEdit stroke={2} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowConfirmation(true);
            }}
          >
            <IconTrash stroke={2} />
          </button>
        </div>
      </div>

      <ConfirmationModal
        showModal={showConfirmation}
        setShowModal={setShowConfirmation}
        type="delete"
        eventFun={handleDelete}
        buttonText={t("profile.delete")}
        text={t("manageAccounts.areYouSureYouWantToDelete")}
      />
    </>
  );
}

export default BankAcountCard;
