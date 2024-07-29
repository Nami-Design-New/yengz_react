import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const ForgetPassword = () => {
  const [step, setStep] = useState(1);
  const [userId, setUserId] = useState(null);
  const [formData, setFormData] = useState({
    email: ""
  });
  const [otpData, setOtpData] = useState({});
  return (
    <section className="login-section forgetpassword container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-12 p-2">
          {step === 1 && (
            <Step1
              setStep={setStep}
              setOtpData={setOtpData}
              formData={formData}
              setUserId={setUserId}
              setFormData={setFormData}
            />
          )}
          {step === 2 && (
            <Step2
              setStep={setStep}
              setOtpData={setOtpData}
              otpData={otpData}
              email={formData.email}
              setUserId={setUserId}
            />
          )}
          {step === 3 && <Step3 userId={userId} />}
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
