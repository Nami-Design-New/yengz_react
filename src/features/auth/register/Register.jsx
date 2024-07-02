import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import RegisterForm from "./RegisterForm";
import ConfirmOtp from "./ConfirmOtp";
import otpSvg from "../../../Assets/images/otp1.svg";

const Register = () => {
  const { t } = useTranslation();
  const [showOtp, setShowOtp] = useState(false);
  const [otpData, setOtpData] = useState({});
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    is_freelance: false,
    categories: []
  });

  return (
    <section className="login-section container">
      {showOtp && (
        <div className="otp">
          <img src={otpSvg} alt="" />
        </div>
      )}
      <h1 className="text-center">
        {!showOtp ? t("auth.registerPageTitle") : t("auth.otpTitle")}
      </h1>
      <p className="text-center mt-3 mb-4 title">
        {!showOtp
          ? t("auth.registerPageSubTitle")
          : t("auth.otpSubTitle") + formData.email}
      </p>
      {!showOtp && (
        <RegisterForm
          formData={formData}
          setFormData={setFormData}
          setOtpData={setOtpData}
          setShowOtp={setShowOtp}
        />
      )}
      {showOtp && (
        <ConfirmOtp
          otpData={otpData}
          setOtpData={setOtpData}
          formData={formData}
        />
      )}
    </section>
  );
};
export default Register;
