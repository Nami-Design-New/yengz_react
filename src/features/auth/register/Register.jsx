import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import ConfirmOtp from "./ConfirmOtp";

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
    isFreelancer: false
  });

  return (
    <main>
      <section className="login-section container">
        <h1 className="text-center">
          {!showOtp ? t("auth.registerPageTitle") : t("auth.otpTitle")}
        </h1>
        <p className="text-center mt-3 title">
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
    </main>
  );
};
export default Register;
