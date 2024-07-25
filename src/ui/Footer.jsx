import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../Assets/images/logo.svg";
import usePaymentMethodsList from "../features/payments/usePaymentMethodsList";
import useGetAbout from "../features/About/useGetAbout";
import usePopularCategories from "../features/categories/usePopularCategories";

const Footer = () => {
  const { data: payments } = usePaymentMethodsList();
  const { t } = useTranslation();
  const { data: footerCategoriesList } = useGetAbout();
  const { data: popularCategoriesList } = usePopularCategories();

  return (
    <footer>
      <div className="container">
        <div className="row upper-row">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="about">
              <Link to="/" className="logo">
                <img className="brand" src={logo} alt="" />
              </Link>
              <p>
                مرحبًا بك في أكبر سوق عربي لبيع وشراء الخدمات المصغرة. نحن هنا
                لمساعدتك في تحقيق أهدافك بسهولة وأمان. يمكنك الاعتماد على منصتنا
                لإتمام مهامك ومشاريعك بلاسعار التي تناسبك
              </p>
            </div>
          </div>
          {footerCategoriesList && footerCategoriesList?.length > 0 && (
            <div className="col-lg-3 col-6">
              <div className="links pa-24">
                <h4>{t("footer.importantLinks")}</h4>
                <ul>
                  {footerCategoriesList.map((category) => (
                    <li key={category.id}>
                      <Link to={`/about/${category.id}`}>{category.name}</Link>
                    </li>
                  ))}
                  <li>
                    <Link to="/terms-conditions">{t("footer.terms")}</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">{t("footer.privacy")}</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {popularCategoriesList && popularCategoriesList?.length > 0 && (
            <div className="col-lg-3 col-6">
              <div className="links pa-24">
                <h4>الاقسام</h4>
                <ul>
                  {popularCategoriesList.map((category) => (
                    <li key={category.id}>
                      <Link to={`/services?categories=${category.category_id}`}>
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <div className="col-lg-3 col-md-6 col-12">
            <div className="d-flex flex-column gap-lg-5 gap-4 pa-24">
              <div className="download-app">
                <h4>تحميل التطبيق</h4>
                <ul>
                  <li>
                    <Link to="#">
                      <div className="text">
                        <p>App Store</p>
                      </div>
                      <div className="icon">
                        <i className="fa-brands fa-apple"></i>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="text">
                        <p>Google Play</p>
                      </div>
                      <div className="icon">
                        <i className="fa-brands fa-google-play"></i>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="follow">
                <ul>
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <div className="flex-grow-1 flex-shrink-0 flex-basis-0 copy-rights d-flex">
              <p className="mb-0">
                {t("footer.copyright")} © {new Date().getFullYear()}{" "}
                {t("footer.allRightsReserved")}
              </p>
            </div>
            {payments && payments?.length > 0 && (
              <div className="footer-payment d-flex align-items-center h-full gap-2">
                <span>{t("footer.acceptPaymentsBy")}:</span>
                <div className="d-flex align-items-center gap-2">
                  {payments?.map((payment) => (
                    <img
                      src={payment.image}
                      key={payment.id}
                      alt={`payment ${payment.id}`}
                      style={{
                        width: "50px",
                        objectFit: "cover",
                        cursor: "pointer"
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
