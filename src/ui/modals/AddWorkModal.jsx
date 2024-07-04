import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { addWork } from "../../services/apiWorks";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import InputField from "../form-elements/InputField";
import TextField from "./../form-elements/TextField";
import SubmitButton from "./../form-elements/SubmitButton";
import galleryIcon from "../../Assets/images/gallery.svg";

const AddWorkModal = ({
  showModal,
  setShowModal,
  targetWork,
  setTargetWork
}) => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    link: "",
    description: "",
    start_date: "",
    end_date: "",
    images: []
  });
  useEffect(() => {
    if (targetWork) {
      setFormData({
        title: targetWork.title,
        link: targetWork.link,
        description: targetWork.description,
        start_date: targetWork.start_date,
        end_date: targetWork.end_date,
        images: targetWork.images
      });
    }
  }, [targetWork]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addWork(formData, queryClient);
      setShowModal(false);
      toast.success(t("profile.workAddedSuccessfully"));
      setFormData({
        title: "",
        link: "",
        description: "",
        start_date: "",
        end_date: "",
        images: []
      });
    } catch (error) {
      console.error("Add work error:", error);
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImagesChange = (e) => {
    e.preventDefault();
    const imagesClone = [...formData.images];
    const images = Array.from(e.target.files);
    setFormData({ ...formData, images: [...imagesClone, ...images] });
  };

  const handleRemoveImage = (e, index) => {
    e.preventDefault();
    const imagesClone = [...formData.images];
    imagesClone.splice(index, 1);
    setFormData({ ...formData, images: imagesClone });
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
          images: []
        });
        setTargetWork(null);
      }}
      centered
      size="lg"
    >
      <Modal.Header className="pb-0" closeButton>
        <Modal.Title>{t("profile.addWork")}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="add-work">
        <div className="login-section">
          <form className="form container m-0 w-100" onSubmit={handleSubmit}>
            <div className="row">
              {/* images */}
              <div className="col-12 p-2">
                <label htmlFor="certificate-image" className="mb-2">
                  {t("profile.certificateImage")}
                </label>
                <div className="images_grid_upload">
                  <div className="file_upload">
                    <label htmlFor="file_upload">
                      <input
                        type="file"
                        id="file_upload"
                        accept="image/*"
                        name="images"
                        multiple
                        onChange={handleImagesChange}
                      />
                      <img src={galleryIcon} alt="upload" />
                    </label>
                  </div>
                  {formData?.images && (
                    <>
                      {formData?.images?.map((image, index) => (
                        <div className="uploaded_file" key={index}>
                          <img
                            src={
                              image?.type?.startsWith("image/")
                                ? URL.createObjectURL(image)
                                : image?.image
                            }
                            alt="file"
                          />
                          <button onClick={(e) => handleRemoveImage(e, index)}>
                            <i className="fa-light fa-xmark"></i>
                          </button>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
              {/* title */}
              <div className="col-lg-6 col-12 p-2">
                <InputField
                  label={t("profile.projectTitle")}
                  type="text"
                  name="title"
                  onChange={handleChange}
                  value={formData.title}
                />
              </div>
              {/* link */}
              <div className="col-lg-6 col-12 p-2">
                <InputField
                  label={t("profile.projectLink")}
                  type="url"
                  name="link"
                  onChange={handleChange}
                  value={formData.link}
                />
              </div>
              {/* date */}
              <div className="col-lg-6 col-12 p-2">
                <InputField
                  label={t("profile.from")}
                  type="date"
                  name="start_date"
                  onChange={handleChange}
                  value={formData.start_date}
                />
              </div>
              <div className="col-lg-6 col-12 p-2">
                <InputField
                  label={t("profile.to")}
                  type="date"
                  name="end_date"
                  onChange={handleChange}
                  value={formData.end_date}
                />
              </div>
              {/* description */}
              <div className="col-12 p-2">
                <TextField
                  label={t("profile.projectDescription")}
                  name="description"
                  onChange={handleChange}
                  value={formData.description}
                />
              </div>
              <div className="col-12 p-2">
                <SubmitButton
                  name={t("profile.addProject")}
                  loading={loading}
                />
              </div>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddWorkModal;
