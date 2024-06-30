import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Google from "../../../Assets/images/Google.svg";
import InputField from "../../../ui/form-elements/InputField";
import ImageUpload from "../../../ui/form-elements/ImageUpload";
import PasswordField from "./../../../ui/form-elements/PasswordField";
import PhoneField from "../../../ui/form-elements/PhoneField";
import SubmitButton from "../../../ui/form-elements/SubmitButton";
import axios from './../../../utils/axios';

const RegisterForm = ({ formData, setFormData, setShowOtp, setOtpData }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/user/can_register", formData);
      if (res.data.code === 200) {
        setShowOtp(true);
        setOtpData((prev) => ({
          ...prev,
          code: res.data.data
        }));
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Register error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form action="" className="container form" onSubmit={handleSubmit}>
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
      <div className="d-flex gap-2 flex-lg-row flex-column">
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
        value={formData.password}
        onChange={handleChange}
      />
      <div className="question">
        <label htmlFor="isFreelancer" className="quest">
          <img src="assets/images/Vector.svg" alt="" />
          {t("auth.areYouSeller")}
        </label>
        <Form.Switch
          id="isFreelancer"
          name="isFreelancer"
          onChange={() =>
            setFormData({
              ...formData,
              isFreelancer: !formData.isFreelancer
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
      <button className="google-login">
        <img src={Google} alt="google" /> {t("auth.googleAccount")}
      </button>
    </form>
  );
};

export default RegisterForm;
