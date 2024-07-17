import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import useGetSettings from "../../features/settings/useGetSettings";
import InputField from "../form-elements/InputField";
import TextField from "../form-elements/TextField";
import SubmitButton from "../form-elements/SubmitButton";

const EditProjectOfferModal = ({ showModal, setShowModal, request }) => {
  const { data: settings } = useGetSettings();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [formData, setFormData] = useState({
    project_id: request?.project_id,
    price: request?.price,
    description: request?.description,
    days: request?.days
  });

  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      size="lg"
      centered
    >
      <Modal.Header className="pb-0" closeButton>
        <Modal.Title>{t("projects.editOffer")}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="add-work">
        <form className="form">
          <div className="row m-0">
            <div className="col-lg-4 col-12 p-1">
              <InputField
                label={t("projects.deliveryTime")}
                id="days"
                name="days"
                type="number"
                min={1}
                value={formData.days}
                onChange={handleChange}
                span={t("projects.days")}
              />
            </div>
            <div className="col-lg-4 col-12 p-1">
              <InputField
                label={t("projects.price")}
                id="price"
                name="price"
                required
                type="number"
                value={formData.price}
                onChange={handleChange}
                span={"$"}
              />
            </div>
            <div className="col-lg-4 col-12 p-1">
              <InputField
                required
                readonly
                label={`${t("projects.yourDuesAfterfees")} ( ${
                  settings?.data?.project_percentage
                }% )`}
                value={
                  (formData.price *
                    (100 - settings?.data?.project_percentage)) /
                  100
                }
              />
            </div>
            <div className="col-12 p-1">
              <TextField
                label={t("projects.oferrDescription")}
                name="description"
                required
                onChange={handleChange}
                value={formData.description}
              />
            </div>
            <div className="col-12 p-1 mt-2 d-flex justify-content-end">
              <SubmitButton name={t("projects.send")} loading={loading} />
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default EditProjectOfferModal;
