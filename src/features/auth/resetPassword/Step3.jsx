import React, { useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import newpass1 from "../../../Assets/images/newpass1.svg";
import PasswordField from "../../../ui/form-elements/PasswordField";
import SubmitButton from "../../../ui/form-elements/SubmitButton";
import axios from "./../../../utils/axios";
const Step3 = ({ userId }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: userId,
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/user/update_password", formData);
      if (res.data.code === 200) {
        toast.success(t("auth.newPasswordSuccess"));
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Forget password error:", error);
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="container form forgetpasswordForm" onSubmit={handleSubmit}>
      <div className="confirmpass">
        <img src={newpass1} alt="" />
      </div>

      <h1>{t("auth.newPasswordTitle")}</h1>
      <p className="title">{t("auth.newPasswordSubTitle")}</p>

      <PasswordField
        label={t("auth.newPassword")}
        value={formData.password}
        name="password"
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
      />

      <SubmitButton loading={loading} name={t("auth.confirm")} />
    </form>
  );
};

export default Step3;
