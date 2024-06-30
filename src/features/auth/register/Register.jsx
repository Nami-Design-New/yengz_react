import React, { useState } from "react";
import userImg from "../../../Assets/images/userImg.svg";
import Google from "../../../Assets/images/Google.svg";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../../ui/form-elements/InputField";
import ImageUpload from "../../../ui/form-elements/ImageUpload";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    userImage: "",
    name: "",
    email: "",
    password: "",
    isFreelancing: false,
    token: "1",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
        <form action="" className="container form">
          <ImageUpload
            type="file"
            name="userImage"
            id="img-upload"
            accept="image/*"
            formData={formData}
            setFormData={(e) => handleChange(e)}
          />
          <div className="input-field">
            <div className="d-flex gap-3">
              <InputField
                name="name"
                placeholder="الاسم"
                label="الاسم"
                formData={formData}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="input-field">
            <InputField
              label={` البريد الالكتروني`}
              type="email"
              name="email"
              placeholder="البريد الالكتروني"
              formData={formData}
              onChange={(e) => handleChange(e)}
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
