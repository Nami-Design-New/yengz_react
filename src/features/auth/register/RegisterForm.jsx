import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import axios from "./../../../utils/axios";
import Google from "../../../Assets/images/Google.svg";
import Facebook from "../../../Assets/images/facebook.svg";
import InputField from "../../../ui/form-elements/InputField";
import ImageUpload from "../../../ui/form-elements/ImageUpload";
import PasswordField from "./../../../ui/form-elements/PasswordField";
import PhoneField from "../../../ui/form-elements/PhoneField";
import SubmitButton from "../../../ui/form-elements/SubmitButton";
import MultiSelect from "../../../ui/form-elements/MultiSelect";
import isSeller from "../../../Assets/images/Vector.svg";
import useCategoriesList from "../../categories/useCategoriesList";

const RegisterForm = ({ formData, setFormData, setShowOtp, setOtpData }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const { data: categories } = useCategoriesList();
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    if (categories) {
      const options = categories.data.map((category) => ({
        value: category.id,
        label: category.name,
      }));
      setOptions(options);
    }
  }, [categories]);

  useEffect(() => {
    if (options.length > 0 && formData.categories?.length > 0) {
      const selectedOptions = formData.categories.map((categoryId) => {
        const option = options.find((opt) => opt.value === categoryId);
        return {
          value: option?.value,
          label: option?.label,
        };
      });
      setSelectedOptions(selectedOptions);
    }
  }, [formData.categories, options]);

  const handleSelect = (selectedItems) => {
    setSelectedOptions(selectedItems);
    const selectedValues = selectedItems
      ? selectedItems.map((option) => option.value)
      : [];
    setFormData({
      ...formData,
      categories: selectedValues,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const headers = {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  };
  const request = {
    method: "POST",
    headers: headers,
    data: {
      ...formData,
      is_freelance: formData.is_freelance ? 1 : 0,
    },
    url: "/user/can_register",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.request(request);
      if (res.data.code === 200) {
        setShowOtp(true);
        setOtpData((prev) => ({
          ...prev,
          hashed_code: res.data.data,
        }));
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Register error:", error);
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="container form" onSubmit={handleSubmit}>
      <ImageUpload
        type="file"
        name="userImage"
        id="img-upload"
        accept="image/*"
        formData={formData}
        setFormData={setFormData}
      />
      <InputField
        label={t("auth.name")}
        placeholder={t("auth.nameAsInCard")}
        name="name"
        type="text"
        id="name"
        required={true}
        value={formData.name}
        onChange={(e) => handleChange(e)}
      />
      <div className="d-flex gap-2 flex-lg-row flex-column w-100">
        <InputField
          label={t("auth.email")}
          placeholder="example@example.com"
          type="email"
          name="email"
          id="email"
          required={true}
          formData={formData}
          onChange={(e) => handleChange(e)}
        />
        <PhoneField formData={formData} setFormData={setFormData} id="phone" />
      </div>
      <PasswordField
        label={t("auth.password")}
        name={"password"}
        id={"password"}
        minLength={6}
        value={formData.password}
        onChange={handleChange}
      />
      <MultiSelect
        label={t("auth.interestes")}
        id="interest"
        name="interest"
        options={options}
        selectedOptions={selectedOptions}
        handleChange={handleSelect}
      />
      <div className="question">
        <label htmlFor="isFreelancer" className="quest">
          <img src={isSeller} alt="isSeller" />
          {t("auth.areYouSeller")}
        </label>
        <Form.Switch
          id="isFreelancer"
          name="isFreelancer"
          checked={formData.is_freelance === 1 ? true : false}
          onChange={() =>
            setFormData({
              ...formData,
              is_freelance: formData.is_freelance === 1 ? 0 : 1,
            })
          }
        />
      </div>
      <p>
        {t("auth.byContinoung")} <Link to="#">{t("auth.terms")} </Link>{" "}
        {t("auth.and")} <Link to="#">{t("auth.privacyPolicy")}</Link>{" "}
        {t("auth.ownbyus")}
      </p>
      <SubmitButton loading={loading} name={t("auth.createAccount")} />
      <div className="line">
        <span>{t("auth.orRegisterWith")}</span>
      </div>
      <div className="d-flex gap-2 w-100">
        <button className="google-login">
          <img src={Google} alt="google" /> {t("auth.googleAccount")}
        </button>
        <button className="google-login">
          <img src={Facebook} alt="google" /> {t("auth.facebookAccount")}
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
