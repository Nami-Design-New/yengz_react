import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DepartmentFilterBox from "../ui/filter/DepartmentFilterBox";
import RatingFilterBox from "../ui/filter/RatingFilterBox";
import SellerStatusFilterBox from "../ui/filter/SellerStatusFilterBox";
import InputField from "../ui/form-elements/InputField";
import useSearchServicesList from "../features/services/useSearchServicesList";
import ServiceCard from "../ui/cards/ServiceCard";
import { useTranslation } from "react-i18next";
import useCategorieListWithSub from "../features/categories/useCategorieListWithSub";
import DataLoader from "../ui/DataLoader";
import CustomPagination from "../ui/CustomPagination";
import EmptyData from "./../ui/EmptyData";

const Services = () => {
  const { t } = useTranslation();
  const { isLoading: categoriesIsLoading, data: categoriesWithSubCategories } =
    useCategorieListWithSub();
  const { isLoading: searchIsLoading, data: searchServicesList } =
    useSearchServicesList();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchFilterData, setSearchFilterData] = useState({
    search: searchParams.get("search") || "",
    page: Number(searchParams.get("page")) || null,
    rate: Number(searchParams.get("rate")) || null,
    user_verification: Number(searchParams.get("user_verification")) || null,
    user_available: Number(searchParams.get("user_available")) || null,
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
    is_old: Number(searchParams.get("is_old")) || null,
  });

  const handleChange = (e) => {
    const { name, checked, type, value } = e.target;
    const parsedValue = type === "checkbox" ? (checked ? 1 : 0) : value;

    setSearchFilterData((prevState) => {
      const updatedState = { ...prevState, [name]: parsedValue };

      if (name === "categories" || name === "sub_categories") {
        const updateCategoriesAndSubCategories = (name, value, checked) => {
          const categoryValue = Number(value);

          const updatedCategoryList = checked
            ? [...prevState[name], categoryValue]
            : prevState[name].filter((id) => id !== categoryValue);

          const updatedState = { ...prevState, [name]: updatedCategoryList };

          if (name === "categories") {
            const relatedSubCategories =
              categoriesWithSubCategories
                .find((category) => category.id === categoryValue)
                ?.sub_categories.map((subCategory) => subCategory.id) || [];

            if (checked) {
              updatedState["sub_categories"] = [
                ...new Set([
                  ...prevState["sub_categories"],
                  ...relatedSubCategories,
                ]),
              ];
            } else {
              updatedState["sub_categories"] = prevState[
                "sub_categories"
              ].filter((id) => !relatedSubCategories.includes(id));
            }
          } else if (name === "sub_categories") {
            const parentCategory = categoriesWithSubCategories.find(
              (category) =>
                category.sub_categories.some(
                  (subCategory) => subCategory.id === categoryValue
                )
            );

            const allChildIds = parentCategory.sub_categories.map(
              (subCategory) => subCategory.id
            );

            const areAllChildrenChecked = allChildIds.every((id) =>
              updatedState["sub_categories"].includes(id)
            );

            if (areAllChildrenChecked) {
              updatedState["categories"] = [
                ...new Set([...prevState["categories"], parentCategory.id]),
              ];
            } else {
              updatedState["categories"] = prevState["categories"].filter(
                (categoryId) => categoryId !== parentCategory.id
              );
            }
          }
          return updatedState;
        };

        return updateCategoriesAndSubCategories(name, value, checked);
      }
      return updatedState;
    });
  };

  function handleClearFilters() {
    setSearchParams({});
  }

  function handleApplyFilters() {
    if (searchFilterData.page) {
      searchParams.set("page", searchFilterData.page);
      setSearchParams(searchParams);
    }
    console.log(String(searchFilterData.search).trim());
    if (String(searchFilterData.search).trim()) {
      searchParams.set("search", searchFilterData.search);
      setSearchParams(searchParams);
    } else {
      searchParams.delete("search");
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

  return categoriesIsLoading || searchIsLoading ? (
    <DataLoader />
  ) : (
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
                  className="aside-search-input search_input"
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
                <hr />
                <RatingFilterBox
                  value={searchFilterData.rate}
                  onChange={handleChange}
                />
                <hr />
                {/* <SellerFilterBox /> */}
                <SellerStatusFilterBox
                  user_available={searchFilterData.user_available}
                  user_verification={searchFilterData.user_verification}
                  onChange={handleChange}
                />
                <hr />
                <div className="search-btn">
                  <button onClick={handleApplyFilters}>
                    {t("search.apply")}
                  </button>
                </div>
                <div className="search-btn">
                  <span onClick={handleClearFilters}>{t("search.clear")}</span>
                </div>
              </form>
            </div>
          </aside>
          <div className="small-filter-header">
            <h6>{t("search.searchFilter")}</h6>
            <button
              className="openfilter"
              onClick={() => setIsFilterOpen(true)}
            >
              <i className="fa-light fa-sliders"></i>
            </button>
          </div>
          {searchServicesList && searchServicesList?.data.length > 0 ? (
            <div className="col-lg-9 col-12 p-2 results-wrapper">
              <div className="container">
                <div className="row">
                  {searchServicesList.data.map((service) => (
                    <div className="col-lg-4 col-6 p-2" key={service.id}>
                      <ServiceCard service={service} />
                    </div>
                  ))}
                </div>
                {searchServicesList?.total > 10 && (
                  <CustomPagination
                    count={searchServicesList?.total}
                    pageSize={10}
                  />
                )}
              </div>
            </div>
          ) : (
            <EmptyData>
              {searchServicesList?.total === 0
                ? t("recievedOrders.emptyOrders")
                : t("recievedOrders.noOrders")}
            </EmptyData>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
