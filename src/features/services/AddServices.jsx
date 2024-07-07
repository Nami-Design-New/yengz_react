import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import WizardStep1 from "./WizardStep1";
import WizardStep2 from "./WizardStep2";
import WizardStep3 from "./WizardStep3";
import { CreateService } from "../../services/apiServices";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const AddServices = () => {
  const totalSteps = 3;
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState((step / totalSteps) * 100);
  const [formData, setFormData] = useState({
    title: "",
    sub_category_id: "",
    description: "",
    days: "",
    price: "",
    instructions: "",
    images: [],
    developments: []
  });

  useEffect(() => {
    setProgress((step / totalSteps) * 100);
  }, [step]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await CreateService(formData, queryClient);
      toast.success(t("addService.success"));
      navigate("/profile?tab=services");
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="add-service">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12 p-2">
            <ProgressBar striped animated now={progress} />
            <form className="form" onSubmit={handleSubmit}>
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
              {step === 3 && (
                <WizardStep3
                  setStep={setStep}
                  formData={formData}
                  loading={loading}
                  setFormData={setFormData}
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddServices;
