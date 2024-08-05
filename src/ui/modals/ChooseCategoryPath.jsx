import React from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ChooseCategoryPath = ({ showModal, setShowModal, subCategory }) => {
  const { t } = useTranslation();

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
      <Modal.Header className="pb-0" closeButton>
        <h6>{t("continueSearchIn")}</h6>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex gap-2">
          <Link
            className="pathLink"
            to={`/services?sub_categories=${subCategory?.id}`}
          >
            {t("servicesLink")}
          </Link>
          <Link
            className="pathLink"
            to={`/projects?sub_categories=${subCategory?.id}`}
          >
            {t("projectsLink")}
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ChooseCategoryPath;
