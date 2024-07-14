import React, { useState } from "react";
import StatusFilter from "../ui/StatusFilter";
import OrderCard from "../ui/cards/OrderCard";
import useServiceOrdersList from "../features/orders/useServiceOrdersList";
import { useTranslation } from "react-i18next";
import EmptyData from "../ui/EmptyData";

const RecievedRequest = () => {
  const { t } = useTranslation();
  const { data: serviceOrders } = useServiceOrdersList();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  console.log(serviceOrders);

  function handleTogglingFilter() {
    setIsFilterOpen((open) => !open);
  }

  return (
    <main>
      <section className="cart-section container search-section">
        <div className="row">
          <div className={`col-lg-2`}>
            <StatusFilter
              isFilterOpen={isFilterOpen}
              setIsFilterOpen={setIsFilterOpen}
            />
          </div>
          <div className="small-filter-header">
            <h6>{t("recievedRequest.title")}</h6>
            <button className="openfilter" onClick={handleTogglingFilter}>
              <i className="fa-light fa-sliders"></i>
            </button>
          </div>
          <div className="col-lg-9 co-12">
            {serviceOrders && serviceOrders?.length > 0 ? (
              serviceOrders?.map((order) => (
                <OrderCard order={order} key={order.id} />
              ))
            ) : (
              <EmptyData>{t("recievedOrders.emptyOrders")}</EmptyData>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecievedRequest;
