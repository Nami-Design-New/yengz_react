import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import avatar from "../Assets/images/avatar.jpg";
import bann from "../Assets/images/bann.webp";
import useGetOrder from "../features/orders/useGetOrder";
import DataLoader from "../ui/DataLoader";
import { useDispatch, useSelector } from "react-redux";
import {
  ORDER_STATUS_AR,
  ORDER_STATUS_EN,
  ORDER_STATUS_PERSENTAGE
} from "../utils/constants";
import { formatTimeDifference, getTimeDifference } from "../utils/helpers";
import { calculateExpectedEndDate } from "./../utils/helpers";
import { updateOrder } from "../services/apiOrders";
import { useQueryClient } from "@tanstack/react-query";
import SubmitButton from "./../ui/form-elements/SubmitButton";
import AddRateModal from "../ui/modals/AddRateModal";
import { requestChatRoom } from "../redux/slices/requctRoom";
import ErrorPage from "./ErrorPage";

function OrderDetails() {
  const { id } = useParams();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data: order, isLoading } = useGetOrder(id);
  console.log(order);

  const [userType, setUserType] = useState(null);
  const [btn1Loading, setBtn1Loading] = useState(false);
  const [showRateModal, setShowRateModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const quryClient = useQueryClient();
  const user = useSelector((state) => state.authedUser.user);
  const lang = useSelector((state) => state.language.lang);

  const timeDifference = getTimeDifference(order?.created_at);
  const startTime = formatTimeDifference(
    timeDifference.years,
    timeDifference.months,
    timeDifference.days,
    timeDifference.hours,
    timeDifference.minutes,
    t
  );

  let expectedEndDate = calculateExpectedEndDate(
    order?.created_at,
    order?.days
  );

  useEffect(() => {
    if (user?.id && order?.user?.id) {
      if (user?.id === order?.user?.id) {
        setUserType("seller");
      } else {
        setUserType("buyer");
      }
    }
  }, [user?.id, order?.user?.id]);

  const handleupdateOrder = async (status) => {
    try {
      status === "canceled" ? setBtn1Loading(true) : setLoading(true);
      await updateOrder(order?.id, status, quryClient);
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
      setBtn1Loading(false);
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

  if (isLoading) {
    return <DataLoader />;
  }

  if (!order) {
    return <ErrorPage />;
  }

  return (
    <section className="cart-section container">
      <div className="row">
        <div className="col-12">
          <div className="service container">
            <div className="row justify-content-center">
              <div className="col-lg-9 col-12 mb-5">
                <div className="service-head">
                  <Link to={`/services/${order?.service?.id}`} className="img">
                    <img src={order?.service?.image || bann} alt="service" />
                  </Link>
                  <div className="title">
                    <h5>{order?.service?.title}</h5>
                    <div className="owner">
                      <div className="owner-avatar">
                        <img src={order?.user?.image || avatar} alt="owner" />
                      </div>
                      <span>{order?.user?.name}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-12">
                <div className="products-card">
                  <ul className="order">
                    <li>
                      <p>{t("recievedOrders.orderNumber")}</p>
                      <div className="price-count">
                        <span className="order-number">#{order?.id}</span>
                      </div>
                    </li>
                    <li>
                      <p>{t("recievedOrders.orderValue")}</p>
                      <div className="price-count">
                        <span className="price">
                          {order?.price}{" "}
                          <i className="fa-regular fa-dollar-sign"></i>
                        </span>
                      </div>
                    </li>
                    <li>
                      <p>{t("recievedOrders.orderDate")}</p>
                      <div className="price-count">
                        <span>{startTime}</span>
                      </div>
                    </li>
                    <li>
                      <p>{t("recievedOrders.expectedDeliveryDate")}</p>
                      <div className="price-count">
                        <span>{expectedEndDate}</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="progress-card order-d">
                  <div className="progress-details">
                    <div className="pro-container">
                      <p className="status">
                        {lang === "ar"
                          ? ORDER_STATUS_AR[order?.status]
                          : ORDER_STATUS_EN[order?.status]}
                      </p>
                      <div className="progress">
                        <div
                          className={`progress-bar ${order?.status}`}
                          role="progressbar"
                          style={{
                            width: `${ORDER_STATUS_PERSENTAGE[order?.status]}%`
                          }}
                          aria-valuenow={ORDER_STATUS_PERSENTAGE[order?.status]}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <Link
                      to="/chat"
                      className="chat"
                      onClick={handleRequestRoom}
                    >
                      <i className="fa-light fa-message-lines"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 order-buttons">
                {/* buyer */}
                {userType === "buyer" && order?.status === "new" && (
                  <SubmitButton
                    loading={loading}
                    className="report-order"
                    name={t("recievedOrders.acceptOrder")}
                    icon={<i className="fa-light fa-circle-check"></i>}
                    onClick={() => handleupdateOrder("in_progress")}
                  />
                )}
                {userType === "buyer" && order?.status === "in_progress" && (
                  <SubmitButton
                    loading={loading}
                    className="report-order"
                    name={t("recievedOrders.readyForDelevier")}
                    icon={<i className="fa-light fa-circle-check"></i>}
                    onClick={() => handleupdateOrder("ready")}
                  />
                )}
                {userType === "buyer" &&
                  order?.status !== "canceled" &&
                  order?.status !== "received" && (
                    <SubmitButton
                      className="cancle-order"
                      loading={btn1Loading}
                      onClick={() => handleupdateOrder("canceled")}
                      name={t("recievedOrders.cancleOrder")}
                      icon={
                        <i className="fa-sharp fa-light fa-circle-xmark"></i>
                      }
                    />
                  )}
                {/* seller */}
                {userType === "seller" && order?.status === "ready" && (
                  <SubmitButton
                    loading={loading}
                    className="report-order"
                    name={t("recievedOrders.recieve")}
                    icon={<i className="fa-light fa-circle-check"></i>}
                    onClick={() => handleupdateOrder("received")}
                  />
                )}
                {userType === "seller" && order?.status === "new" && (
                  <SubmitButton
                    className="cancle-order"
                    loading={btn1Loading}
                    onClick={() => handleupdateOrder("canceled")}
                    name={t("recievedOrders.cancleOrder")}
                    icon={<i className="fa-sharp fa-light fa-circle-xmark"></i>}
                  />
                )}
                {userType === "seller" &&
                  !order?.service?.is_rated &&
                  order?.status === "received" && (
                    <SubmitButton
                      className="report-order"
                      name={t("recievedOrders.RateService")}
                      onClick={() => setShowRateModal(true)}
                    />
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddRateModal
        order={order}
        showModal={showRateModal}
        setShowModal={setShowRateModal}
      />
    </section>
  );
}

export default OrderDetails;
