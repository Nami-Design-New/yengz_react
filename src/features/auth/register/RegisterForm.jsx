import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useGoogleLogin } from "@react-oauth/google";
import AppleLogin from "react-apple-login";
import axios from "./../../../utils/axios";
import Google from "../../../Assets/images/Google.svg";
import Apple from "../../../Assets/images/Apple.svg";
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

  const headers = {
    Accept: "application/json",
    "Content-Type": "multipart/form-data"
  };
  const request = {
    method: "POST",
    headers: headers,
    data: {
      ...formData,
      is_freelance: formData.is_freelance ? 1 : 0
    },
    url: "/user/can_register"
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
      console.log("Google Login Success:", tokenResponse);
      try {
        const res = await axios.post("/user/social_login", {
          login_from: "google",
          token: tokenResponse.access_token
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
        } else {
          toast.error(t("auth.emailOrPasswordWrong"));
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

  const handleAppleLogin = async (response) => {
    try {
      const res = await axios.post("/user/social_login", {
        login_from: "apple",
        token: response.code
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
      } else {
        toast.error(t("auth.emailOrPasswordWrong"));
      }
    } catch (error) {
      toast.error(t("auth.loginErorr"));
      throw new Error(error.message);
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
        <AppleLogin
          clientId={"process.env.REACT_APP_APPLE_CLIENT_ID"}
          redirectURI={"process.env.REACT_APP_APPLE_REDIRECT_URI"}
          responseType="code"
          responseMode="form_post"
          scope="name email"
          usePopup={true}
          onSuccess={handleAppleLogin}
          onError={(error) => {
            console.error("Apple Login Error:", error);
            toast.error(t("auth.appleLoginError"));
          }}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="auth_social_btn"
            >
              <img src={Apple} alt="apple" /> {t("auth.appleAccount")}
            </button>
          )}
        />
      </div>
      <Link to="/login" className="noAccount">
        {t("auth.alreadyHaveAccount")} <span>{t("auth.login")}</span>
      </Link>
    </form>
  );
};

export default RegisterForm;
