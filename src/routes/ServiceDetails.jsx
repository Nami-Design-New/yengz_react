import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import vector88 from "../Assets/images/vector88.png";
import useServiceDetails from "../features/services/useServiceDetails";
import ServiceSlider from "../ui/ServiceSlider";
import ServiceOwnerCard from "../ui/cards/ServiceOwnerCard";
import UserServiceCard from "./../ui/cards/UserServiceCard";
import RateCard from "../ui/cards/RateCard";
import useGetRates from "../features/services/useGetRates";

const ServiceDetails = () => {
  const { t } = useTranslation();
  const { data: service } = useServiceDetails();
  const { data: rates } = useGetRates();

  return (
    <section className="service-details container">
      <div className="row">
        <div className="col-lg-7 col-12 p-2">
          <div className="service-content">
            <ServiceSlider images={service?.images} />
            <div className="content">
              <ServiceOwnerCard service={service} />
              <h4>{service?.title}</h4>
              <p>
                <Link to={`/search?categories=${service?.category?.id}`}>
                  {service?.category?.name}
                </Link>{" "}
                /{" "}
                <Link to={`/search?sub_categories=${service?.sub_category_id}`}>
                  {service?.sub_category?.name}
                </Link>
              </p>
              <p>{service?.description}</p>
              {service?.developments && service?.developments.length > 0 && (
                <div className="more-develop">
                  <h6>
                    <img src={vector88} alt="icon" />{" "}
                    {t("services.developmentsAvailable")}
                  </h6>
                  {service?.developments.map((development) => (
                    <div
                      className="d-flex input-field align-items-baseline"
                      key={development?.id}
                    >
                      <input
                        type="checkbox"
                        id="check-1"
                        checked={development.in_cart}
                      />
                      <div className="label">
                        <label htmlFor="check-1">
                          {development.description}
                        </label>
                        <p>
                          {t("services.compare")} {development.price}${" "}
                          {t("services.percentageofExtraService")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {/* add to cart */}
              <div className="add-cart">
                <div className="input-field">
                  <button className="add">
                    <i className="fa-regular fa-plus"></i>
                  </button>
                  <input type="number" />
                  <button className="minus">
                    <i className="fa-regular fa-minus"></i>
                  </button>
                </div>
                <div className="total d-flex justify-content-between align-items-center">
                  <p>
                    {t("services.total")} : <br />
                    <span>
                      + <span id="num">1</span> {t("services.extraService")}
                    </span>
                  </p>
                  <h6>
                    40.00<i className="fa-solid fa-dollar-sign"></i>
                  </h6>
                </div>
                <button className="request-order">
                  <i className="fa-regular fa-cart-plus"></i>{" "}
                  {t("services.addToCart")}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-12 p-2">
          <UserServiceCard service={service} />
          <div className="rating-cards-container">
            {rates?.data?.map((rate) => (
              <RateCard key={rate?.id} rate={rate} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
