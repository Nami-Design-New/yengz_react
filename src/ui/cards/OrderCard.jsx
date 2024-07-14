import { useTranslation } from "react-i18next";
import { formatTimeDifference, getTimeDifference } from "../../utils/helpers";
import { Link } from "react-router-dom";
import rateowner1 from "../../Assets/images/rateowner1.webp";

function OrderCard({ order }) {
  const { t } = useTranslation();
  const timeDifference = getTimeDifference(order.created_at);
  const formattedTime = formatTimeDifference(
    timeDifference.years,
    timeDifference.months,
    timeDifference.days,
    timeDifference.hours,
    timeDifference.minutes,
    t
  );

  return (
    <div className="service container">
      <div className="row">
        <div className="col-lg-7 col-12">
          <div className="service-head h-100">
            <Link to={`/services/${order.id}`} className="request-owner-img">
              <img src={order?.user?.image} alt="service" />
            </Link>
            <div className="title requester-title">
              <Link to={`/profile/${order?.user?.id}`} className="owner">
                <span>{order?.user?.name}</span>
              </Link>
              <h5>{order?.service?.title}</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-12">
          <div className="progress-card">
            <div className="progress-details">
              <div className="pro-container">
                <p className="status">{order?.status}</p>
                <div className="progress">
                  <div
                    className="progress-bar sucses"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link to="/recieved-request-orders" className="details">
                التفاصيل
              </Link>
            </div>
            <div className="time-price">
              <span className="d-flex align-items-center gap-2">
                <i className="fa-sharp fa-light fa-clock"></i> {formattedTime}
              </span>
              <h5>
                {order?.price} <i className="fa-regular fa-dollar-sign"></i>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
