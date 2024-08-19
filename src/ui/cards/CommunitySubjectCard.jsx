import { Link } from "react-router-dom";
import subjectImg from "../../Assets/images/Artboard.png";
import avatarImg from "../../Assets/images/avatar.jpg";
import { useTranslation } from "react-i18next";

function CommunitySubjectCard({ currentRoute }) {
  const { t } = useTranslation();
  return (
    <Link to={`/${currentRoute}/1`} className="subjectItem">
      <div className="subjectContent">
        <div className="image-wrapper">
          <img src={subjectImg} alt=" Suject img" />
        </div>
        <div className="info-wrapper">
          <h6 className="m-0">{t("communities.subjectHeader")}</h6>
          <div className="info-boxes-wrapper">
            <p className="info-box name m-0">
              <i className="fa-regular fa-user"></i>
              عمرو م.
            </p>
            <p className="time info-box m-0">
              <i className="fa-regular fa-timer"></i>
              منذ 17 يوم و 9 ساعة
            </p>
          </div>
        </div>
      </div>
      <div className="userContent">
        <div className="image-wrapper">
          <img src={avatarImg} alt="" />
        </div>
        <div className="info-wrapper">
          <h6 className="m-0">عمرو م.</h6>
          <div className="info-boxes-wrapper">
            <p className="time info-box m-0">
              <i className="fa-regular fa-timer"></i>
              آخر تفاعل منذ 17 يوم و 9 ساعة
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CommunitySubjectCard;
