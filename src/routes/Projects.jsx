import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DepartmentFilterBox from "../ui/filter/DepartmentFilterBox";
import RatingFilterBox from "../ui/filter/RatingFilterBox";
import SellerStatusFilterBox from "../ui/filter/SellerStatusFilterBox";
import InputField from "../ui/form-elements/InputField";
import useCategorieListWithSub from "../features/categories/useCategorieListWithSub";
import useProjectsList from "../features/projects/useProjectsList";
import EmptyData from "../ui/EmptyData";
import DataLoader from "../ui/DataLoader";
import CustomPagination from "../ui/CustomPagination";
import ProjectCard from "../ui/cards/ProjectCard";

function Projects() {
  const { t } = useTranslation();
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
    is_old: Number(searchParams.get("is_old")) || null
  });

  const { isLoading: categoriesIsLoading, data: categoriesWithSubCategories } =
    useCategorieListWithSub();

  const {
    data: searchProjectsList,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage
  } = useProjectsList();

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
                  ...relatedSubCategories
                ])
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
                ...new Set([...prevState["categories"], parentCategory.id])
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
    const newParams = new URLSearchParams();
    for (const [key, value] of Object.entries(searchFilterData)) {
      if (value !== undefined && value !== null && value !== "") {
        if (Array.isArray(value)) {
          newParams.set(key, value.join("-"));
        } else {
          newParams.set(key, value);
        }
      }
    }
    setSearchParams(newParams);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleApplyFilters();
  }

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

  if ((categoriesIsLoading || isFetching) && searchProjectsList?.length < 10) {
    return <DataLoader />;
  }

  return (
    <section className="search-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 p-2">
            <aside className={`side-menu p-2 pt-3 ${isFilterOpen ? "active" : ""}`}>
              <div className="filter-wrap">
                <div className="colse" onClick={() => setIsFilterOpen(false)}>
                  <i className="fa-light fa-xmark"></i>
                </div>
                <form onSubmit={handleSubmit}>
                  <InputField
                    id="aside-search-input"
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
                  <div className="d-flex gap-2">
                    <div className="search-btn">
                      <button onClick={handleApplyFilters}>
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
          </div>

          <div className="small-filter-header">
            <h6>{t("projects.title")}</h6>
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
                <div className="col-12 p-2 pt-0 d-flex justify-content-end">
                  <Link to="/add-project" className="btn btn-success">
                    <i className="fa-regular fa-hexagon-plus me-2"></i> {""}
                    {t("projects.addProject")}
                  </Link>
                </div>
                {searchProjectsList && searchProjectsList?.length > 0 ? (
                  <>
                    {searchProjectsList.map((project) => (
                      <div className="col-12 p-2" key={project.id}>
                        <ProjectCard project={project} />
                      </div>
                    ))}
                    {isFetching && (
                      <div className="col-12 p-2">
                        <div className="smallLoader">
                          <span>
                            {t("search.loading")}{" "}
                            <i className="fa-light fa-loader fa-spin"></i>
                          </span>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <EmptyData>{t("projects.emptyProjects")}</EmptyData>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
