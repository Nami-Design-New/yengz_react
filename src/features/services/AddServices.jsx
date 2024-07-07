import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import WizardStep1 from "./WizardStep1";
import WizardStep2 from "./WizardStep2";
import WizardStep3 from "./WizardStep3";
import { CreateService } from "../../services/apiServices";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import useServiceDetails from "./useServiceDetails";

const AddServices = () => {
  const totalSteps = 3;
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { data: service } = useServiceDetails();
  const [categoryId, setCategoryId] = useState(null);
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
    developments: [],
    delete_images: [],
    delete_developments: []
  });

  useEffect(() => {
    if (service) {
      setCategoryId(service?.category?.id);
      setFormData({
        title: service?.title,
        description: service?.description,
        days: service?.days,
        price: service?.price,
        instructions: service?.instructions,
        images: service?.images,
        developments: service?.developments,
        sub_category_id: service?.sub_category_id,
        delete_images: [],
        delete_developments: []
      });
    }
  }, [service]);

  useEffect(() => {
    setProgress((step / totalSteps) * 100);
  }, [step]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await CreateService(formData, queryClient);
      toast.success(t("addService.success"));
      navigate("/profile");
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
                  categoryId={categoryId}
                  setCategoryId={setCategoryId}
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
