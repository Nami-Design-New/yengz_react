import React, { useEffect, useState } from "react";
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
import useGetSkills from "../features/settings/useGetSkills";
import { handleApplyFilters } from "../utils/helpers";
import EmptyData from "../ui/EmptyData";
import CustomPagination from "../ui/CustomPagination";

const BestFreeLancers = () => {
  const { t } = useTranslation();
  const {
    isLoading: isFreelancingLoading,
    data: freelancers,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useGetBestFreelancers();
  const { data: skills } = useGetSkills();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchFilterData, setSearchFilterData] = useState({
    search: searchParams.get("search") || "",
    page: Number(searchParams.get("page")) || null,
    rate: Number(searchParams.get("rate")) || null,
    verified: Number(searchParams.get("verified")) || null,
    job_title: Number(searchParams.get("job_title")) || "",
    last_login: Number(searchParams.get("last_login")) || null,
    add_request_in_my_projects:
      Number(searchParams.get("add_request_in_my_projects")) || null,
    skills: searchParams.get("skills")
      ? searchParams
          .get("skills")
          .split("-")
          .map((skill) => skill)
      : [],
    categories: searchParams.get("categories")
      ? searchParams
          .get("categories")
          .split("-")
          .map((category) => Number(category))
      : [],
  });
  const { isLoading, data: categoriesWithSubCategories } =
    useCategorieListWithSub();

  const skillsOptions = skills?.map((skill) => ({
    value: skill?.id,
    label: skill?.name,
  }));

  function truncate(inputString) {
    let truncateStringResult;
    if (inputString?.length > 280) {
      truncateStringResult = inputString.substring(0, 280) + "...";
    } else {
      truncateStringResult = inputString;
    }
    return truncateStringResult;
  }

  useEffect(() => {
    const options = searchFilterData?.skills?.map((id) => {
      const skill = skills?.find((s) => s?.id === Number(id));
      return { value: id, label: skill?.name };
    });

    setSelectedOptions(options);
  }, [searchFilterData, skills]);

  const handleChange = (e) => {
    const { name, checked, type, value } = e.target;
    const parsedValue = type === "checkbox" ? (checked ? 1 : 0) : value;
    if (name !== "categories" && name !== "sub_categories") {
      setSearchFilterData((prevState) => ({
        ...prevState,
        [name]: parsedValue,
      }));
      return;
    }
    const categoryValue = Number(value);
    setSearchFilterData((prevState) => {
      const updatedState = { ...prevState };
      const updateList = (list, value, add) => {
        return add ? [...list, value] : list.filter((id) => id !== value);
      };
      if (name === "categories") {
        updatedState[name] = updateList(
          prevState[name],
          categoryValue,
          checked
        );
      }
      return updatedState;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 1000
      ) {
        if (!isFetchingNextPage && hasNextPage) {
          fetchNextPage();
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFetchingNextPage, hasNextPage, fetchNextPage]);

  const handleSelect = (selectedItems) => {
    setSelectedOptions(selectedItems);
    const selectedValues = selectedItems
      ? selectedItems?.map((option) => option.value)
      : [];
    setSearchFilterData({
      ...searchFilterData,
      skills: selectedValues,
    });
  };

  function handleClearFilters() {
    setSearchParams({});
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleApplyFilters(setSearchParams, searchFilterData);
  }
  const handleRatingChange = (value) => {
    setSearchFilterData({ ...searchFilterData, rate: value });
  };

  if ((isLoading || isFetching) && freelancers?.length < 12) {
    return <DataLoader />;
  }

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
                  <form className="form" onAbort={handleSubmit}>
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
                      options={skillsOptions}
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
                            id="verified"
                            name="verified"
                            checked={searchFilterData.verified === 1}
                            onChange={handleChange}
                          />
                          <label htmlFor="verified">
                            {t("search.verificated")}
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="last_login"
                            name="last_login"
                            checked={searchFilterData.last_login === 1}
                            onChange={handleChange}
                          />
                          <label htmlFor="last_login">
                            {t("search.onlineNow")}
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="add_request_in_my_projects"
                            name="add_request_in_my_projects"
                            checked={
                              searchFilterData.add_request_in_my_projects === 1
                            }
                            onChange={handleChange}
                          />
                          <label htmlFor="add_request_in_my_projects">
                            {t("search.addedOffers")}
                          </label>
                        </li>
                      </ul>
                    </ul>
                    <div className="d-flex gap-2 w-100">
                      <div className="search-btn">
                        <button
                          onClick={handleSubmit}
                          style={{ height: "44px" }}
                        >
                          {t("search.apply")}
                        </button>
                      </div>
                      <div className="search-btn">
                        <span onClick={handleClearFilters}>
                          {t("search.clear")}
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </aside>
              <div className="col-lg-9 col-12 p-2">
                <div className="row">
                  <>
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
                    {freelancers && freelancers?.total > 10 && (
                      <CustomPagination
                        count={freelancers?.total}
                        pageSize={10}
                      />
                    )}
                  </>
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
