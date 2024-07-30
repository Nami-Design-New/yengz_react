import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";
import Instructions from "./Instructions";
import VerifyStep1 from "./VerifyStep1";
import VerifyStep2 from "./VerifyStep2";

const VerifyPhone = () => {
  const totalSteps = 3;
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.authedUser);
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState((step / totalSteps) * 100);
  const [formData, setFormData] = useState({
    phone: "",
    hashed_code: "",
    code: ""
  });

  useEffect(() => {
    setProgress((step / totalSteps) * 100);
  }, [step]);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      phone: `+${user?.phone_code}${user?.phone}`
    }));
  }, [user]);

  return (
    <section className="login-section container">
      <h1 className="text-center">{t("auth.verifyPageTitle")}</h1>
      <p className="text-center mt-3 mb-4 title">
        {t("auth.verifyPageSubTitle")}
      </p>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-12 p-2">
          <ProgressBar striped animated now={progress} />
          {step === 1 && <Instructions setStep={setStep} />}
          {step === 2 && (
            <VerifyStep1
              setStep={setStep}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {step === 3 && (
            <VerifyStep2
              setStep={setStep}
              formData={formData}
              setFormData={setFormData}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default VerifyPhone;
