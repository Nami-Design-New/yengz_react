import React from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ConfirmationModal = ({
  showModal,
  setShowModal,
  text,
  target,
  eventFun,
  buttonText,
  type = "delete"
}) => {
  const { t } = useTranslation();
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
      <Modal.Header className="pb-0" closeButton />
      <Modal.Body
        className={`confirm-delete ${type === "delete" ? "" : "other"}`}
      >
        <p>
          {text} <span>{target}</span>
        </p>
        <div className="d-flex justify-content-end gap-3">
          <button onClick={() => setShowModal(false)} className="cancel-btn">
            {t("cancel")}
          </button>
          <button className="delete-btn" onClick={eventFun}>
            {buttonText}
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmationModal;
