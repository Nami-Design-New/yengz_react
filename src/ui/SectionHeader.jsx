import React from "react";
import about7 from "../Assets/images/about7.webp";
import { Link } from "react-router-dom";

const SectionHeader = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="text-wrap" data-aos="fade-up">
            <Link to="/">الرئيسية </Link>
            <h1 className="m-0">كيف يعمل موقع ينجز</h1>
          </div>
        </div>
        <div className="col-6 hide-sm">
          <div className="img" data-aos="zoom-in">
            <img src={about7} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
