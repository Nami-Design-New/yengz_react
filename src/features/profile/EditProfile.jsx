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
import useGetSkills from "../settings/useGetSkills";
import SelectField from "../../ui/form-elements/SelectField";
import useCountriesList from "../countries/useCountriesList";

const EditProfile = () => {
  const user = useSelector((state) => state.authedUser.user);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [skillsSelectedOptions, setSkillsSelectedOptions] = useState([]);
  const [wantChangePassword, setWantChangePassword] = useState(false);

  const { data: skills } = useGetSkills();
  const { data: categories } = useCategoriesList();
  const { data: countries } = useCountriesList();

  useEffect(() => {
    setFormData({
      image: "",
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      about: user?.about || "",
      age: user?.age || "",
      country_id: user?.country_id || "",
      is_freelance: user?.is_freelance || 0,
      skills: user?.skills?.map((skill) => skill?.id) || [],
      categories: user?.categories?.map((category) => category?.id) || []
    });
    if (wantChangePassword) {
      setFormData((prev) => ({
        ...prev,
        password: ""
      }));
    }
  }, [user, wantChangePassword]);

  useEffect(() => {
    if (formData.categories?.length > 0) {
      const selectedOptions = formData.categories?.map((categoryId) => {
        const option = categories?.find((opt) => opt.id === categoryId);
        return {
          value: option?.id,
          label: option?.name
        };
      });
      setSelectedOptions(selectedOptions);
    }

    if (formData.skills?.length > 0) {
      const selectedOptions = formData.skills?.map((skillId) => {
        const option = skills?.find((opt) => opt.id === skillId);
        return {
          value: option?.id,
          label: option?.name
        };
      });
      setSkillsSelectedOptions(selectedOptions);
    }
  }, [formData.categories, formData.skills, categories, skills]);

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

  const handleSelectSkills = (selectedItems) => {
    setSkillsSelectedOptions(selectedItems);
    const selectedValues = selectedItems
      ? selectedItems?.map((option) => option.value)
      : [];
    setFormData({
      ...formData,
      skills: selectedValues
    });
  };

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
      const res = await axios.post("/user/update_profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      if (res.data.code === 200) {
        toast.success(t("profile.profileEditedSuccessfully"));
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
                disabled={user?.login_from !== "user"}
                value={formData?.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="d-flex gap-2 flex-lg-row flex-column w-100">
              <SelectField
                label={t("manageAccounts.country")}
                id="country_id"
                name="country_id"
                disabledOption={t("select")}
                value={formData?.country_id}
                onChange={(e) => handleChange(e)}
                options={countries?.map((country) => ({
                  name: country.name,
                  value: country.id
                }))}
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
              options={categories?.map((category) => ({
                value: category.id,
                label: category.name
              }))}
              selectedOptions={selectedOptions}
              handleChange={handleSelect}
            />
            <MultiSelect
              label={t("search.skills")}
              id="skills"
              name="skills"
              selectedOptions={skillsSelectedOptions}
              handleChange={handleSelectSkills}
              options={skills?.map((skill) => ({
                label: skill?.name,
                value: skill?.id
              }))}
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
