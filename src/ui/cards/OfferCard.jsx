import { Link } from "react-router-dom";
import { formatTimeDifference, getTimeDifference } from "../../utils/helpers";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { IconDotsVertical, IconPencil, IconTrash } from "@tabler/icons-react";
import { useState } from "react";
import StarsList from "./../StarsList";
import EditProjectOfferModal from "../modals/EditProjectOfferModal";

function OfferCard({ request, isMyProject }) {
  const { t } = useTranslation();
  const [showEditModal, setShowEditModal] = useState(false);
  const { user } = useSelector((state) => state.authedUser);
  const timeDifference = getTimeDifference(request?.created_at);
  const formattedTime = formatTimeDifference(
    timeDifference.years,
    timeDifference.months,
    timeDifference.days,
    timeDifference.hours,
    timeDifference.minutes,
    t
  );

  function truncate(inputString) {
    let truncateStringResult;
    if (inputString.length > 60) {
      truncateStringResult = inputString.substring(0, 150) + "...";
    } else {
      truncateStringResult = inputString;
    }
    return truncateStringResult;
  }

  return (
    <div className="comment">
      <div className="d-flex justify-content-between">
        <div className="userCommented">
          <Link to={`/profile/${request?.user?.id}`}>
            <img
              className="userImg"
              src={request?.user?.image}
              alt="صورة المستخدم"
            />
          </Link>
          <div className="lastUser">
            <Link to={`/profile/${request?.user?.id}`} className="name">
              {request?.user?.name} <StarsList rate={request?.user?.rate} />
            </Link>
            <p className="time">
              <i className="fa-regular fa-timer"></i> {formattedTime}
            </p>
          </div>
        </div>
        {isMyProject ||
          (user?.id === request?.user?.id && (
            <div className="d-flex gap-3">
              {isMyProject && (
                <button className="butn">
                  <i className="fa-regular fa-message-lines"></i>
                </button>
              )}
              <div className="dropdown setting">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <IconDotsVertical stroke={2} />
                </button>
                <ul className="dropdown-menu">
                  {user?.id === request?.user?.id && (
                    <>
                      {isMyProject ? (
                        <>
                          <li>
                            <button className="dropdown-item">
                              <IconPencil stroke={2} />{" "}
                              {t("projects.acceptOffer")}
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item">
                              <IconTrash stroke={2} />{" "}
                              {t("projects.refuseOffer")}
                            </button>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <button
                              className="dropdown-item"
                              onClick={() => setShowEditModal(true)}
                            >
                              <IconPencil stroke={2} />{" "}
                              {t("projects.editOffer")}
                            </button>
                          </li>
                        </>
                      )}
                    </>
                  )}
                </ul>
              </div>
            </div>
          ))}
      </div>
      {isMyProject ||
        (user?.id === request?.user?.id && (
          <div className="about_offer">
            <div className="block">
              <h6>{t("projects.price")}:</h6>
              <p>${request?.price}</p>
            </div>
            <div className="block">
              <h6>{t("projects.deliveryTime")}:</h6>
              <p>
                {request?.days} {t("projects.days")}
              </p>
            </div>
          </div>
        ))}

      <p className="text">
        {isMyProject || user?.id === request?.user?.id
          ? request?.description
          : truncate(request?.description)}
      </p>

      <EditProjectOfferModal
        request={request}
        showModal={showEditModal}
        setShowModal={setShowEditModal}
      />
    </div>
  );
}

export default OfferCard;
