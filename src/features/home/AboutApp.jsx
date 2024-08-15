import { useTranslation } from "react-i18next";
import icon1 from "../../Assets/images/addProject.svg";
import icon2 from "../../Assets/images/savePayments.svg";
import poster from "../../Assets/images/poster.png";
import play from "../../Assets/images/play.svg";
import lap from "../../Assets/images/lap.png";
import { Link } from "react-router-dom";

export default function AboutApp() {
  const { t } = useTranslation();
  return (
    <>
      <section className="video_section">
        <div className="container">
          <div className="row m-0 gap-3">
            <div className="col-lg-5 col-12 p-2">
              <div className="video_wrapper">
                <img src={poster} alt="poster" />
                <button>
                  <img src={play} alt="play" />
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-12 p-2">
              <div className="content">
                <h2 className="mb-5">{t("home.doYouhaveProject")}</h2>
                <h3>
                  <img src={icon1} alt="icon" />
                  {t("home.addProject")}
                </h3>
                <p className="mb-4">{t("home.addProjectDesc")}</p>
                <h3>
                  <img src={icon2} alt="icon" />
                  {t("home.savePayment")}
                </h3>
                <p>{t("home.savePaymentDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="show_creativity">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 p-2">
              <div className="content">
                <h2>{t("home.showCreativity")}</h2>
                <h4>{t("home.showCreativityDesc")}</h4>
                <p>{t("home.showCreativityDesc2")}</p>
                <Link to="/login" className="link">{t("home.joinNow")}</Link>
              </div>
            </div>
            <div className="col-lg-6 col-12 p-2">
              <div className="img">
                <img src={lap} alt="lap" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
