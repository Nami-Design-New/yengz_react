import React, { useEffect, useState } from "react";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import avatarPlaceholder from "../../Assets/images/avatar-placeholder-2.svg";
import { IconRosetteDiscountCheckFilled } from "@tabler/icons-react";

const ServiceOwnerCard = ({ service }) => {
  const { t } = useTranslation();
  const [showTooltip, setShowTooltip] = useState(false);
  const currentPageLink = window.location.href;
  const authedUser = useSelector((state) => state.authedUser.user);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props.content}
    </Tooltip>
  );

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(currentPageLink);
    setShowTooltip(true);
  };

  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  const socialShareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentPageLink}`,
    instagram: `https://www.instagram.com/?url=${currentPageLink}`,
    twitter: `https://twitter.com/intent/tweet?url=${currentPageLink}`,
    snapchat: `https://www.snapchat.com/share?url=${currentPageLink}`,
    whatsapp: `https://wa.me/?text=${currentPageLink}`
  };

  return (
    <div className="service-owner-card">
      <div className="d-flex justify-content-between ps-1 pe-1 h-100">
        <Link
          to={
            authedUser?.id === service?.user?.id
              ? "/profile"
              : `/profile/${service?.user?.id}`
          }
          className="owner"
        >
          <div className="img">
            <img src={service?.user?.image || avatarPlaceholder} alt="owner" />
            {service?.user?.verified === 1 && (
              <span className="status">
                <IconRosetteDiscountCheckFilled />
              </span>
            )}
          </div>
          <div className="title">
            <h6>{service?.user?.name || "خالد عوض"}</h6>
            {service?.is_favorite && (
              <span>
                <i className="ti ti-md ti-briefcase"></i>{" "}
                {t("services.specialSeller")}
              </span>
            )}
          </div>
        </Link>
        <div className="btns">
          <Link to="/chat" className="butn">
            <i className="fa-regular fa-message-lines"></i>
          </Link>
          <Dropdown>
            <Dropdown.Toggle className="butn" id="dropdown-basic">
              <i className="fa-regular fa-share-nodes"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <h5>{t("services.share")}</h5>
              <ul className="social">
                <li>
                  <a
                    href={socialShareLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  {t("services.facebook")}
                </li>
                <li>
                  <a
                    href={socialShareLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  {t("services.instagram")}
                </li>
                <li>
                  <a
                    href={socialShareLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  {t("services.twitter")}
                </li>
                <li>
                  <a
                    href={socialShareLinks.snapchat}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-snapchat"></i>
                  </a>
                  {t("services.snapchat")}
                </li>
                <li>
                  <a
                    href={socialShareLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                  {t("services.whatsapp")}
                </li>
              </ul>
              <p className="text-center">{t("services.orCopyLink")}</p>
              <div className="link">
                <button onClick={handleCopy}>
                  <i className="fa-sharp fa-regular fa-copy"></i>
                </button>
                <span onClick={handleCopy} id="url">
                  <OverlayTrigger
                    placement="bottom"
                    show={showTooltip}
                    overlay={renderTooltip({
                      content: t("services.linkCopied")
                    })}
                  >
                    <span>{currentPageLink}</span>
                  </OverlayTrigger>
                </span>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default ServiceOwnerCard;
