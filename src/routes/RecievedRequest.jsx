import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import StatusFilter from "../ui/StatusFilter";
import InputField from "../ui/form-elements/InputField";
import DepartmentFilterBox from "../ui/filter/DepartmentFilterBox";
import RatingFilterBox from "../ui/filter/RatingFilterBox";
import SellerStatusFilterBox from "../ui/filter/SellerStatusFilterBox";
import OrderCard from "../ui/cards/OrderCard";
import useServiceOrdersList from "../features/orders/useServiceOrdersList";

const RecievedRequest = () => {
  const { t } = useTranslation();
  const { data: serviceOrders } = useServiceOrdersList();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleTogglingFilter() {
    setIsFilterOpen((open) => !open);
  }

  console.log(serviceOrders);

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
            <h6>قائمة المشتريات</h6>
            <button className="openfilter" onClick={handleTogglingFilter}>
              <i className="fa-light fa-sliders"></i>
            </button>
          </div>
          <div className="col-lg-9 co-12">
            {serviceOrders &&
              serviceOrders?.length > 0 &&
              serviceOrders?.map((order) => (
                <OrderCard order={order} key={order.id} />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecievedRequest;
