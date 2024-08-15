import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  function handleSubmitSearch(e) {
    e.preventDefault();
    const searchInput = e.target[0].value;
    navigate(`/services?search=${searchInput}`);
  }

  return (
    <section className="hero_section">
      <div className="container h-100">
        <div className="row justify-content-center m-0">
          <div className="col-lg-9 col-12 p-2">
            <div className="hero_content">
              <div className="info">
                <h2>{t("home.heroSectionTitle")}</h2>
                <h2>{t("home.heroSectionSubTitle")}</h2>
              </div>
              <form onSubmit={handleSubmitSearch}>
                <div className="input-fileld">
                  <i className="fa-sharp fa-regular fa-magnifying-glass"></i>
                  <input
                    type="text"
                    id="search"
                    name="search"
                    placeholder={t("home.searchPlaceHolder")}
                  />
                  <button>{t("home.search")}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
