import React from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import useGetAbout from "../features/About/useGetAbout";
import useGetCommunitiesList from "../features/community/useGetCommunitiesList";
import { IconFile } from "@tabler/icons-react";

function SmallMediaMenu({
  isSmallMediaMenuOpen,
  closeSmallMediaMenu,
  isLogged,
  user,
  t,
  closeProfileMenu,
  avatar,
  performLogout,
}) {
  const { data: footerCategoriesList } = useGetAbout();
  const { data: communities } = useGetCommunitiesList();

  return (
    <div className={`small-media-menu  ${isSmallMediaMenuOpen ? "show" : ""}`}>
      {isLogged && (
        <div className="user" onClick={closeSmallMediaMenu}>
          <Link to="/profile" className="avatar" onClick={closeProfileMenu}>
            <img src={user?.image || avatar} alt="" />
          </Link>
          <div className="userr">
            <h6>{user?.name}</h6>
          </div>
        </div>
      )}
      <ul className="nav-links">
        <li className="nav-link" onClick={closeSmallMediaMenu}>
          <Link to="/">
            <i className="fa-sharp fa-regular fa-house"></i>
            {t("homePage")}
          </Link>
        </li>
        <li className="nav-link" onClick={closeSmallMediaMenu}>
          <Link to="/categories">
            <i className="far fa-cube"></i> {t("navbar.categories")}
          </Link>
        </li>
        <li className="nav-link" onClick={closeSmallMediaMenu}>
          <Link to="/freelancers">
            <i className="fa-solid fa-stars"></i> {t("navbar.freelancers")}
          </Link>
        </li>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="nav-link">
              <IconFile stroke={1.5} />
              <span>{t("navbar.ynjez")}</span>
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                {footerCategoriesList?.map((category) => (
                  <li key={category.id} className="nav-link">
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
          {communities && communities?.length > 0 && (
            <Accordion.Item eventKey="1">
              <Accordion.Header className="nav-link">
                <i className="fa-regular fa-comments"></i>{" "}
                <span>{t("navbar.communities")}</span>
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  {communities?.map((community) => (
                    <li key={community.id} className="nav-link">
                      <Link
                        to={`/community/${community.name}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {community.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          )}
        </Accordion>
        {!isLogged && (
          <li className="nav-link" onClick={closeSmallMediaMenu}>
            <Link to="/login">
              <i className="fa-regular fa-arrow-right-from-bracket"></i>
              {t("navbar.login")}
            </Link>
          </li>
        )}
        {isLogged && (
          <>
            <li className="nav-link" onClick={closeSmallMediaMenu}>
              <Link to="/recieved-orders">
                <i className="far fa-clipboard-list-check"></i>{" "}
                {t("navbar.requestsRecieved")}
              </Link>
            </li>
            <li className="nav-link" onClick={closeSmallMediaMenu}>
              <Link to="/add-service">
                <i className="far fa-plus bigger"></i> {t("navbar.addService")}
              </Link>
            </li>
            <li className="nav-link" onClick={closeSmallMediaMenu}>
              <Link to="/add-project">
                <i className="far fa-plus bigger"></i> {t("navbar.addProject")}
              </Link>
            </li>
            <li className="nav-link" onClick={closeSmallMediaMenu}>
              <Link to="/profile">
                <i className="fa-regular fa-user"></i>
                {t("navbar.myProfile")}
              </Link>
            </li>
            <li className="nav-link" onClick={closeSmallMediaMenu}>
              <Link to="/chat">
                <i className="fa-regular fa-messages"></i>
                {t("navbar.messages")}
              </Link>
            </li>
            <li className="nav-link" onClick={closeSmallMediaMenu}>
              <Link to="/cart">
                <i className="fa-light fa-cart-shopping"></i>
                {t("navbar.cart")}
              </Link>
            </li>
            <li className="nav-link" onClick={closeSmallMediaMenu}>
              <Link to="/purchases">
                <i className="far fa-shopping-bag"></i> {t("navbar.purchase")}
              </Link>
            </li>
            <li className="nav-link" onClick={closeSmallMediaMenu}>
              <Link to="/projects">
                <i className="fa-regular fa-file-invoice"></i>
                {t("navbar.projects")}
              </Link>
            </li>
            <li className="nav-link" onClick={closeSmallMediaMenu}>
              <Link to="/projects-orders">
                <i className="fa-regular fa-hourglass-half"></i>
                {t("navbar.projectsOrders")}
              </Link>
            </li>
          </>
        )}
        {isLogged && (
          <>
            <li className="nav-link" onClick={closeSmallMediaMenu}>
              <Link to="/edit-profile">
                <i className="fa-sharp fa-solid fa-pen-to-square"></i>
                {t("navbar.editProfile")}
              </Link>
            </li>
            <li className="nav-link" onClick={closeSmallMediaMenu}>
              <Link to="/manage-accounts">
                <i className="fa-sharp fa-regular fa-building-columns"></i>
                {t("navbar.manageAccounts")}
              </Link>
            </li>
            <li className="nav-link" onClick={closeSmallMediaMenu}>
              <Link>
                <i className="fa-solid fa-trash"></i>
                {t("navbar.deleteAccount")}
              </Link>
            </li>
            <li className="nav-link" onClick={closeSmallMediaMenu}>
              <Link onClick={performLogout}>
                <i className="fa-regular fa-right-from-bracket"></i>
                {t("navbar.logout")}
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default SmallMediaMenu;
