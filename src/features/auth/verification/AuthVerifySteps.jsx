import React, { useState } from "react";
import VerifyStep1 from "./VerifyStep1";
import VerifyStep2 from "./VerifyStep2";
import VerifyStep3 from "./VerifyStep3";
import VerifyStep5 from "./VerifyStep5";

const AuthVerifySteps = () => {
  const [step, setStep] = useState(1);

  return (
    <section className="login-section container">
      <h1 className="text-center">توثيق الحساب</h1>
      <p className="text-center mt-3 title">
        مرحبا بك …! ادخل جميع البيانات المطلوبة لإتمام عمليه توثيق الحساب.
      </p>

      {step === 1 && <VerifyStep1 />}

      {step === 2 && <VerifyStep2 />}

      {step === 3 && <VerifyStep3 />}

      {step === 4 && <VerifyStep3 />}

      {step === 5 && <VerifyStep5 />}
    </section>
  );
};

export default AuthVerifySteps;
