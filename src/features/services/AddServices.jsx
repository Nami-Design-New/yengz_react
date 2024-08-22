import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import WizardStep1 from "./WizardStep1";
import WizardStep2 from "./WizardStep2";
import WizardStep3 from "./WizardStep3";
import { createService, updateService } from "../../services/apiServices";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import useServiceDetails from "./useServiceDetails";
import ErrorPage from "../../routes/ErrorPage";
import useGetSkills from "../settings/useGetSkills";

const AddServices = () => {
  const { data: skills } = useGetSkills();
  const { id } = useParams();
  const totalSteps = 3;
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { data: service, isLoading } = useServiceDetails();
  const [categoryId, setCategoryId] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState((step / totalSteps) * 100);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [originalData, setOriginalData] = useState(null);
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
      const initialData = {
        id: service?.id,
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
      };
      setFormData(initialData);
      setOriginalData(initialData);
    }
    const options = service?.skills?.map((id) => {
      const skill = skills?.find((s) => s?.id === Number(id));
      return { value: id, label: skill?.name };
    });

    setSelectedOptions(options);
  }, [service]);

  useEffect(() => {
    setProgress((step / totalSteps) * 100);
  }, [step]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // check if data is changed
    const isDataChanged =
      JSON.stringify(formData) !== JSON.stringify(originalData);
    if (!isDataChanged) {
      toast.warning(t("addService.noChangesMade"));
      setLoading(false);
      return;
    }

    const dataToSendForUpdate = {
      ...formData,
      images: formData.images.filter((image) =>
        image?.type?.startsWith("image/")
      ),
      developments: formData?.developments?.map((dev) => ({
        id: dev?.id || null,
        description: dev?.description,
        price: dev?.price,
        duration: dev?.duration
      }))
    };

    try {
      if (service?.id) {
        await updateService(dataToSendForUpdate, queryClient);
        toast.success(t("addService.updateSuccess"));
      } else {
        await createService(formData, queryClient);
        toast.success(t("addService.success"));
      }
      navigate("/profile");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (id && !isLoading && !service) {
    return <ErrorPage />;
  }

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
                  skills={skills}
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
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
                  isEdit={service?.id ? true : false}
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
