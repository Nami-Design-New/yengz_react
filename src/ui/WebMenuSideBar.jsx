import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useGetAbout from "../features/About/useGetAbout";
import { Accordion } from "react-bootstrap";
import logo from "../Assets/images/logo.svg";

function WebMenuSideBar({ isOpen, setIsOpen }) {
  const { t } = useTranslation();
  const { data: footerCategoriesList } = useGetAbout();

  useEffect(() => {
    const menuButton = document.querySelector(".webmenu_open");
    const menu = document.querySelector(".web-menu-sidebar");
    document.addEventListener("click", (e) => {
      if (!menuButton.contains(e.target) && !menu.contains(e.target)) {
        setIsOpen(false);
      }
    });
  }, [setIsOpen]);

  return (
    <div className={`web-menu-sidebar ${isOpen ? "active" : ""}`}>
      <ul className="nav_side_menu">
        <li>
          <Link to="/portfolios" onClick={() => setIsOpen(false)}>
            <i className="fa-regular fa-file-invoice"></i>{" "}
            {t("navbar.portfolios")}
          </Link>
        </li>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <img src={logo} alt="" />
              <span>{t("navbar.ynjez")}</span>
            </Accordion.Header>
            <Accordion.Body>
              {footerCategoriesList?.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/about/${category.id}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <i class="fa-sharp fa-solid fa-circle-info"></i>{" "}
                    {category.name}
                  </Link>
                </li>
              ))}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <i class="fa-solid fa-comments"></i>{" "}
              <span>{t("navbar.communities")}</span>
            </Accordion.Header>
            <Accordion.Body>
              <li>
                <Link to="" onClick={() => setIsOpen(false)}>
                  نماذج أعمال قمت بتنفيذها
                </Link>
              </li>
              <li>
                <Link to="" onClick={() => setIsOpen(false)}>
                  طلبات الخدمات غير الموجودة
                </Link>
              </li>
              <li>
                <Link to="" onClick={() => setIsOpen(false)}>
                  تجارب وقصص المستخدمين
                </Link>
              </li>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <li>
          <Link to="/blogs" onClick={() => setIsOpen(false)}>
            <i class="fa-solid fa-blog"></i> {t("navbar.blogs")}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default WebMenuSideBar;
