import React from "react";
import userImg from "../../../Assets/images/userImg.svg";
import Google from "../../../Assets/images/Google.svg"
import { Link } from "react-router-dom";

const Register = () => {
    
  return (
    <main>
      <section className="login-section container">
        <h1 className="text-center">انشاء حساب</h1>
        <p className="text-center mt-3 pe-3 ps-3 title">
          اهلا بك…! ادخل بيانات حقيقية وصحيحة لضمان توثيق حسابك ومباشرة العمل.
        </p>
        
        <form action="" className="container form">
          <div className="input-field image-change-wrapper">
            <div className="img-wrap">
              <img id="uploadedImage" src={userImg} alt="user" />
            </div>
            <div className="d-flex w-100 pe-5 ps-5 justify-content-between align-items-center">
              <label htmlFor="img">الصورةالشخصية</label>
              <label className="upload">
                <div className="plus">
                  <i className="fa-regular fa-plus"></i>
                </div>
                <input
                  type="file"
                  name="userImage"
                  id="img-upload"
                  accept="image/*"
                />
              </label>
            </div>
          </div>
          <div className="input-field">
            <label>
              <i className="ti ti-md ti-user"></i>الاسم
            </label>
            <div className="d-flex gap-3">
              <input
                type="text"
                id="firstName"
                name="first-name"
                placeholder="الأول"
              />
              <input
                type="text"
                id="lastName"
                name="last-name"
                placeholder="الأخير"
              />
            </div>
          </div>
          <div className="input-field">
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
          <div className="input-field">
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
          <div className="question">
            <label htmlFor="vendor" className="quest">
              <img src="assets/images/Vector.svg" alt="" />
              هل انت بائع ؟
            </label>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="vendor"
              />
            </div>
          </div>
          <p>
            بمواصلتك، فإنك توافق على <Link to="#">الشروط الأحكام</Link> و{" "}
            <Link to="#">سياسة الخصوصية</Link> الخاصة بـ
          </p>
          <button type="submit">إنشاء الحساب</button>
          <div className="line">
            <span>أو أنشئ حساب بواسطة</span>
          </div>
          <button className="google-login">
            <img src={Google} alt="google" /> حساب جوجل
          </button>
        </form>
      </section>
    </main>
  );
};

export default Register;
