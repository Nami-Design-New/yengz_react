import { Link, useNavigate } from "react-router-dom";
import { formatTimeDifference, getTimeDifference } from "../../utils/helpers";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { requestChatRoom } from "../../redux/slices/requctRoom";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { updateRequestStatus } from "../../services/apiProjects";
import StarsList from "./../StarsList";
import EditProjectOfferModal from "../modals/EditProjectOfferModal";
import OrderModal from "../modals/OrderModal";
import ChargeModal from "../modals/ChargeModal";

function OfferCard({ request, isMyProject, project }) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showConfirmPayModel, setShowConfirmPayModel] = useState(false);
  const { user } = useSelector((state) => state.authedUser);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const timeDifference = getTimeDifference(request?.created_at);
  const formattedTime = formatTimeDifference(
    timeDifference.years,
    timeDifference.months,
    timeDifference.days,
    timeDifference.hours,
    timeDifference.minutes,
    t
  );
  const [btn1Loading, setBtn1Loading] = useState(false);
  const [showChargeModal, setShowChargeModal] = useState(false);

  function truncate(inputString) {
    let truncateStringResult;
    if (inputString.length > 60) {
      truncateStringResult = inputString.substring(0, 150) + "...";
    } else {
      truncateStringResult = inputString;
    }
    return truncateStringResult;
  }

  const handleCreateRoom = () => {
    dispatch(
      requestChatRoom({
        request_type: "project",
        request_id: request?.project_id,
        owner_id: user?.id,
        applied_id: request?.user?.id
      })
    );
    navigate(`/chat`);
  };

  const handleRefuseOffer = async () => {
    try {
      await updateRequestStatus(request?.id, "refused", queryClient);
      toast.success(t("projects.requestRefused"));
    } catch (error) {
      console.log(error?.message);
    }
  };

  const handleRequestRoom = () => {
    dispatch(
      requestChatRoom({
        request_type: "service",
        request_id: order?.service?.id,
        owner_id: userType === "seller" ? order?.user?.id : user?.id,
        applied_id: userType === "seller" ? user?.id : order?.user?.id
      })
    );
  };

  const handleAcceptOffer = async () => {
    try {
      setLoading(true);
      await updateRequestStatus(request?.id, "accepted", queryClient);
      toast.success(t("projects.requestAccepted"));
      setShowConfirmPayModel(false);
    } catch (error) {
      console.log(error?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleupdateProject = async (status) => {
    try {
      status === "canceled" ? setBtn1Loading(true) : setLoading(true);
      await updateProject(project?.id, status, quryClient);
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
      setBtn1Loading(false);
    }
  };

  return (
    <div className="comment offer-card">
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
        {(isMyProject || user?.id === request?.user?.id) && (
          <div
            className="d-flex gap-3 align-items-center"
            style={{ height: "fit-content" }}
          >
            {isMyProject && (
              <button className="butn" onClick={handleCreateRoom}>
                <i className="fa-regular fa-message-lines"></i>
              </button>
            )}
            {request?.status === "in_progress" && (
              <div className="setting">
                {user?.id === request?.user?.id ? (
                  <button
                    className="refuse_btn"
                    onClick={() => setShowEditModal(true)}
                  >
                    <IconPencil stroke={2} /> {t("projects.editOffer")}
                  </button>
                ) : (
                  <>
                    <button
                      className="edit_btn"
                      onClick={() =>
                        user?.wallet < request?.price
                          ? setShowChargeModal(true)
                          : setShowConfirmPayModel(true)
                      }
                    >
                      <IconCheck stroke={1.25} /> {t("projects.acceptOffer")}
                    </button>
                    <button className="refuse_btn" onClick={handleRefuseOffer}>
                      <IconX stroke={1.25} /> {t("projects.refuseOffer")}
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      {(isMyProject || user?.id === request?.user?.id) && (
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
      )}

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

      <OrderModal
        setShowModal={setShowConfirmPayModel}
        loading={loading}
        showModal={showConfirmPayModel}
        ballance={user?.wallet}
        cartTotalPrice={request?.price}
        eventFunction={handleAcceptOffer}
      />
      <ChargeModal
        showModal={showChargeModal}
        setShowModal={setShowChargeModal}
        cartTotalPrice={request?.price}
      />
    </div>
  );
}

export default OfferCard;
