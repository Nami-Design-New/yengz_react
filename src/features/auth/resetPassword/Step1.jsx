import React, { useState } from "react";
import forgetpass1 from "../../../Assets/images/forgetpass1.svg";
import { useTranslation } from "react-i18next";
import InputField from "../../../ui/form-elements/InputField";
import SubmitButton from "../../../ui/form-elements/SubmitButton";
import axios from "./../../../utils/axios";
import { toast } from "react-toastify";

const Step1 = ({ setStep, setOtpData, formData, setFormData, setUserId }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/user/check_email", formData);
      if (res.data.code === 200) {
        toast.success(t("auth.otpSentSuccess"));
        setOtpData((prev) => ({
          ...prev,
          hashed_code: res.data.data.code
        }));
        setStep(2);
        setUserId(res.data.data.user.id);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Forget password error:", error);
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="container form forgetpasswordForm" onSubmit={handleSubmit}>
      <div className="illustration">
        <img src={forgetpass1} alt="" />
      </div>
      <h1>{t("auth.forgetPasswordTitle")}</h1>
      <p className="title">{t("auth.forgetPasswordSubTitle")}</p>
      <InputField
        label={t("auth.email")}
        placeholder="example@example.com"
        name="email"
        type="email"
        id="email"
        required={true}
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
      />
      <SubmitButton name={t("auth.send")} loading={loading} />
    </form>
  );
};

export default Step1;
