import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "./../../../utils/axios";
import Google from "../../../Assets/images/Google.svg";
import InputField from "../../../ui/form-elements/InputField";
import ImageUpload from "../../../ui/form-elements/ImageUpload";
import PasswordField from "./../../../ui/form-elements/PasswordField";
import PhoneField from "../../../ui/form-elements/PhoneField";
import SubmitButton from "../../../ui/form-elements/SubmitButton";
import MultiSelect from "../../../ui/form-elements/MultiSelect";
import isSeller from "../../../Assets/images/Vector.svg";
import useCategoriesList from "../../categories/useCategoriesList";
import useGetSkills from "../../settings/useGetSkills";
import SelectField from "../../../ui/form-elements/SelectField";
import useCountriesList from "../../countries/useCountriesList";
import AppleSigninButton from "../AppleSigninButton";

const RegisterForm = ({ formData, setFormData, setShowOtp, setOtpData }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const { data: categories } = useCategoriesList();
  const { data: skills } = useGetSkills();
  const [options, setOptions] = useState([]);
  const [skillsSelectedOptions, setSkillsSelectedOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { isLoading: isCountriesLoading, data: countries } = useCountriesList();
  const [countryId, setCountryId] = useState("");

  useEffect(() => {
    if (categories) {
      const options = categories?.map((category) => ({
        value: category.id,
        label: category.name
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
          label: option?.label
        };
      });
      setSelectedOptions(selectedOptions);
    }
  }, [formData.categories, options]);

  const handleCountrtSelect = (e) => {
    setCountryId(e.target.value);
    setFormData({
      ...formData,
      country_id: e.target.value
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

  const handleSelect = (selectedItems) => {
    setSelectedOptions(selectedItems);
    const selectedValues = selectedItems
      ? selectedItems.map((option) => option.value)
      : [];
    setFormData({
      ...formData,
      categories: selectedValues
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
      const res = await axios.post(
        "/user/can_register",
        {
          ...formData,
          is_freelance: formData.is_freelance ? 1 : 0
        },
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      if (res.data.code === 200) {
        setShowOtp(true);
        setOtpData((prev) => ({
          ...prev,
          hashed_code: res.data.data
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

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.post("/user/social_login", {
          login_from: "google",
          google_token: tokenResponse.access_token
        });

        if (res.data.code === 200) {
          toast.success(t("auth.loginSuccess"));
          dispatch(setUser(res.data.data));
          dispatch(setIsLogged(true));
          navigate("/");
          setCookie("token", res.data.data.token, {
            path: "/",
            secure: true,
            sameSite: "Strict"
          });
          setCookie("id", res.data.data.id, {
            path: "/",
            secure: true,
            sameSite: "Strict"
          });
          axios.defaults.headers.common[
            "Authorization"
          ] = `${res.data.data.token}`;
        }
      } catch (error) {
        toast.error(t("auth.loginErorr"));
        throw new Error(error.message);
      }
    },
    onError: (error) => {
      console.log("Google Login Error:", error);
      toast.error(t("auth.googleLoginError"));
    }
  });

  const handleAppleAuth = (response) => {
    if (response?.authorization?.id_token) {
      try {
        const login = axios.post("/user/social_login", {
          login_from: "apple",
          google_token: response?.id_token
        });
        if (login.data.code === 200) {
          toast.success(t("auth.loginSuccess"));
          dispatch(setUser(login.data.data));
          dispatch(setIsLogged(true));
          navigate("/");
          setCookie("token", login.data.data.token, {
            path: "/",
            secure: true,
            sameSite: "Strict"
          });
          setCookie("id", login.data.data.id, {
            path: "/",
            secure: true,
            sameSite: "Strict"
          });
          axios.defaults.headers.common[
            "Authorization"
          ] = `${login.data.data.token}`;
        }
      } catch (error) {
        console.log(error);
        throw new Error(error.message);
      }
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
          label={t("auth.jobTitle")}
          name="job_title"
          type="text"
          id="job_title"
          required={true}
          value={formData.job_title}
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
          formData={formData}
          onChange={(e) => handleChange(e)}
        />
        <PasswordField
          label={t("auth.password")}
          name={"password"}
          id={"password"}
          minLength={6}
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex gap-2 flex-lg-row flex-column w-100">
        <SelectField
          label={t("manageAccounts.country")}
          id="category"
          name="category"
          disabledOption={t("select")}
          value={countryId}
          required={true}
          onChange={handleCountrtSelect}
          options={countries?.map((country) => ({
            name: country.name,
            value: country.id
          }))}
        />
        <PhoneField formData={formData} setFormData={setFormData} id="phone" />
      </div>
      <MultiSelect
        label={t("auth.interestes")}
        id="interest"
        name="interest"
        options={options}
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
              is_freelance: formData.is_freelance === 1 ? 0 : 1
            })
          }
        />
      </div>
      <p>
        {t("auth.byContinoung")}{" "}
        <Link to="/terms-conditions">{t("auth.terms")} </Link> {t("auth.and")}{" "}
        <Link to="/privacy-policy">{t("auth.privacyPolicy")}</Link>{" "}
        {t("auth.ownbyus")}
      </p>
      <SubmitButton loading={loading} name={t("auth.createAccount")} />
      <div className="line">
        <span>{t("auth.orRegisterWith")}</span>
      </div>

      {/* social sign up btns */}
      <div className="d-flex gap-2 flex-lg-row flex-column w-100 mt-4">
        <button
          type="button"
          className="auth_social_btn"
          onClick={() => handleGoogleLogin()}
        >
          <img src={Google} alt="google" /> {t("auth.googleAccount")}
        </button>
        <AppleSigninButton t={t} handleAppleAuth={handleAppleAuth} />
      </div>
      <Link to="/login" className="noAccount">
        {t("auth.alreadyHaveAccount")} <span>{t("auth.login")}</span>
      </Link>
    </form>
  );
};

export default RegisterForm;
