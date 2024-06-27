import React, { useState } from "react";
import { Form } from "react-bootstrap";

const PasswordField = ({ label, ...props }) => {
  const [showPass, setShowPass] = useState(false);
  const handleInputType = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  return (
    <div className="input-field">
      <label htmlFor={props.id}>{label}</label>
      <div className="pass-group">
        <Form.Control
          className="form-control"
          placeholder="•••••••••••••••••"
          type={showPass ? "text" : "password"}
          required
          {...props}
        />
        <button onClick={handleInputType}>
          <i
            className={`fa-regular ${!showPass ? "fa-eye-slash" : "fa-eye"}`}
          />
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
