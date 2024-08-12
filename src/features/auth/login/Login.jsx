import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { setIsLogged, setUser } from "../../../redux/slices/authedUser";
import { useTranslation } from "react-i18next";
import { useGoogleLogin } from "@react-oauth/google";
import Google from "../../../Assets/images/Google.svg";
import Apple from "../../../Assets/images/Apple.svg";
import InputField from "../../../ui/form-elements/InputField";
import PasswordField from "../../../ui/form-elements/PasswordField";
import axios from "../../../utils/axios";
import SubmitButton from "../../../ui/form-elements/SubmitButton";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [, setCookie] = useCookies(["token", "id"]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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

  const handleAppleSignIn = (e) => {
    e.preventDefault();
    window.AppleID.auth.init({
      clientId: process.env.REACT_APP_APPLE_CLIENT_ID,
      scope: "name email",
      redirectURI: process.env.REACT_APP_APPLE_REDIRECT_URI,
      usePopup: true
    });

    window.AppleID.auth
      .signIn()
      .then((response) => {
        console.log(response);
        alert(JSON.stringify(response));
      })
      .catch((error) => {
        console.error("Apple Sign-In Error:", error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/user/login", formData);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-section container">
      <h1 className="text-center">{t("auth.loginPageTitle")}</h1>
      <p className="text-center mt-3 title">{t("auth.loginPageSubTitle")}</p>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-12 p-2">
          <form className="container mt-0 form" onSubmit={handleSubmit}>
            <div className="col-12 p-2">
              <InputField
                label={t("auth.email")}
                name={"email"}
                id={"email"}
                type={"email"}
                required={true}
                value={formData.email}
                onChange={handleChange}
                placeholder={"example@example.com"}
              />
            </div>
            <div className="col-12 p-2">
              <PasswordField
                label={t("auth.password")}
                name={"password"}
                id={"password"}
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <Link to="/forget-password" className="forgetpass">
              {t("auth.forgetPassword")}
            </Link>
            <SubmitButton loading={loading} name={t("auth.login")} />
            <div className="line">
              <span>{t("auth.orLoginWith")}</span>
            </div>
            <div className="d-flex gap-2 flex-lg-row mt-3 flex-column w-100">
              <button
                type="button"
                className="auth_social_btn"
                onClick={() => handleGoogleLogin()}
              >
                <img src={Google} alt="google" /> {t("auth.googleAccount")}
              </button>
              <button
                onClick={(e) => handleAppleSignIn(e)}
                className="auth_social_btn"
              >
                <img src={Apple} alt="apple" /> {t("auth.appleAccount")}
              </button>
            </div>
            <Link to="/register" className="noAccount">
              {t("auth.don'tHaveAccount")}{" "}
              <span>{t("auth.createAccount")}</span>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
