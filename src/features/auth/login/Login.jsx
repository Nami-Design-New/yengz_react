import React from "react";
import { Link } from "react-router-dom";
import Google from "../../../Assets/images/Google.svg";

const Login = () => {

  return (
    <main>
      <section className="login-section container">
        <h1 className="text-center">تسجيل الدخول</h1>
        <p className="text-center mt-3 title">
          اهلا بك ...! ادخل بياناتك المسجلة لإتمام عملية الدخول
        </p>
        <form action="register" className="container form">
          <div className="input-field col-12">
            <label htmlFor="email">
              <i className="ti ti-md ti-mail"></i> البريد الالكتروني
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="مثال : mail@mail.com"
            />
          </div>
          <div className="input-field col-12">
            <label htmlFor="password">
              <i className="ti ti-md ti-lock"></i> كلمة المرور
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="***********"
            />
          </div>
          <Link to="/forget_password" className="forgetpass">
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
