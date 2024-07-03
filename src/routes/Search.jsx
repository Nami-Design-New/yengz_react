import React, { useEffect, useState } from "react";
import bann from "../Assets/images/bann.webp";
import { Link, useSearchParams } from "react-router-dom";
import DepartmentFilterBox from "../ui/filter/DepartmentFilterBox";
import RatingFilterBox from "../ui/filter/RatingFilterBox";
import SellerFilterBox from "../ui/filter/SellerFilterBox";
import SellerStatusFilterBox from "../ui/filter/SellerStatusFilterBox";
import InputField from "../ui/form-elements/InputField";
import useSearchServicesList from "../features/services/useSearchServicesList";
import ServiceCard from "../ui/cards/ServiceCard";

const Search = () => {
  const { data } = useSearchServicesList();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const searchFilterParams = {
    search: "",
    page: 1,
    rate: 0,
    user_verification: 1,
    user_available: 1,
    categories: [],
    sub_categories: [],
    is_old: 0,
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (!searchParams.get("page")) {
      searchParams.append("page", 1);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  return (
    <main>
      <section className="search-section">
        <div className="container">
          <div className="row">
            <aside
              className={`col-lg-3 side-menu ${isFilterOpen ? "active" : ""}`}
            >
              <div className="filter-wrap">
                <div className="colse" onClick={() => setIsFilterOpen(false)}>
                  <i className="fa-light fa-xmark"></i>
                </div>
                <form action="/search">
                  <InputField
                    id="aside-search-input"
                    name="search"
                    className="aside-search-input"
                    value={searchFilterParams.search}
                    onChange={handleChange}
                    label={"بحث"}
                  />

                  <DepartmentFilterBox />

                  <RatingFilterBox />

                  <SellerFilterBox />

                  <SellerStatusFilterBox />

                  <div className="search-btn">
                    <button>تأكيد</button>
                  </div>
                </form>
              </div>
            </aside>
            <div className="small-filter-header">
              <h6>نتائج البحث</h6>
              <button
                className="openfilter"
                onClick={() => setIsFilterOpen(true)}
              >
                <i className="fa-light fa-sliders"></i>
              </button>
            </div>
            <div className="col-lg-9 col-12 p-2 results-wrapper">
              <div className="container">
                <div className="row">
                  {data &&
                    data.data.map((service) => (
                      <div className="col-lg-4 col-6 p-2" key={service.id}>
                        <ServiceCard service={service} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Search;
