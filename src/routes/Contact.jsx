import React from "react";
import { useTranslation } from "react-i18next";
import contact from "../Assets/images/contact.webp";
import SectionHeader from "../ui/SectionHeader";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionHeader />
      <section className="contact-section">
        <div className="container mtb-64">
          <div className="row">
            <div className="col-lg-6 col-12 p-3">
              <div className="shaded-card" data-aos="fade-up">
                <form className="container" action="">
                  <div className="row">
                    <div className="col-12 p-2">
                      <h1>{t("contact.title")}</h1>
                      <p>{t("contact.description")}</p>
                    </div>
                    <div className="col-12 p-2 input-filed">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="الاسم بالكامل"
                      />
                    </div>
                    <div className="col-12 p-2 input-filed">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="البريد الالكترونى"
                      />
                    </div>
                    <div className="col-12 p-2 input-filed">
                      <input
                        type="tel"
                        name="tel"
                        id="tel"
                        placeholder="رقم الجوال"
                      />
                    </div>
                    <div className="col-12 p-2 input-filed">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="رسالتك"
                      ></textarea>
                    </div>
                    <div className="col-12 p-2">
                      <button type="submit">ارسال</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-12 p-3">
              <div className="img" data-aos="fade-up">
                <img className="c-image" src={contact} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
