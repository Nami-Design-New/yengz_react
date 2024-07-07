import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../ui/SectionHeader";
import OrderBox from "../ui/OrderBox";
import useServiceOrdersList from "../features/orders/useServiceOrdersList";

const ServiceOrders = () => {
  const { data } = useServiceOrdersList();

  console.log(data);

  return (
    <>
      <div className="section-head">
        <SectionHeader />
      </div>

      <section className="allRequests">
        <div className="container align-items-end">
          <Link to="/request-add" className="btn btn-success mb-4">
            <i className="fa-regular fa-hexagon-plus me-2"></i>
            اضف موضوع جديد
          </Link>
          <div className="allRequestsContainer">
            <OrderBox />
          </div>

          <button className="btn btn-outline-dark m-auto mt-5">
            عرض المواضيع الاقدم
            <i className="fa-regular fa-chevrons-down ms-2"></i>
          </button>
        </div>
      </section>
    </>
  );
};

export default ServiceOrders;
