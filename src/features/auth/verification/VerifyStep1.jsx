import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IconDeviceMobile } from "@tabler/icons-react";
import PhoneField from "./../../../ui/form-elements/PhoneField";
import SubmitButton from "../../../ui/form-elements/SubmitButton";
import axios from "./../../../utils/axios";

const VerifyStep1 = ({ setStep, formData, setFormData }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/user/sendOtpCode", formData);
      if (res.data.code === 200) {
        setStep(2);
        setFormData({
          ...formData,
          hashed_code: res.data.data
        });
      }
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
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
        name={t("next")}
        loading={loading}
        className={"w-25 mt-4 align-self-end"}
      />
    </form>
  );
};

export default VerifyStep1;
