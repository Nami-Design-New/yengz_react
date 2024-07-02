import React from "react";
import avatar from "../Assets/images/avatar.png";
import Vector from "../Assets/images/Vector.svg";
import PasswordField from "../ui/form-elements/PasswordField";
import { t } from "i18next";
import TextField from "../ui/form-elements/TextField";

const EditProfile = () => {
  return (
    <main>
      <section className="login-section container">
        <h1 className="text-center">تعديل الحساب</h1>
        <form action="" className="container form">
          <div className="input-field image-change-wrapper">
            <div className="img-wrap">
              <img id="uploadedImage" src={avatar} alt="user" />
            </div>

            <div className="d-flex w-100 pe-5 ps-5 justify-content-between align-items-center">
              <label for="img">الصورةالشخصية</label>
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
                placeholder="خالد"
              />

              <input
                type="text"
                id="lastName"
                name="last-name"
                placeholder="عوض"
              />


              
            </div>
          </div>

          <div className="input-field">
            <label for="email">
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
            <label for="about">
              <i className="fa-regular fa-circle-info"></i> النبذة التعريفية
            </label>
            <textarea
              name="about"
              id="about"
              placeholder="مطور مواقع , تعلمت لغات HTML5-CSS3-JAVASCRIPT-JQUERY-BOOTSTRAP-PHP-MYSQL-AJAX-JSON-APIلدي أكثر من 50 عميل بتقييم 5 نجوم علي مختلف منصات العمل الحرلدي خبرة في تصميم وتطوير المواقع لاكثر من 5 سنوات وقمت بالعمل علي جميع انواع المشاريع الخاصة بالويب (متاجر الكترونية-مواقع تعريفية-معرض اعمال-مواقع تعليمية-مواقع توظيف) قمنا بالعمل مع مختلف انواع الشركات والهيئات(شركات صغيرة-شركات كبيرة-هيئات حكومية)استطيع تحويل من تصميم الفوتوشوب PSD او XD او Figma الي مواقع تفاعليةفقط القي نظرة علي اعماليولا تتردد في اتصالك بي :)"
            ></textarea>
          </div>

          <div className="input-field">
            <PasswordField
              label={t("edit.editPassword")}
              name={"password"}
              id={"password"}
            />
          </div>
          <div className="question">
            <label for="vendor" className="quest">
              <img src={Vector} alt="" />
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
          <button type="submit">تأكيد</button>
        </form>
      </section>
    </main>
  );
};

export default EditProfile;
