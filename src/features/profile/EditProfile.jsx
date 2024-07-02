import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Vector from "../../Assets/images/Vector.svg";
import PasswordField from "../../ui/form-elements/PasswordField";
import TextField from "../../ui/form-elements/TextField";
import ImageUpload from "../../ui/form-elements/ImageUpload";
import InputField from "./../../ui/form-elements/InputField";
import PhoneField from "../../ui/form-elements/PhoneField";
import MultiSelect from "../../ui/form-elements/MultiSelect";
import useCategoriesList from "./../categories/useCategoriesList";
import SubmitButton from "./../../ui/form-elements/SubmitButton";
import axios from "./../../utils/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/slices/authedUser";
import { useCookies } from "react-cookie";

const EditProfile = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies] = useCookies(["token"]);
  const token = cookies?.token;
  const user = useSelector((state) => state.authedUser.user);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  const { data } = useCategoriesList();
  const options = data?.data?.map((category) => ({
    value: category.id,
    label: category.name
  }));

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    setFormData({
      image: "",
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      about: user?.about || "",
      password: "",
      is_freelance: user?.is_freelance || 0,
      categories: user?.categories || []
    });
  }, [user]);

  const headers = {
    Accept: "application/json",
    "Content-Type": "multipart/form-data"
  };
  const request = {
    method: "POST",
    headers: headers,
    data: formData,
    url: "/user/update_profile"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.request(request);
      if (res.data.code === 200) {
        toast.success(res.data.message);
        dispatch(setUser(res.data.data));
        navigate("/profile");
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
    <section className="login-section container">
      <h1 className="text-center">{t("profile.editProfile")}</h1>
      <form className="container form" onSubmit={handleSubmit}>
        <ImageUpload
          type="file"
          name="userImage"
          id="img-upload"
          accept="image/*"
          image={user?.image}
          formData={formData}
          setFormData={setFormData}
        />
        <div className="d-flex gap-2 flex-lg-row flex-column w-100">
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
          <InputField
            label={t("auth.age")}
            name="age"
            type="date"
            id="age"
            required={true}
            value={formData.age}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="d-flex gap-2 flex-lg-row flex-column">
          <InputField
            label={t("auth.email")}
            placeholder="example@example.com"
            type="email"
            name="email"
            id="email"
            required={true}
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
          <PhoneField
            formData={formData}
            setFormData={setFormData}
            value={`+${user?.phone_code}${user?.phone}`}
            id="phone"
          />
        </div>
        <TextField
          icon={<i className="fa-regular fa-circle-info"></i>}
          name="about"
          id="about"
          value={formData?.about}
          onChange={(e) => handleChange(e)}
          label={t("auth.aboutUser")}
          placeholder={t("auth.aboutPlaceHolder")}
        />
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
          formData={formData}
          setFormData={setFormData}
        />
        <div className="question">
          <label htmlFor="isFreelancer" className="quest">
            <img src={Vector} alt="isSeller" />
            {t("auth.areYouSeller")}
          </label>
          <Form.Switch
            id="isFreelancer"
            name="isFreelancer"
            checked={formData.is_freelance === 1 ? true : false}
            onChange={() =>
              setFormData({
                ...formData,
                is_freelance: formData.is_freelance === 1 ? 0 : 1
              })
            }
          />
        </div>
        <SubmitButton loading={loading} name={t("auth.edit")} />
      </form>
    </section>
  );
};

export default EditProfile;