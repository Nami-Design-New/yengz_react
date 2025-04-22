import { Fragment, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconLanguage, IconMenu2 } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/slices/language";
import { useTranslation } from "react-i18next";
import { deleteAccount } from "../services/apiAuth";
import { logout, setIsLogged, setUser } from "../redux/slices/authedUser";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import "../Assets/styles/dropdownes.css";
import axios from "./../utils/axios";
import avatar from "../Assets/images/avatar.jpg";
import logo from "../Assets/images/logo.svg";
import Dropdown from "react-bootstrap/Dropdown";
import i18next from "i18next";
import useOutsideClose from "../hooks/useOutsideClose";
import DeleteAcountModal from "./modals/DeleteAcountModal";
import useGetNotifications from "../features/profile/useGetNotifications";
import SmallMediaMenu from "./SmallMediaMenu";
import WebMenuSideBar from "./WebMenuSideBar";
import NotificationItem from "./NotificationItem";
import { useQueryClient } from "@tanstack/react-query";
import useCategorieListWithSub from "../features/categories/useCategorieListWithSub";

const Navbar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchRef = useRef();
  const profileMenuRef = useRef();
  const user = useSelector((state) => state.authedUser.user);
  const lang = useSelector((state) => state.language.lang);
  const isLogged = useSelector((state) => state.authedUser.isLogged);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isSmallMediaMenuOpen, setIsSmallMediaMenuOpen] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [isWebMenuOpen, setIsWebMenuOpen] = useState(false);
  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] =
    useState(false);

  const { data: categoriesWithSubCategories } = useCategorieListWithSub();

  const { data: notifications } = useGetNotifications();

  const [, , deleteCookie] = useCookies();
  const [cookies] = useCookies(["token"]);
  const token = cookies?.token;
  const queryClient = useQueryClient();

  function handleShowDeleteAccountModal() {
    setIsDeleteAccountModalOpen(true);
  }

  function handleToggleSearchInput() {
    setIsSearchOpen((open) => !open);
  }

  function handleToggleProfileMenu() {
    setIsProfileMenuOpen((open) => !open);
  }

  function closeSearchInput() {
    setIsSearchOpen(false);
  }

  function closeProfileMenu() {
    setIsProfileMenuOpen(false);
  }

  function closeSmallMediaMenu() {
    setIsSmallMediaMenuOpen(false);
  }

  function handleToggleSearchInput() {
    setIsSearchOpen((open) => !open);
  }

  function handleToggleProfileMenu() {
    setIsProfileMenuOpen((open) => !open);
  }

  function closeSearchInput() {
    setIsSearchOpen(false);
  }

  function closeProfileMenu() {
    setIsProfileMenuOpen(false);
  }

  function handleSubmitSearch(e) {
    e.preventDefault();
    const searchInput = e.target[0].value;
    closeSearchInput();
    navigate(`/services?search=${searchInput}`);
  }

  const handleLang = (newLang) => {
    navigate(0);
    dispatch(setLanguage(newLang));
    i18next.changeLanguage(newLang);

    const bodyElement = document.querySelector("body");
    if (bodyElement) {
      bodyElement.classList.toggle("en", newLang === "en");
    }
  };

  const performLogout = async () => {
    try {
      const deleteToken = await axios.post("/user/logout", { token: token });
      if (deleteToken.data.code === 200) {
        deleteCookie("token");
        deleteCookie("id");
        delete axios.defaults.headers.common["Authorization"];
        dispatch(setUser({}));
        dispatch(setIsLogged(false));
        navigate("/");
        queryClient.clear();
        sessionStorage.clear();
      }
    } catch (error) {
      console.error("Error during logout:", error);
      throw new Error(error.message);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      setDeleteLoading(true);
      const res = await deleteAccount();
      if (res.data.code === 200) {
        delete axios.defaults.headers.common["Authorization"];
        toast.success(t("cart.orderSuccess"));
        dispatch(setUser({}));
        dispatch(setIsLogged(false));
        dispatch(logout());
        navigate("/");
      } else {
        toast.error(res.message);
        console.error(res.message);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setDeleteLoading(false);
      setIsDeleteAccountModalOpen(false);
    }
  };

  useOutsideClose(searchRef, closeSearchInput, true);
  useOutsideClose(profileMenuRef, closeProfileMenu, true);

  return (
    <header>
      <nav className="tnavbar">
        <div
          className={`toogler ${isSmallMediaMenuOpen ? "close" : ""}`}
          onClick={() => setIsSmallMediaMenuOpen(() => !isSmallMediaMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <SmallMediaMenu
          isSmallMediaMenuOpen={isSmallMediaMenuOpen}
          closeSmallMediaMenu={closeSmallMediaMenu}
          isLogged={isLogged}
          user={user}
          t={t}
          closeProfileMenu={closeProfileMenu}
          avatar={avatar}
          performLogout={performLogout}
        />

        <div className="right-wrapper">
          <button
            className="webmenu_open"
            onClick={() => setIsWebMenuOpen(!isWebMenuOpen)}
          >
            <IconMenu2 stroke={1.5} />
          </button>

          <div className="logo">
            <Link to="/">
              <img className="brand" src={logo} alt="logo" />
            </Link>
          </div>

          <ul className="nav-links">
            <li className="nav-link">
              <Link
                to="/add-service"
                className="d-flex align-items-center gap-1"
              >
                <i className="far fa-plus bigger"></i> {t("navbar.addService")}
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="/add-project"
                className="d-flex align-items-center gap-1"
              >
                <i className="far fa-plus bigger"></i> {t("navbar.addProject")}
              </Link>
            </li>
            <li className="nav-link">
              <div class="dropdown">
                <button
                  class="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="far fa-cube"></i> {t("navbar.categories")}
                </button>
                <div
                  class="dropdown-menu categories_list"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <div className="row">
                    {categoriesWithSubCategories?.map((category) => (
                      <div className="col-3 p-2" key={category.id}>
                        <h4>{category.name}</h4>
                        <ul>
                          {category?.sub_categories?.map((subCategory) => (
                            <li key={subCategory.id}>
                              <Link
                                to={`/services?sub_categories=${subCategory.id}`}
                              >
                                {subCategory.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>
            {isLogged && (
              <>
                <li className="nav-link">
                  <Link
                    to="/purchases"
                    className="d-flex align-items-center gap-1"
                  >
                    <i className="far fa-shopping-bag"></i>{" "}
                    {t("navbar.purchase")}
                  </Link>
                  <span className="num-count2">
                    {user?.service_purchase_count || 0}
                  </span>
                </li>
                <li className="nav-link">
                  <Link
                    to="/recieved-orders"
                    className="d-flex align-items-center gap-1"
                  >
                    <i className="far fa-clipboard-list-check"></i>{" "}
                    {t("navbar.requestsRecieved")}
                  </Link>
                  <span className="num-count2">
                    {user?.service_orders_count || 0}
                  </span>
                </li>
                <li className="nav-link">
                  <Link
                    to="/projects-orders"
                    className="d-flex align-items-center gap-1"
                  >
                    <i className="fa-regular fa-hourglass-half"></i>
                    {t("navbar.projectsOrders")}
                  </Link>
                  <span className="num-count2">
                    {user?.projects_order_count || 0}
                  </span>
                </li>
              </>
            )}
          </ul>

          <WebMenuSideBar isOpen={isWebMenuOpen} setIsOpen={setIsWebMenuOpen} />
        </div>

        <div className="left-wrapper">
          <ul className="loged-in-minor-menu">
            {/* search */}
            <li className="link">
              <i
                className="fa-regular fa-magnifying-glass"
                style={{ cursor: "pointer" }}
                onClick={handleToggleSearchInput}
              ></i>
            </li>
            {isSearchOpen && (
              <form
                action="/services"
                aria-labelledby="searchForm"
                className="nav-search"
                ref={searchRef}
                onSubmit={handleSubmitSearch}
              >
                <input
                  className="search_input"
                  type="text"
                  name="s"
                  placeholder={t("navbar.searchFor")}
                />
                <button type="submit">
                  <i className="fa-sharp fa-regular fa-magnifying-glass"></i>
                </button>
              </form>
            )}
            <li className="link">
              <Dropdown style={{ position: "relative" }}>
                <Dropdown.Toggle
                  style={{ backgroundColor: "#f4f4f4" }}
                  id="dropdown-basic"
                >
                  <IconLanguage stroke={1} />
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu lang-menu">
                  <Dropdown.Item>
                    <div
                      className="dropdown-item"
                      onClick={() => handleLang("ar")}
                    >
                      <div
                        className={`${
                          lang === "ar" ? "circle-filled" : "circle-outline"
                        }`}
                      ></div>
                      عربى
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <div
                      className="dropdown-item"
                      onClick={() => handleLang("en")}
                    >
                      <div
                        className={`${
                          lang === "en" ? "circle-filled" : "circle-outline"
                        }`}
                      ></div>
                      English
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            {isLogged && (
              <>
                {/* Cart */}
                <li className="link hide-sm2">
                  <Link to="/cart" className="cart btn">
                    <i className="fa-light fa-cart-shopping"></i>
                    <span className="num-count">{user?.cart_count || 0}</span>
                  </Link>
                </li>
                {/* Message */}
                <li className="link hide-sm2">
                  <li className="link hide-sm2">
                    <Link to="/chat" className="cart btn">
                      <i className="fa-regular fa-message-lines"></i>
                      <span className="num-count">{user?.chat_count || 0}</span>
                    </Link>
                  </li>
                </li>

                {/* Notifications */}
                <li
                  className={`link hide-sm2 notifications ${
                    lang === "en" ? "reverse" : ""
                  }`}
                >
                  <Dropdown style={{ position: "relative" }}>
                    <Dropdown.Toggle
                      style={{ backgroundColor: "#f4f4f4" }}
                      id="dropdown-basic"
                    >
                      <i className="fa-regular fa-bell"></i>
                      <span className="num-count">
                        {user?.receive_notification || 0}
                      </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="drop_Message_Menu" align="start">
                      <div className="scroll_menu">
                        {notifications?.map((notification) => (
                          <Fragment key={notification?.title}>
                            <Dropdown.Item className="drop_Message">
                              <NotificationItem notification={notification} />
                            </Dropdown.Item>
                          </Fragment>
                        ))}
                      </div>
                      <Link className="showall" to="/notifications">
                        {t("navbar.allNotifications")}
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </>
            )}

            {!isLogged && (
              <>
                {/* auth login */}
                <li className="link hide-sm2">
                  <div className="btns">
                    <Link to="/login">
                      <i className="fa-light fa-arrow-right-to-bracket"></i>{" "}
                      {t("navbar.login")}
                    </Link>
                    <Link to="/register">
                      <i className="fa-light fa-user-plus"></i>{" "}
                      {t("navbar.newAccount")}
                    </Link>
                  </div>
                </li>
              </>
            )}

            {isLogged && (
              <>
                {/* profile picture */}
                <li className="link hide-sm2">
                  <span
                    className="btn dropdown-toggle"
                    type="button"
                    id="usermenu"
                    onClick={handleToggleProfileMenu}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={user?.image || avatar} alt="user-avatar" />
                  </span>
                </li>
                {isProfileMenuOpen && (
                  <ul
                    className={`profile-menu ${lang === "en" ? "reverse" : ""}`}
                    ref={profileMenuRef}
                  >
                    <li onClick={closeProfileMenu}>
                      <Link className="dropdown-item_Link" to="/profile">
                        <i className="fa-solid fa-user"></i>
                        {user?.name || "user name"}
                      </Link>
                    </li>
                    <li onClick={closeProfileMenu}>
                      <Link className="dropdown-item_Link" to="/balance">
                        <i className="fa-sharp fa-solid fa-dollar-sign"></i>
                        {t("navbar.balance")}
                      </Link>
                    </li>
                    <li onClick={closeProfileMenu}>
                      <Link
                        className="dropdown-item_Link"
                        to="/manage-accounts"
                      >
                        <i className="fa-sharp fa-regular fa-building-columns"></i>
                        {t("navbar.manageAccounts")}
                      </Link>
                    </li>
                    <hr />
                    <li onClick={closeProfileMenu}>
                      <Link className="dropdown-item_Link" to="/edit-profile">
                        <i className="fa-sharp fa-solid fa-pen-to-square"></i>
                        {t("navbar.editProfile")}
                      </Link>
                    </li>
                    <li onClick={closeProfileMenu}>
                      <Link className="dropdown-item_Link" to="/contact">
                        <i className="fa-solid fa-file"></i>
                        {t("navbar.support")}
                      </Link>
                    </li>
                    <li onClick={closeProfileMenu}>
                      <Link className="dropdown-item_Link" to="/my-collections">
                        <i className="fa-solid fa-chart-tree-map"></i>
                        {t("navbar.myCollections")}
                      </Link>
                    </li>
                    <li onClick={closeProfileMenu}>
                      <Link
                        className="dropdown-item_Link"
                        to="/complaints-suggestions"
                      >
                        <i className="fa-solid fa-circle-info"></i>
                        {t("navbar.report")}
                      </Link>
                    </li>
                    <li onClick={closeProfileMenu}>
                      <Link
                        className="dropdown-item_Link"
                        onClick={handleShowDeleteAccountModal}
                      >
                        <i className="fa-solid fa-trash"></i>
                        {t("navbar.deleteAccount")}
                      </Link>
                    </li>
                    <hr />
                    <li onClick={closeProfileMenu}>
                      <Link
                        className="dropdown-item_Link"
                        onClick={performLogout}
                      >
                        <i className="fa-solid fa-right-from-bracket"></i>
                        {t("navbar.logout")}
                      </Link>
                    </li>
                  </ul>
                )}
              </>
            )}
          </ul>
        </div>
      </nav>
      <DeleteAcountModal
        showModal={isDeleteAccountModalOpen}
        setShowModal={setIsDeleteAccountModalOpen}
        loading={deleteLoading}
        text={t("navbar.areYouSureYouWantToDeleteYourAccount")}
        eventFunction={handleDeleteAccount}
      />
    </header>
  );
};

export default Navbar;
