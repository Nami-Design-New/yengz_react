import React from "react";
import InputField from "./form-elements/InputField";
import PhoneField from "./form-elements/PhoneField";
import TextField from "./form-elements/TextField";
import contact from "../Assets/images/contact.webp";

import { useTranslation } from "react-i18next";
import SubmitButton from "./form-elements/SubmitButton";

const ContactForms = ({ formData }) => {
  const { t } = useTranslation();

  return (
    <div className="shaded-card" data-aos="fade-up">
      <form className="container" action="">
        <div className="row">
          <div className="col-12 input-filed">
            <InputField
              placeholder={t("contact.name")}
              name="name"
              type="text"
              id="name"
              required={true}
              value={formData}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="col-12 input-filed">
            <InputField
              placeholder={t("contact.email")}
              type="email"
              name="email"
              id="email"
              required={true}
              formData={formData}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="col-12 input-filed">
            <InputField
              placeholder={t("contact.phone")}
              type="phone"
              name="phone"
              id="email"
              required={true}
              formData={formData}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="col-12 input-filed">
            <TextField
              name="contact"
              id="contact"
              value={formData?.contact}
              onChange={(e) => handleChange(e)}
              placeholder={t("contact.message")}
            />
          </div>

          <div className="col-12">
            <SubmitButton name={t("contact.send")} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForms;
