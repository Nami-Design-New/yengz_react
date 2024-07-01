import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../ui/SectionHeader";

function AddRequest() {
  return (
    <main className="main">
      <div className="section-head">
        <SectionHeader />
      </div>
      <section className="addRequest">
        <div className="container">
          <form action="/request_details">
            <div className="input-field mb-4">
              <label htmlFor="service-name">عنوان الموضوع</label>
              <input
                type="text"
                id="service-name"
                name="service-name"
                placeholder="اكتب هنا"
              />
            </div>
            <div className="input-field mb-4">
              <label htmlFor="info-for-customer">محتوى الموضوع</label>
              <textarea
                name="info-for-customer"
                id="info-for-customer"
                placeholder="اكتب هنا"
              ></textarea>
            </div>
            <div className="input-field  mb-2 flex-row gap-4 ps-3 ">
              <input
                type="checkbox"
                id="terms"
                name=""
                className="bg-transparent p-0 w-auto h-auto"
              />
              <label htmlFor="terms">
                راجعت محتوى الموضوع بدقة وهو لا يخالف{" "}
                <Link to="#!"> الشروط والاحكام </Link>
              </label>
            </div>
            <div className="input-field  mb-2 flex-row gap-4 ps-3 ">
              <input
                type="checkbox"
                id="searchInWeb"
                name=""
                className="bg-transparent p-0 w-auto h-auto"
              />
              <label htmlFor="searchInWeb">
                بحثت عن الخدمات المعروضة في الموقع قبل كتابة هذا الموضوع
              </label>
            </div>

            <div className="d-flex justify-content-center py-4">
              <Link to="/reaquest-details">
                <button type="submit" className="btn btn-success px-5">
                  {" "}
                  نشر{" "}
                </button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default AddRequest