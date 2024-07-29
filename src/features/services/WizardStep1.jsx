import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import InputField from "./../../ui/form-elements/InputField";
import TextField from "./../../ui/form-elements/TextField";
import SelectField from "./../../ui/form-elements/SelectField";
import useCategoriesList from "../categories/useCategoriesList";
import useSubCategoriesList from "./../categories/useSubCategoriesList";

const WizardStep1 = ({
  formData,
  setFormData,
  setStep,
  categoryId,
  setCategoryId
}) => {
  const [formValid, setFormValid] = useState(false);
  const { t } = useTranslation();
  const { data: categories } = useCategoriesList();
  const { data: subCategories } = useSubCategoriesList(categoryId);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    if (formData.title && formData.sub_category_id && formData.description) {
      setFormValid(true);
    }
  }, [formData]);

  const handleNext = (e) => {
    e.preventDefault();
    if (formValid) {
      setStep(2);
    }
  };

  return (
    <>
      {/* title */}
      <InputField
        label={t("addService.serviceTitle")}
        placeholder={t("addService.serviceTitlePlaceholder")}
        id="title"
        name="title"
        type="text"
        value={formData.title}
        onChange={handleChange}
        toolTipContent={t("addService.titleHint")}
      />
      {/* category */}
      <SelectField
        label={t("addService.serviceCategory")}
        id="category"
        name="category"
        disabledOption={t("select")}
        value={categoryId}
        onChange={(e) => {
          setCategoryId(e.target.value);
        }}
        options={categories?.map((category) => ({
          name: category.name,
          value: category.id
        }))}
      />
      {/* sub_category */}
      <SelectField
        label={t("addService.serviceSubCategory")}
        id="sub_category_id"
        name="sub_category_id"
        value={formData.sub_category_id}
        onChange={handleChange}
        options={subCategories?.map((subCategory) => ({
          name: subCategory.name,
          value: subCategory.id
        }))}
        disabledOption={
          categoryId ? t("select") : t("addService.selectCategoryFirst")
        }
      />
      {/* description */}
      <TextField
        label={t("addService.serviceDescription")}
        placeholder={t("writeHere")}
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        toolTipContent={t("addService.serviceDescriptionHint")}
      />
      <button
        onClick={(e) => handleNext(e)}
        className={`w-25 mt-4 align-self-end ${formValid ? "" : "disabled"}`}
      >
        {t("next")}
      </button>
    </>
  );
};

export default WizardStep1;
