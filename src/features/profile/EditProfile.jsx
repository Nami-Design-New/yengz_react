import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/slices/authedUser";
import { useCookies } from "react-cookie";
import axios from "./../../utils/axios";
import PasswordField from "../../ui/form-elements/PasswordField";
import TextField from "../../ui/form-elements/TextField";
import ImageUpload from "../../ui/form-elements/ImageUpload";
import InputField from "./../../ui/form-elements/InputField";
import PhoneField from "../../ui/form-elements/PhoneField";
import MultiSelect from "../../ui/form-elements/MultiSelect";
import useCategoriesList from "./../categories/useCategoriesList";
import SubmitButton from "./../../ui/form-elements/SubmitButton";
import Vector from "../../Assets/images/Vector.svg";

const EditProfile = () => {
  const { t } = useTranslation();
  const { data: categories } = useCategoriesList();
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = cookies?.token;
  const user = useSelector((state) => state.authedUser.user);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [options, setOptions] = useState([]);
  const [wantChangePassword, setWantChangePassword] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    setFormData({
      image: "",
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      about: user?.about || "",
      is_freelance: user?.is_freelance || 0,
      categories: user?.categories?.map((category) => category?.id) || []
    });
    if (wantChangePassword) {
      setFormData((prev) => ({
        ...prev,
        password: ""
      }));
    }
  }, [user, wantChangePassword]);

  // set options of multi select
  useEffect(() => {
    if (categories) {
      const options = categories?.map((category) => ({
        value: category.id,
        label: category.name
      }));
      setOptions(options);
    }
  }, [categories]);

  // set selected options of multi select
  useEffect(() => {
    if (options?.length > 0 && formData.categories?.length > 0) {
      const selectedOptions = formData.categories?.map((categoryId) => {
        const option = options.find((opt) => opt.value === categoryId);
        return {
          value: option?.value,
          label: option?.label
        };
      });
      setSelectedOptions(selectedOptions);
    }
  }, [formData.categories, options]);

  // handle select
  const handleSelect = (selectedItems) => {
    setSelectedOptions(selectedItems);
    const selectedValues = selectedItems
      ? selectedItems?.map((option) => option.value)
      : [];
    setFormData({
      ...formData,
      categories: selectedValues
    });
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
      <div className="row justify-content-center">
        <div className="col-lg-8 col-12 p-2">
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
                value={formData?.name}
                onChange={(e) => handleChange(e)}
              />
              <InputField
                label={t("auth.age")}
                name="age"
                type="date"
                id="age"
                required={true}
                value={formData?.age}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="d-flex gap-2 flex-lg-row flex-column w-100">
              <InputField
                label={t("auth.email")}
                placeholder="example@example.com"
                type="email"
                name="email"
                id="email"
                required={true}
                value={formData?.email}
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
            <MultiSelect
              label={t("auth.interestes")}
              id="interest"
              name="interest"
              options={options}
              selectedOptions={selectedOptions}
              handleChange={handleSelect}
            />
            <div className="question p-0">
              <label htmlFor="isFreelancer" className="quest">
                <img src={Vector} alt="isSeller" />
                {t("auth.areYouSeller")}
              </label>
              <Form.Switch
                id="isFreelancer"
                name="isFreelancer"
                checked={formData?.is_freelance === 1 ? true : false}
                onChange={() =>
                  setFormData({
                    ...formData,
                    is_freelance: formData?.is_freelance === 1 ? 0 : 1
                  })
                }
              />
            </div>
            <div className="question p-0 pt-2">
              <label htmlFor="wantChangePassword" className="quest">
                <img src={Vector} alt="isSeller" />
                {t("auth.doYouWantChangePassword")}
              </label>
              <Form.Switch
                id="wantChangePassword"
                name="wantChangePassword"
                checked={wantChangePassword}
                onChange={() => setWantChangePassword(!wantChangePassword)}
              />
            </div>
            {wantChangePassword && (
              <PasswordField
                label={t("auth.newPassword")}
                name={"password"}
                id={"password"}
                minLength={6}
                value={formData?.password}
                onChange={handleChange}
              />
            )}
            <SubmitButton
              loading={loading}
              name={t("auth.edit")}
              className={"mt-3"}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
