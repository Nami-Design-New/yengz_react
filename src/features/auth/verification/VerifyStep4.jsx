import React from "react";
import success from "../../../Assets/images/7efs.gif";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const VerifyStep4 = () => {
  const { t } = useTranslation();
  return (
    <div className="verify_done">
      <img src={success} />
      <div className="row justify-content-center">
        <div className="col-10 text-center">
          <h5 className="text-center">
            تم ارسال بياناتك بنجاح وجاري مراجعتها حالياً , سيتم اخطارك علي
            البريد الالكتروني المسجل لدينا
          </h5>
          <Link to="/">
            {t("homePage")} <i className="fa-solid fa-angle-left"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyStep4;
