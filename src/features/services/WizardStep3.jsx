import React from "react";
import { useTranslation } from "react-i18next";
import TextField from "../../ui/form-elements/TextField";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import AddMoreDevelopCard from "../../ui/cards/AddMoreDevelopCard";
import SubmitButton from "./../../ui/form-elements/SubmitButton";

const WizardStep3 = ({ formData, setFormData, setStep, loading }) => {
  const { t } = useTranslation();
  const developmentInitial = {
    description: "",
    price: "",
    duration: ""
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddDev = () => {
    setFormData((prev) => ({
      ...prev,
      developments: [...prev.developments, developmentInitial]
    }));
  };
  const handleRemoveDev = (index) => {
    setFormData((prev) => ({
      ...prev,
      developments: prev.developments.filter((_, i) => i !== index)
    }));
  };
  const onDevChange = (e, index) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      developments: prev.developments.map((dev, i) =>
        i === index ? { ...dev, [name]: value } : dev
      )
    }));
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props.content}
    </Tooltip>
  );

  return (
    <>
      {/* instructions for buyer */}
      <TextField
        label={t("addService.instructions")}
        name="instructions"
        id="instructions"
        value={formData.instructions}
        onChange={handleChange}
        placeholder={t("writeHere")}
        toolTipContent={t("addService.instructionsHint")}
      />

      {/* add more development */}
      <div className="input-field">
        <label htmlFor="add-more-devlop">
          <div className="d-flex justify-content-between align-items-center">
            <span>{t("addService.addMoreDevelopment")}</span>
            <OverlayTrigger
              placement="bottom"
              overlay={renderTooltip({
                content: t("addService.addMoreDevelopmentHint")
              })}
            >
              <i className="info-label fa-light fa-circle-info"></i>
            </OverlayTrigger>
          </div>
        </label>
        <div className="add-more-devlop" onClick={handleAddDev}>
          {t("addService.addMoreDevelopment")}
        </div>
      </div>
      <div className="w-100">
        {formData?.developments?.map((dev, index) => (
          <AddMoreDevelopCard
            key={index}
            index={index}
            development={dev}
            handleRemoveDev={handleRemoveDev}
            onDevChange={onDevChange}
          />
        ))}
      </div>

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
        <SubmitButton
          name={t("addService.addAndConfirm")}
          className={"w-25 align-self-end"}
          loading={loading}
        />
      </div>
    </>
  );
};

export default WizardStep3;
