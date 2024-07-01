import React, { useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import otpSvg from "../../../Assets/images/otp1.svg";
import Otpcontainer from "../../../ui/form-elements/OtpContainer";
import SubmitButton from "./../../../ui/form-elements/SubmitButton";
import axios from './../../../utils/axios';

const Step2 = ({ email, otpData, setOtpData, setStep }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/user/check_code", otpData);
      if (res.data.code === 200) {
        setStep(3);
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
    <form
      className="container form forgetpasswordForm otp-small"
      onSubmit={handleSubmit}
    >
      <div className="otp">
        <img src={otpSvg} alt="" />
      </div>

      <h1>{t("auth.otpTitle")}</h1>
      <p className="title">
        {t("auth.otpSubTitle")} <span> {email} </span>
      </p>

      <Otpcontainer formData={otpData} setFormData={setOtpData} />

      <div className="resend-code">
        <a href="#!">{t("auth.resendCode")}</a>
        <div className="timer">
          <span>48</span> :<span>00</span>
        </div>
      </div>

      <SubmitButton loading={loading} name={t("auth.confirm")} />
    </form>
  );
};

export default Step2;
