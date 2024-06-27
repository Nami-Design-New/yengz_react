import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Google from "../../../Assets/images/Google.svg";
import InpuFeild from "../../../ui/form-elements/InputField";
import PasswordField from "./../../../ui/form-elements/PasswordField";
import axios from "./../../../utils/axios";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    token: "1"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = axios.post("/user/login", formData);
      if (res.status === 200) {
        toast.success("تم تسجيل الدخول بنجاح");
        navigate("/");
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.data.data.token}`;
      } else {
        toast.error("البريد الالكتروني او كلمة المرور غير صحيحة");
      }
    } catch (error) {
      console.log(error);
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
            <InpuFeild
              label={"البريد الالكتروني"}
              name={"email"}
              id={"email"}
              type={"email"}
              required={true}
              placeholder={"example@example.com"}
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-12 p-2">
            <PasswordField
              label={"كلمة المرور"}
              name={"password"}
              id={"password"}
              value={formData.password}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <Link to="/forget-password" className="forgetpass">
            نسيت كلمة المرور ؟
          </Link>
          <button type="submit">تسجيل الدخول</button>
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
