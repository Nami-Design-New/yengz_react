import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const PasswordField = ({ label, ...props }) => {
  const { t } = useTranslation();
  const [showPass, setShowPass] = useState(false);
  const handleInputType = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  return (
    <div className="input-field">
      <label htmlFor={props.id}>{label} <b style={{ color: "red" }}>*</b></label>
      <div className="pass-group">
        <Form.Control
          className="form-control"
          placeholder={t("password")}
          type={showPass ? "text" : "password"}
          required
          {...props}
          style={{ cursor: "pointer" }}s
        />
        <span onClick={handleInputType}>
          <i
            className={`fa-regular ${!showPass ? "fa-eye-slash" : "fa-eye"}`}
          />
        </span>
      </div>
    </div>
  );
};

export default PasswordField;
