import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import DepartmentFilterBox from "../ui/filter/DepartmentFilterBox";
import RatingFilterBox from "../ui/filter/RatingFilterBox";
import SellerFilterBox from "../ui/filter/SellerFilterBox";
import SellerStatusFilterBox from "../ui/filter/SellerStatusFilterBox";
import InputField from "../ui/form-elements/InputField";
import useSearchServicesList from "../features/services/useSearchServicesList";
import ServiceCard from "../ui/cards/ServiceCard";

const departmentFilter = [
  {
    id: 1,
    image: "https://ynjez.frmawy.tech/images/place_holder/default.png",
    deleted_at: null,
    created_at: null,
    updated_at: "2024-05-09T18:01:46.000000Z",
    name: "test",
    count: 18,
    sub_categories: [
      {
        id: 1,
        image: "https://ynjez.frmawy.tech/images/place_holder/default.png",
        category_id: 1,
        deleted_at: null,
        created_at: null,
        updated_at: null,
        name: "Name Ar",
        count: 18
      }
    ]
  },
  {
    id: 2,
    image: "https://ynjez.frmawy.tech/images/place_holder/default.png",
    deleted_at: null,
    created_at: null,
    updated_at: "2024-05-09T18:01:46.000000Z",
    name: "test 2",
    count: 18,
    sub_categories: [
      {
        id: 2,
        image: "https://ynjez.frmawy.tech/images/place_holder/default.png",
        category_id: 1,
        deleted_at: null,
        created_at: null,
        updated_at: null,
        name: "Name Ar 2",
        count: 18
      },
      {
        id: 5,
        image: "https://ynjez.frmawy.tech/images/place_holder/default.png",
        category_id: 1,
        deleted_at: null,
        created_at: null,
        updated_at: null,
        name: "Name Ar 3",
        count: 18
      }
    ]
  }
];

const Search = () => {
  const { data } = useSearchServicesList();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchFilterData, setSearchFilterData] = useState({
    search: searchParams.get("search") || "",
    page: Number(searchParams.get("page")) || 1,
    rate: Number(searchParams.get("rate")) || 1,
    user_verification: Number(searchParams.get("user_verification")) || 0,
    user_available: Number(searchParams.get("user_available")) || 0,
    categories: searchParams.get("categories")
      ? searchParams
          .get("categories")
          .split("-")
          .map((category) => Number(category))
      : [],
    sub_categories: searchParams.get("sub_categories")
      ? searchParams
          .get("sub_categories")
          .split("-")
          .map((subcategory) => Number(subcategory))
      : [],
    is_old: Number(searchParams.get("is_old")) || 0
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    const parsedValue = Number(value);

    if (name === "categories" || name === "sub_categories") {
      setSearchFilterData((prevState) => {
        const updatedState = {
          ...prevState,
          [name]: checked
            ? [...prevState[name], parsedValue]
            : prevState[name].filter((item) => item !== parsedValue)
        };

        if (name === "categories") {
          const relatedSubCategories =
            departmentFilter
              .find((category) => category.id === parsedValue)
              ?.sub_categories.map((sub_category) => sub_category.id) || [];

          if (checked) {
            updatedState["sub_categories"] = [
              ...new Set([
                ...prevState["sub_categories"],
                ...relatedSubCategories
              ])
            ];
          } else {
            updatedState["sub_categories"] = prevState["sub_categories"].filter(
              (subCategoryId) => !relatedSubCategories.includes(subCategoryId)
            );
          }
        } else if (name === "sub_categories") {
          const parentCategory = departmentFilter.find((category) =>
            category.sub_categories.some(
              (sub_category) => sub_category.id === parsedValue
            )
          );

          const allChildIds = parentCategory.sub_categories.map(
            (sub_category) => sub_category.id
          );

          const areAllChildrenChecked = allChildIds.every((id) =>
            updatedState["sub_categories"].includes(id)
          );

          if (areAllChildrenChecked) {
            updatedState["categories"] = [
              ...new Set([...prevState["categories"], parentCategory.id])
            ];
          } else {
            updatedState["categories"] = prevState["categories"].filter(
              (categoryId) => categoryId !== parentCategory.id
            );
          }
        }

        return updatedState;
      });
    } else {
      setSearchFilterData({
        ...searchFilterData,
        [name]: value
      });
    }
  };

  function handleApplyFilters() {
    if (searchFilterData.page) {
      searchParams.set("page", searchFilterData.page);
      setSearchParams(searchParams);
    }
    if (String(searchFilterData.search).trim()) {
      searchParams.set("search", searchFilterData.search);
      setSearchParams(searchParams);
    }
    if (
      searchFilterData.rate !== undefined &&
      searchFilterData.rate !== null &&
      searchFilterData.rate !== ""
    ) {
      searchParams.set("rate", searchFilterData.rate);
      setSearchParams(searchParams);
    }
    if (
      searchFilterData.user_verification !== undefined &&
      searchFilterData.user_verification !== null &&
      searchFilterData.user_verification !== ""
    ) {
      searchParams.set("user_verification", searchFilterData.user_verification);
      setSearchParams(searchParams);
    }
    if (
      searchFilterData.user_available !== undefined &&
      searchFilterData.user_available !== null &&
      searchFilterData.user_available !== ""
    ) {
      searchParams.set("user_available", searchFilterData.user_available);
      setSearchParams(searchParams);
    }
    if (searchFilterData.categories?.length > 0) {
      searchParams.set("categories", searchFilterData.categories.join("-"));
      setSearchParams(searchParams);
    }
    if (searchFilterData.sub_categories?.length > 0) {
      searchParams.set(
        "sub_categories",
        searchFilterData.sub_categories.join("-")
      );
      setSearchParams(searchParams);
    }
    if (
      searchFilterData.is_old !== undefined &&
      searchFilterData.is_old !== null &&
      searchFilterData.is_old !== ""
    ) {
      searchParams.set("is_old", searchFilterData.is_old);
      setSearchParams(searchParams);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleApplyFilters();
  }

  useEffect(() => {
    if (!searchParams.get("page")) {
      searchParams.append("page", 1);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  return (
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
              <form onSubmit={handleSubmit}>
                <InputField
                  id="aside-search-input"
                  name="search"
                  className="aside-search-input"
                  value={searchFilterData.search}
                  onChange={handleChange}
                  label={"بحث"}
                />
                <DepartmentFilterBox
                  categoriesValue={searchFilterData.categories}
                  sub_categoriesValue={searchFilterData.sub_categories}
                  onChange={handleChange}
                  departmentFilter={departmentFilter}
                />
                <RatingFilterBox
                  value={searchFilterData.rate}
                  onChange={handleChange}
                />
                <SellerFilterBox />
                <SellerStatusFilterBox
                  user_available={searchFilterData.user_available}
                  user_verification={searchFilterData.user_verification}
                  onChange={handleChange}
                />
                <div className="search-btn">
                  <button onClick={handleApplyFilters}>تأكيد</button>
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
  );
};

export default Search;
