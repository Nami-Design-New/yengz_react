import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { setIsLogged, setUser } from "../../../redux/slices/authedUser";
import Google from "../../../Assets/images/Google.svg";
import InputField from "../../../ui/form-elements/InputField";
import PasswordField from "../../../ui/form-elements/PasswordField";
import axios from "../../../utils/axios";
import SubmitButton from "../../../ui/form-elements/SubmitButton";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [, setCookie] = useCookies(["token"]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/user/login", formData);
      if (res.data.code === 200) {
        toast.success("تم تسجيل الدخول بنجاح");
        dispatch(setUser(res.data.data));
        dispatch(setIsLogged(true));
        navigate("/");
        setCookie("token", res.data.data.token, {
          path: "/",
          secure: true,
          sameSite: "Strict"
        });
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.data.data.token}`;
      } else {
        toast.error("البريد الالكتروني او كلمة المرور غير صحيحة");
      }
    } catch (error) {
      toast.error("حدث خطأ أثناء تسجيل الدخول");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="login-section container">
        <h1 className="text-center">تسجيل الدخول</h1>
        <p className="text-center mt-3 title">
          اهلا بك ...! ادخل بياناتك المسجلة لإتمام عملية الدخول
        </p>
        <form className="container form" onSubmit={handleSubmit}>
          <div className="col-12 p-2">
            <InputField
              label={"البريد الالكتروني"}
              name={"email"}
              id={"email"}
              type={"email"}
              required={true}
              placeholder={"example@example.com"}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-12 p-2">
            <PasswordField
              label={"كلمة المرور"}
              name={"password"}
              id={"password"}
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <Link to="/forget-password" className="forgetpass">
            نسيت كلمة المرور ؟
          </Link>
          <SubmitButton loading={loading} name={"تسجيل الدخول"} />
          <div className="line">
            <span>أو تسجيل الدخول بواسطة</span>
          </div>
          <button className="google-login">
            <img src={Google} alt="google" /> حساب جوجل
          </button>
          <Link to="register" className="noAccount">
            ليس لديك حساب ؟ <span>انشاء حساب</span>
          </Link>
        </form>
      </section>
    </main>
  );
};

export default Login;
