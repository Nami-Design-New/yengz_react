import React, { useState } from "react";
import { IconRosetteDiscountCheckFilled } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";
import SectionHeader from "../ui/SectionHeader";
import StarsList from "../ui/StarsList";
import DataLoader from "../ui/DataLoader";
import InputField from "./../ui/form-elements/InputField";
import MultiSelect from "../ui/form-elements/MultiSelect";
import useGetBestFreelancers from "../features/home/useGetBestFreelancers";
import useCategorieListWithSub from "../features/categories/useCategorieListWithSub";
import DepartmentFilterBox from "../ui/filter/DepartmentFilterBox";

const BestFreeLancers = () => {
  const { t } = useTranslation();
  const { data: freelancers, isLoading } = useGetBestFreelancers();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading: categoriesIsLoading, data: categoriesWithSubCategories } =
    useCategorieListWithSub();

  const options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
  ];

  function truncate(inputString) {
    let truncateStringResult;
    if (inputString?.length > 280) {
      truncateStringResult = inputString.substring(0, 280) + "...";
    } else {
      truncateStringResult = inputString;
    }
    return truncateStringResult;
  }

  const [searchFilterData, setSearchFilterData] = useState({
    skills: [],
    page: Number(searchParams.get("page")) || null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchFilterData({ ...searchFilterData, [name]: value });
  };

  const handleRatingChange = (value) => {
    setSearchFilterData({ ...searchFilterData, rate: value });
  };

  const handleSelect = (selectedItems) => {
    setSelectedOptions(selectedItems);
    console.log(selectedItems);
    
    const selectedValues = selectedItems
    ? selectedItems?.map((option) => option.value)
    : [];
    console.log(selectedValues);
    setSearchFilterData({
      ...searchFilterData,
      skills: selectedValues,
    });
  };

  return (
    <>
      <SectionHeader />
      {isLoading ? (
        <DataLoader />
      ) : (
        <section className="best-freelancers search-section">
          <div className="container">
            <div className="row">
              <aside
                className={`col-lg-3 p-2 pt-3 side-menu ${
                  isFilterOpen ? "active" : ""
                }`}
              >
                <div className="filter-wrap">
                  <div className="colse" onClick={() => setIsFilterOpen(false)}>
                    <i className="fa-light fa-xmark"></i>
                  </div>
                  <form className="form">
                    <InputField
                      id="search"
                      name="search"
                      value={searchFilterData.search}
                      onChange={handleChange}
                      label={t("search.search")}
                      placeholder={t("search.searchFor")}
                    />
                    <DepartmentFilterBox
                      categoriesValue={searchFilterData.categories}
                      sub_categoriesValue={searchFilterData.sub_categories}
                      onChange={handleChange}
                      categoriesWithSubCategories={categoriesWithSubCategories}
                    />
                    <InputField
                      id="job_title"
                      name="job_title"
                      value={searchFilterData.job_title}
                      onChange={handleChange}
                      label={t("search.jobTitle")}
                      placeholder={t("search.jobTitle")}
                    />
                    <MultiSelect
                      label={t("search.skills")}
                      id="skills"
                      name="skills"
                      options={options}
                      selectedOptions={selectedOptions}
                      handleChange={handleSelect}
                    />
                    <div className="input-field">
                      <label htmlFor="rate">{t("search.rating")}</label>
                      <div className="stars">
                        <div className="star-rating-service">
                          {[5, 4, 3, 2, 1].map((star) => (
                            <React.Fragment key={star}>
                              <input
                                type="radio"
                                id={`star${star}`}
                                name="rating"
                                value={star}
                                checked={searchFilterData.rate === star}
                                onChange={() => handleRatingChange(star)}
                              />
                              <label
                                htmlFor={`star${star}`}
                                title={`${star} stars`}
                                className={
                                  searchFilterData.rate >= star ? "active" : ""
                                }
                              >
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </label>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                    <ul className="seller-level w-100">
                      <h6>{t("search.sellerStatus")}</h6>
                      <ul>
                        <li>
                          <input
                            type="checkbox"
                            id="user_verification"
                            name="user_verification"
                          />
                          <label htmlFor="user_verification">
                            {t("search.verificated")}
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="online_now"
                            name="online_now"
                          />
                          <label htmlFor="user_available">
                            {t("search.onlineNow")}
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="added_offers"
                            name="added_offers"
                          />
                          <label htmlFor="added_offers">
                            {t("search.addedOffers")}
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="hired_them_before"
                            name="hired_them_before"
                          />
                          <label htmlFor="hired_them_before">
                            {t("search.hiredThemBefore")}
                          </label>
                        </li>
                      </ul>
                    </ul>
                    <div className="d-flex gap-2 w-100">
                      <div className="search-btn">
                        <button style={{ height: "44px" }}>
                          {t("search.apply")}
                        </button>
                      </div>
                      <div className="search-btn">
                        <span>{t("search.clear")}</span>
                      </div>
                    </div>
                  </form>
                </div>
              </aside>
              <div className="col-lg-9 col-12 p-2">
                <div className="row">
                  {freelancers?.data?.map((freelancer) => (
                    <div className="col-12 p-2" key={freelancer?.id}>
                      <Link
                        to={`/profile/${freelancer?.id}`}
                        className="freelancerCard"
                      >
                        <div className="d-flex justify-content-between">
                          <div className="info">
                            <div className="img">
                              <img
                                src={freelancer?.image}
                                alt={freelancer?.name}
                              />
                              {freelancer?.verified === 1 && (
                                <span className="status">
                                  <IconRosetteDiscountCheckFilled />
                                </span>
                              )}
                            </div>
                            <div className="content">
                              <h6>{freelancer?.name}</h6>
                              <ul>
                                <li>
                                  <i className="fa-regular fa-cubes"></i>{" "}
                                  {t("servicesCount")}:{" "}
                                  {freelancer?.service_count}
                                </li>
                              </ul>
                            </div>
                          </div>
                          <StarsList rate={freelancer?.rate} />
                        </div>
                        <p>{truncate(freelancer?.about)}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BestFreeLancers;
