import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import InputField from "../form-elements/InputField";
import SubmitButton from "../form-elements/SubmitButton";
import SelectField from "../form-elements/SelectField";
import { COMMUNITIES_OPTIONS } from "../../utils/constants";
import TextField from "../form-elements/TextField";

function AddSubjectModal({ showModal, setShowModal }) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    community: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setShowModal(false);
    setFormData({
      title: "",
      community: "",
      description: "",
    });

    setLoading(false);
  };

  return (
    <Modal
      show={showModal}
      onHide={() => {
        setShowModal(false);
        setFormData({
          title: "",
          community: "",
          description: "",
        });
      }}
      centered
      size="lg"
    >
      <Modal.Header className="pb-0" closeButton>
        <Modal.Title>{t("communities.addSubject")}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="add-work">
        <div className="login-section">
          <form className="form container m-0 w-100" onSubmit={handleSubmit}>
            <div className="row">
              <div className=" col-12 p-2">
                <InputField
                  label={t("communities.subjectTitle")}
                  type="text"
                  name="title"
                  required={true}
                  onChange={handleChange}
                  value={formData.title}
                />
              </div>
              <div className=" col-12 p-2">
                <SelectField
                  label={t("communities.community")}
                  id="category"
                  name="category"
                  disabledOption={t("select")}
                  value={formData.community}
                  onChange={(e) => {
                    setCategoryId(e.target.value);
                  }}
                  options={COMMUNITIES_OPTIONS?.map((option) => ({
                    name: `${t(`routes.${option.name}`)}`,
                    value: option.name,
                  }))}
                />
              </div>
              <div className="col-12 p-2">
                <div className="col-12 p-2">
                  <TextField
                    label={t("communities.subjectDescription")}
                    name="description"
                    onChange={handleChange}
                    value={formData.description}
                  />
                </div>
              </div>
              <div className="col-12 p-2">
                <SubmitButton name={t("communities.add")} loading={loading} />
              </div>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AddSubjectModal;
