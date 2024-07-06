import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { IconDeviceMobile } from "@tabler/icons-react";
import PhoneField from "./../../../ui/form-elements/PhoneField";
import SubmitButton from "../../../ui/form-elements/SubmitButton";

const VerifyStep1 = ({ setStep, formData, setFormData }) => {
  const { user } = useSelector((state) => state.authedUser);
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <PhoneField
        formData={formData}
        setFormData={setFormData}
        value={formData?.phone}
        id="phone"
        icon={<IconDeviceMobile stroke={2} />}
      />
      <SubmitButton
        name={t("auth.next")}
        loading={loading}
        className={"w-25 mt-4 align-self-end"}
      />
    </form>
  );
};

export default VerifyStep1;
