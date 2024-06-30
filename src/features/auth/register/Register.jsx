import React, { useState } from "react";
import userImg from "../../../Assets/images/userImg.svg";
import Google from "../../../Assets/images/Google.svg";
import { Link } from "react-router-dom";
import InputField from "../../../ui/form-elements/InputField";
import ImageUpload from "../../../ui/form-elements/ImageUpload";

const Register = () => {
  return (
    <main>
      <section className="login-section container">
        <h1 className="text-center">انشاء حساب</h1>
        <p className="text-center mt-3 pe-3 ps-3 title">
          اهلا بك…! ادخل بيانات حقيقية وصحيحة لضمان توثيق حسابك ومباشرة العمل.
        </p>

        <form action="" className="container form">
        <ImageUpload
                  type="file"
                  name="userImage"
                  id="img-upload"
                  accept="image/*"
                />
          <div className="input-field">
            <div className="d-flex gap-3">
              <InputField name={"الأول"} placeholder="الأول" label="الاسم" />
              <InputField
                name={"الاسم الاخير"}
                placeholder="الاخير"
                label="الاسم"
              />
            </div>
          </div>
          <div className="input-field">
            <InputField
              label={` البريد الالكتروني`}
              type="email"
              name={"البريد الالكتروني"}
              placeholder="البريد الالكتروني"
            />
          </div>
          <div className="input-field">
            <InputField
              type="password"
              label="password "
              id="password"
              name="password"
              placeholder="***********"
              formData={formData}
              onChange={(e) => handleChange(e)}
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
                name="isFreelancing"
                formData={formData}
                onChange={(e) => handleChange(e)}
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
