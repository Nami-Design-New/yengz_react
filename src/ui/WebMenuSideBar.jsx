import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import { IconBriefcase, IconFile, IconUsers } from "@tabler/icons-react";
import useGetAbout from "../features/About/useGetAbout";

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
            <IconBriefcase stroke={1.5} /> {t("navbar.portfolios")}
          </Link>
        </li>
        <li>
          <Link to="/freelancers" onClick={() => setIsOpen(false)}>
            <IconUsers stroke={1.5} /> {t("navbar.freelancers")}
          </Link>
        </li>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <IconFile stroke={1.5} />
              <span>{t("navbar.ynjez")}</span>
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                {footerCategoriesList?.map((category) => (
                  <li key={category.id}>
                    <Link
                      to={`/about/${category.id}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <i className="fa-regular fa-comments"></i>{" "}
              <span>{t("navbar.communities")}</span>
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <Link
                    to="/done-works-modals"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("routes.done-works-modals")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/unexisited-requests-orders"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("routes.unexisited-requests-orders")}
                  </Link>
                </li>
                <li>
                  <Link to="/users-stories" onClick={() => setIsOpen(false)}>
                    تجارب وقصص المستخدمين
                  </Link>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <li>
          <Link to="/blogs" onClick={() => setIsOpen(false)}>
            <i className="fa-regular fa-blog"></i> {t("navbar.blogs")}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default WebMenuSideBar;
