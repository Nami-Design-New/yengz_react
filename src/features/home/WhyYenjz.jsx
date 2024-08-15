import { useTranslation } from "react-i18next";
import icon1 from "../../Assets/images/1.svg";
import icon2 from "../../Assets/images/2.svg";
import icon3 from "../../Assets/images/3.svg";
import icon4 from "../../Assets/images/4.svg";
import icon5 from "../../Assets/images/5.svg";
import icon6 from "../../Assets/images/6.svg";

export default function WhyYenjz() {
  const { t } = useTranslation();

  return (
    <section className="how_it_works">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2">
            <h2 className="title">{t("home.whyYenjz")}</h2>
            <p className="desc">{t("home.whyYenjzDesc")}</p>
          </div>
          <div className="col-lg-4 col-12 p-2">
            <div className="feature_card">
              <div className="d-flex align-items-center gap-3">
                <div className="img">
                  <img src={icon1} alt="icon1" />
                </div>
                <h6>{t("whyYenjz.title1")}</h6>
              </div>
              <p>{t("whyYenjz.desc1")}</p>
            </div>
          </div>
          <div className="col-lg-4 col-12 p-2">
            <div className="feature_card">
              <div className="d-flex align-items-center gap-3">
                <div className="img">
                  <img src={icon2} alt="icon1" />
                </div>
                <h6>{t("whyYenjz.title2")}</h6>
              </div>
              <p>{t("whyYenjz.desc2")}</p>
            </div>
          </div>
          <div className="col-lg-4 col-12 p-2">
            <div className="feature_card">
              <div className="d-flex align-items-center gap-3">
                <div className="img">
                  <img src={icon3} alt="icon3" />
                </div>
                <h6>{t("whyYenjz.title3")}</h6>
              </div>
              <p>{t("whyYenjz.desc3")}</p>
            </div>
          </div>
          <div className="col-lg-4 col-12 p-2">
            <div className="feature_card">
              <div className="d-flex align-items-center gap-3">
                <div className="img">
                  <img src={icon4} alt="icon4" />
                </div>
                <h6>{t("whyYenjz.title4")}</h6>
              </div>
              <p>{t("whyYenjz.desc4")}</p>
            </div>
          </div>
          <div className="col-lg-4 col-12 p-2">
            <div className="feature_card">
              <div className="d-flex align-items-center gap-3">
                <div className="img">
                  <img src={icon5} alt="icon5" />
                </div>
                <h6>{t("whyYenjz.title5")}</h6>
              </div>
              <p>{t("whyYenjz.desc5")}</p>
            </div>
          </div>
          <div className="col-lg-4 col-12 p-2">
            <div className="feature_card">
              <div className="d-flex align-items-center gap-3">
                <div className="img">
                  <img src={icon6} alt="icon6" />
                </div>
                <h6>{t("whyYenjz.title6")}</h6>
              </div>
              <p>{t("whyYenjz.desc6")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
