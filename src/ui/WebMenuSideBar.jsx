import React, { useEffect } from "react";
import { IconExternalLink } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
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
            <IconExternalLink stroke={2} /> {t("navbar.portfolios")}
          </Link>
        </li>
        {footerCategoriesList?.map((category) => (
          <li key={category.id}>
            <Link to={`/about/${category.id}`}>
              <IconExternalLink stroke={2} /> {category.name}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/blogs">
            <IconExternalLink stroke={2} /> {t("footer.blogs")}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default WebMenuSideBar;
