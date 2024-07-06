import React, { useEffect, useState } from "react";
import fileup1 from "../../Assets/images/fileup1.svg";
import success from "../../Assets/images/success.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ProgressBar } from "react-bootstrap";
import WizardStep1 from "./WizardStep1";
import WizardStep2 from "./WizardStep2";
import WizardStep3 from "./WizardStep3";
import WizardStep4 from "./WizardStep4";

const AddServices = () => {
  const { t } = useTranslation();
  const totalSteps = 4;
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState((step / totalSteps) * 100);
  const [formData, setFormData] = useState({
    title: ""
  });

  useEffect(() => {
    setProgress((step / totalSteps) * 100);
  }, [step]);

  return (
    <section className="add-service">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12 p-2">
            <ProgressBar striped animated now={progress} />
            <form className="form">
              {step === 1 && (
                <WizardStep1
                  formData={formData}
                  setFormData={setFormData}
                  setStep={setStep}
                />
              )}
              {step === 2 && (
                <WizardStep2
                  setStep={setStep}
                  formData={formData}
                  setFormData={setFormData}
                />
              )}
              {step === 3 && <WizardStep3 />}
              {step === 4 && <WizardStep4 />}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddServices;
