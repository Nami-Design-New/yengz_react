import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const ForgetPassword = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: ""
  });
  const [otpData, setOtpData] = useState({});
  return (
    <main>
      <section className="login-section forgetpassword container">
        {step === 1 && (
          <Step1
            setStep={setStep}
            setOtpData={setOtpData}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {step === 2 && (
          <Step2
            setStep={setStep}
            setOtpData={setOtpData}
            otpData={otpData}
            email={formData.email}
          />
        )}
        {step === 3 && <Step3 />}
      </section>
    </main>
  );
};

export default ForgetPassword;
