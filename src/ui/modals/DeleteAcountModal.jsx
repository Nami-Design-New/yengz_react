import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Lottie from "react-lottie";
import SubmitButton from "../form-elements/SubmitButton";

function DeleteAcountModal({
  setShowModal,
  showModal,
  eventFunction,
  loading,
}) {
  const { t } = useTranslation();

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
      <Modal.Header className="pb-0" closeButton />
      <Modal.Body className="pay_modal">
        <h3>{t("auth.areYouSureYouWantToDelete")} </h3>
        <div className="d-flex justify-content-end gap-3 mt-4">
          <button onClick={() => setShowModal(false)} className="cancel-btn">
            {t("cancel")}
          </button>
          <SubmitButton
            name={t("auth.confirm")}
            loading={loading}
            onClick={eventFunction}
            className={"delete-btn"}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DeleteAcountModal;
