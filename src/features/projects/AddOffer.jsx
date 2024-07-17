import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import InputField from "./../../ui/form-elements/InputField";
import TextField from "./../../ui/form-elements/TextField";
import useGetSettings from "./../settings/useGetSettings";
import { addProjectRequest } from "../../services/apiProjects";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import SubmitButton from "./../../ui/form-elements/SubmitButton";

const AddOffer = ({ id }) => {
  const { t } = useTranslation();
  const { data: settings } = useGetSettings();
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    project_id: id,
    price: "",
    description: "",
    days: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addProjectRequest(formData, queryClient);
      toast.success(t("projects.offerAddedSuccessfully"));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="addComment">
      <h5>
        <i class="fa-light fa-plus"></i> {t("projects.addOffer")}{" "}
      </h5>
      <form className="form" onSubmit={handleSubmit}>
        <div className="row m-0">
          <div className="col-lg-4 col-12 p-1">
            <InputField
              label={t("projects.deliveryTime")}
              id="days"
              name="days"
              type="number"
              min={1}
              value={formData.days}
              onChange={handleChange}
              span={t("projects.days")}
            />
          </div>
          <div className="col-lg-4 col-12 p-1">
            <InputField
              label={t("projects.price")}
              id="price"
              name="price"
              required
              type="number"
              value={formData.price}
              onChange={handleChange}
              span={"$"}
            />
          </div>
          <div className="col-lg-4 col-12 p-1">
            <InputField
              required
              readonly
              label={`${t("projects.yourDuesAfterfees")} ( ${
                settings?.data?.project_percentage
              }% )`}
              value={
                (formData.price * (100 - settings?.data?.project_percentage)) /
                100
              }
            />
          </div>
          <div className="col-12 p-1">
            <TextField
              label={t("projects.oferrDescription")}
              name="description"
              onChange={handleChange}
              value={formData.description}
              required
            />
          </div>
          <div className="col-12 p-1 mt-2 d-flex justify-content-end">
            <SubmitButton name={t("projects.send")} loading={loading} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddOffer;
