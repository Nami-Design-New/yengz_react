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
  const [searchValue, setSearchValue] = useState("");
  const { isLoading, data } = useSearchServicesList();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    if (!searchParams.get("page")) {
      setSearchParams((prevParams) => ({
        ...Object.fromEntries(prevParams),
        page: 1,
      }));
    }
  }, [searchParams, setSearchParams]);

  return (
    <main>
      <section className="search-section">
        <div className="container">
          <div className="row">
            <aside className="col-lg-3 side-menu">
              <div className="filter-wrap">
                <div className="colse">
                  <i className="fa-light fa-xmark"></i>
                </div>
                <form action="/search">
                  <InputField
                    id="aside-search-input"
                    name="search"
                    className="aside-search-input"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
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
              <button className="openfilter">
                <i className="fa-light fa-sliders"></i>
              </button>
            </div>
            <div className="col-lg-9 col-12 p-2 results-wrapper">
              <div className="container">
                <div className="row">
                  {data &&
                    data.data.map((service) => (
                      <ServiceCard key={service.id} service={service} />
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
