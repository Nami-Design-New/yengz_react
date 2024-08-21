import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import InputField from "../form-elements/InputField";
import TextField from "./../form-elements/TextField";
import SubmitButton from "./../form-elements/SubmitButton";
import galleryIcon from "../../Assets/images/gallery.svg";

function AddAccountModal({
  showModal,
  setShowModal,
  targetAccount,
  setTargetAccount,
}) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    link: "",
    description: "",
    start_date: "",
    end_date: "",
    images: [],
    delete_images: [],
  });

  useEffect(() => {
    if (targetAccount) {
      setFormData({
        id: targetAccount.id,
        title: targetAccount.title,
        link: targetAccount.link,
        description: targetAccount.description,
        start_date: targetAccount.start_date,
        end_date: targetAccount.end_date,
        images: targetAccount.images || [],
        delete_images: [],
      });
    }
  }, [targetAccount]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setLoading(false);
  };

  const handleImagesChange = (e) => {
    e.preventDefault();
    const newImages = Array.from(e.target.files);
    setFormData((prevState) => ({
      ...prevState,
      images: [...prevState.images, ...newImages],
    }));
  };

  return (
    <Modal
      show={showModal}
      onHide={() => {
        setShowModal(false);
        setFormData({
          title: "",
          link: "",
          description: "",
          start_date: "",
          end_date: "",
          images: [],
          delete_images: [],
        });
        setTargetAccount(null);
      }}
      centered
      size="lg"
    >
      <Modal.Header className="pb-0" closeButton>
        <Modal.Title>{t("manageAccounts.addAccount")}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="add-work">
        <div className="login-section">
          <form
            className="form container m-0 w-100"
            onSubmit={handleSubmit}
          ></form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AddAccountModal;
