import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import googlePlay from "../../Assets/images/googlePlay.svg";
import AppleStore from "../../Assets/images/appleStore.svg";
import mobile from "../../Assets/images/mobile.png";

export default function DownloadApp() {
  const { t } = useTranslation();
  return (
    <section className="download_app">
      <div className="row">
        <div className="col-lg-6 col-12 p-2">
          <div className="img">
            <img src={mobile} alt="lap" />
          </div>
        </div>
        <div className="col-lg-6 col-12 p-2">
          <div className="content">
            <h2>{t("home.yenjzApp")}</h2>
            <h4>{t("home.downloadAppDesc")}</h4>
            <p>{t("home.downloadAppDesc2")}</p>
            <div className="links">
              <Link to="https://play.google.com/store/apps/details?id=com.app.ynjez">
                <img src={googlePlay} alt="google play" />
              </Link>
              <Link to="https://apps.apple.com/app/id6605935240">
                <img src={AppleStore} alt="apple store" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
