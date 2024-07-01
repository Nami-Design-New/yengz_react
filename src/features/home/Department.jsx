import React from "react";
import ServiceCard from "../../ui/cards/ServiceCard";
import { Link } from "react-router-dom";

const Department = ({ department }) => {
  return (
    <>
      <div className="row-head" data-aos="fade-up">
        <h6>
          <i className="fa-light fa-briefcase"></i> خدمات أعمال
        </h6>
        <Link to="/categories">
          عرض الكل <i className="fa-regular fa-angle-left"></i>
        </Link>
      </div>

      <div className="row mb-5">
        <div className="col-lg-3 col-6 mb-3">
          <ServiceCard />
        </div>
      </div>
    </>
  );
};

export default Department;
