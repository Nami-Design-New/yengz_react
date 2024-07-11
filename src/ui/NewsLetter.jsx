import React from "react";
import about6 from "../Assets/images/about6.webp";
import { useTranslation } from "react-i18next";

const NewsLetter = () => {
  const { t } = useTranslation();
  return (
    <section className="newsletter">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="img" data-aos="zoom-in">
              <img src={about6} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-news" data-aos="fade-up">
              <h3 className="text-center">{t("home.newsletterTitle")}</h3>
              <form>
                <div className="input-field">
                  <input type="email" placeholder={t("home.emailAddress")} />
                  <button type="submit">{t("home.send")}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
