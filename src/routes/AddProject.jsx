import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SectionHeader from "../ui/SectionHeader";
import InputField from "../ui/form-elements/InputField";
import TextField from "../ui/form-elements/TextField";
import SubmitButton from "../ui/form-elements/SubmitButton";

function AddProject() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    title: "",
    sub_category_id: "",
    price: "",
    days: "",
    description: "",
    project_files: []
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SectionHeader />
      <section className="addRequest">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12 p-2">
              <form className="form">
                <div className="row m-0">
                  <div className="col-12 p-2">
                    <InputField
                      label={t("projects.projectTitle")}
                      id="title"
                      name="title"
                      onChange={handleChange}
                      value={formData.title}
                      required
                      placeholder={t("writeHere")}
                    />
                  </div>
                  <div className="col-lg-6 col-12 p-2">
                    <InputField
                      label={t("projects.price")}
                      id="price"
                      name="prcie"
                      type="number"
                      min={1}
                      value={formData.price}
                      onChange={handleChange}
                      required
                      span={"$"}
                    />
                  </div>
                  <div className="col-lg-6 col-12 p-2">
                    <InputField
                      label={t("projects.deliveryTime")}
                      id="days"
                      name="days"
                      type="number"
                      min={1}
                      required
                      value={formData.days}
                      onChange={handleChange}
                      span={t("projects.days")}
                    />
                  </div>
                  <div className="col-12 p-2">
                    <TextField
                      label={t("projects.projectDescription")}
                      required
                      id="description"
                      name="description"
                      onChange={handleChange}
                      value={formData.description}
                      placeholder={t("writeHere")}
                    />
                  </div>
                </div>
                <div className="col-12 p-2 d-flex justify-content-end">
                  <SubmitButton name={t("projects.publish")} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddProject;
