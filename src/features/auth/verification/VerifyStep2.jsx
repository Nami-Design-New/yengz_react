import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Otpcontainer from "../../../ui/form-elements/OtpContainer";
import SubmitButton from "../../../ui/form-elements/SubmitButton";
import axios from './../../../utils/axios';

const VerifyStep2 = ({ setStep, formData, setFormData }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/user/verify_phone", formData);
      if (res.data.code === 200) {
        setStep(3);
      }
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <h6 className="text-center">{t("auth.verificationCode")}</h6>
        <p className="text-center mt-1 mb-3"> {formData?.phone} </p>
      </div>
      <Otpcontainer formData={formData} setFormData={setFormData} />
      <div className="resend-code">
        <Link to="#!">{t("auth.resendCode")}</Link>
        <div className="timer">
          <span>48</span> :<span>00</span>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-4 w-100">
        <button
          className="back_btn"
          onClick={(e) => {
            e.preventDefault();
            setStep(1);
          }}
        >
          {t("auth.back")}
        </button>
        <SubmitButton
          name={t("auth.next")}
          loading={loading}
          className={"w-25 "}
        />
      </div>
    </form>
  );
};

export default VerifyStep2;
