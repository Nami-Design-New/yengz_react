import React from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import InputField from "../form-elements/InputField";

const AddWorkModal = ({ showModal, setShowModal }) => {
  const { t } = useTranslation();
  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      centered
      size="lg"
    >
      <Modal.Header className="pb-0" closeButton>
        <Modal.Title>{t("profile.addWork")}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="add-work">
        <div className="login-section">
          <form className="form container">
            <div className="row">
              <div className="col-12 p-2">
                <InputField label={t("")}/>
              </div>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddWorkModal;
