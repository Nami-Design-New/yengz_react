import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import otpSvg from "../../../Assets/images/otp1.svg";
import Otpcontainer from "../../../ui/form-elements/OtpContainer";
import SubmitButton from "./../../../ui/form-elements/SubmitButton";
import axios from "./../../../utils/axios";

const Step2 = ({ email, otpData, setOtpData, setStep, setUserId }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [resendDisabled, setResendDisabled] = useState(true);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      setResendDisabled(false);
    }
  }, [timer]);

  const handleResend = async () => {
    setResendDisabled(true);
    setTimer(60);
    try {
      const res = await axios.post("/user/check_email", { email: email });
      if (res.data.code === 200) {
        setOtpData((prev) => ({
          ...prev,
          hashed_code: res.data.data.code
        }));
        setUserId(res.data.data.user.id);
      }
    } catch (error) {
      console.error("Forget password error:", error);
      throw new Error(error.message);
    }
  };

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
      toast.error(t("auth.otpCheckError"));
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
        <span
          onClick={handleResend}
          className={`resend_link ${resendDisabled ? "disabled" : ""}`}
        >
          {t("auth.resendCode")}
        </span>
        <div className="timer">
          <span>
            {Math.floor(timer / 60)
              .toString()
              .padStart(2, "0")}
          </span>
          :<span>{(timer % 60).toString().padStart(2, "0")}</span>
        </div>
      </div>
      <SubmitButton loading={loading} name={t("auth.confirm")} />
    </form>
  );
};

export default Step2;
