import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import galleryIcon from "../../Assets/images/gallery.svg";
import InputField from "../../ui/form-elements/InputField";
import { toast } from "react-toastify";

const WizardStep2 = ({ formData, setFormData, setStep }) => {
  const { t } = useTranslation();
  const [formValid, setFormValid] = useState(false);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props.content}
    </Tooltip>
  );

  useEffect(() => {
    if (
      formData.images.length > 0 &&
      formData.price &&
      formData.days &&
      formData.price > 0 &&
      formData.days > 0
    ) {
      setFormValid(true);
    }
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (formValid) {
      setStep(3);
    }
  };

  const handleImagesChange = (e) => {
    e.preventDefault();
    const newImages = Array.from(e.target.files);
    if (formData.images.length + newImages.length > 10) {
      toast.warn(t("addService.imageLimitReached"));
      return;
    }
    setFormData((prevState) => ({
      ...prevState,
      images: [...prevState.images, ...newImages]
    }));
  };

  const handleRemoveImage = (index, image) => {
    if (image.id) {
      setFormData((prevState) => ({
        ...prevState,
        images: prevState.images.filter((_, i) => i !== index),
        delete_images: [...prevState.delete_images, image.id]
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        images: prevState.images.filter((_, i) => i !== index)
      }));
    }
  };

  return (
    <>
      {/* images */}
      <div className="input-field">
        <label htmlFor="info-htmlFor-customer">
          <div className="d-flex justify-content-between align-items-center">
            <span>{t("addService.serviceGallery")}</span>
            <OverlayTrigger
              placement="bottom"
              overlay={renderTooltip({
                content: t("addService.galleryHint")
              })}
            >
              <i className="info-label fa-light fa-circle-info"></i>
            </OverlayTrigger>
          </div>
          <small>{t("addService.imagesHint")}</small>
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
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemoveImage(index, image);
                    }}
                  >
                    <i className="fa-light fa-xmark"></i>
                  </button>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <InputField
        label={t("addService.servicePrice")}
        type="number"
        id="price"
        name="price"
        min={0}
        value={formData.price}
        onChange={handleChange}
      />
      <InputField
        label={t("addService.serviceDays")}
        type="number"
        id="days"
        name="days"
        min={0}
        value={formData.days}
        onChange={handleChange}
        toolTipContent={t("addService.daysHint")}
      />

      <div className="d-flex justify-content-between mt-4 w-100">
        <button
          className="back_btn"
          onClick={(e) => {
            e.preventDefault();
            setStep(1);
          }}
        >
          {t("back")}
        </button>
        <button
          onClick={(e) => handleNext(e)}
          className={`w-25 align-self-end ${formValid ? "" : "disabled"}`}
        >
          {t("next")}
        </button>
      </div>
    </>
  );
};

export default WizardStep2;
