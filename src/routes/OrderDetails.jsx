import React from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import rateowner1 from "../Assets/images/rateowner1.webp";
import bann from "../Assets/images/bann.webp";
import useGetOrder from "../features/orders/useGetOrder";
import DataLoader from "../ui/DataLoader";
import { useSelector } from "react-redux";
import {
  ORDER_STATUS_AR,
  ORDER_STATUS_EN,
  ORDER_STATUS_PERSENTAGE
} from "../utils/constants";
import { formatTimeDifference, getTimeDifference } from "../utils/helpers";
import { calculateExpectedEndDate } from './../utils/helpers';

function OrderDetails() {
  const { id } = useParams();
  const { t } = useTranslation();
  const lang = useSelector((state) => state.language.lang);
  const { data: order, isLoading } = useGetOrder(id);

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

  return isLoading ? (
    <DataLoader />
  ) : (
    <section className="cart-section container">
      <div className="row">
        <div className="col-12">
          <div className="service container">
            <div className="row justify-content-center">
              <div className="col-lg-9 col-12 mb-5">
                <div className="service-head">
                  <Link to="/services" className="img">
                    <img src={order?.service?.image || bann} alt="service" />
                  </Link>
                  <div className="title">
                    <h5>{order?.service?.title}</h5>
                    <div className="owner">
                      <div className="owner-avatar">
                        <img
                          src={order?.user?.image || rateowner1}
                          alt="owner"
                        />
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
                          className={`progress-bar ${
                            order?.status === "canceled" ? "" : "sucses"
                          }`}
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
                    <Link to="/chat" className="chat">
                      <i className="fa-light fa-message-lines"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 order-buttons">
                <button className="report-order">
                  <i className="fa-light fa-circle-info"></i>{" "}
                  {t("recievedOrders.reportProblem")}
                </button>
                <button className="cancle-order">
                  <i className="fa-sharp fa-light fa-circle-xmark"></i>{" "}
                  {t("recievedOrders.cancleOrder")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderDetails;
