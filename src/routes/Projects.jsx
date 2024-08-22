import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { handleApplyFilters } from "../utils/helpers";
import DepartmentFilterBox from "../ui/filter/DepartmentFilterBox";
import InputField from "../ui/form-elements/InputField";
import useCategorieListWithSub from "../features/categories/useCategorieListWithSub";
import useProjectsList from "../features/projects/useProjectsList";
import EmptyData from "../ui/EmptyData";
import DataLoader from "../ui/DataLoader";
import ProjectCard from "../ui/cards/ProjectCard";
import MultiSelect from "../ui/form-elements/MultiSelect";
import useGetSkills from "../features/settings/useGetSkills";
import RangeSlider from "../ui/form-elements/RangeSlider";

function Projects() {
  const { t } = useTranslation();
  const { data: skills } = useGetSkills();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchFilterData, setSearchFilterData] = useState({
    search: searchParams.get("search") || "",
    price_from: Number(searchParams.get("price_from")) || 5,
    price_to: Number(searchParams.get("price_to")) || 2000,
    duration_from: Number(searchParams.get("duration_from")) || 1,
    duration_to: Number(searchParams.get("duration_to")) || 360,
    page: Number(searchParams.get("page")) || null,
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
    skills: searchParams.get("skills")
      ? searchParams.get("skills").split("-")
      : []
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
        [name]: parsedValue
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
        const relatedSubCategories =
          categoriesWithSubCategories
            .find((category) => category.id === categoryValue)
            ?.sub_categories.map((subCategory) => subCategory.id) || [];
        updatedState["sub_categories"] = checked
          ? [
              ...new Set([
                ...prevState["sub_categories"],
                ...relatedSubCategories
              ])
            ]
          : prevState["sub_categories"].filter(
              (id) => !relatedSubCategories.includes(id)
            );
      } else if (name === "sub_categories") {
        updatedState[name] = updateList(
          prevState[name],
          categoryValue,
          checked
        );
        const parentCategory = categoriesWithSubCategories.find((category) =>
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
        updatedState["categories"] = areAllChildrenChecked
          ? [...new Set([...prevState["categories"], parentCategory.id])]
          : prevState["categories"].filter(
              (categoryId) => categoryId !== parentCategory.id
            );
      }
      return updatedState;
    });
  };

  const handleSliderChange = (name, value) => {
    if (name === "duration") {
      setSearchFilterData((prevState) => ({
        ...prevState,
        duration_from: value[0],
        duration_to: value[1]
      }));
    } else if (name === "price") {
      setSearchFilterData((prevState) => ({
        ...prevState,
        price_from: value[0],
        price_to: value[1]
      }));
    }
  };

  const handleSelect = (selectedItems) => {
    setSelectedOptions(selectedItems);
    const selectedValues = selectedItems
      ? selectedItems?.map((option) => option.value)
      : [];
    setSearchFilterData({
      ...searchFilterData,
      skills: selectedValues
    });
  };

  function handleClearFilters() {
    setSearchParams({});
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleApplyFilters(setSearchParams, searchFilterData);
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
            <aside
              className={`side-menu p-2 pt-3 ${isFilterOpen ? "active" : ""}`}
            >
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
                  <MultiSelect
                    label={t("search.skills")}
                    id="skills"
                    name="skills"
                    selectedOptions={selectedOptions}
                    handleChange={handleSelect}
                    options={skills?.map((skill) => ({
                      label: skill?.name,
                      value: skill?.id
                    }))}
                  />
                  <div className="mb-4">
                    <h6 className="mb-2">{t("search.deliveryTime")}</h6>
                    <RangeSlider
                      min={1}
                      steps={1}
                      max={360}
                      value={[
                        searchFilterData.duration_from,
                        searchFilterData.duration_to
                      ]}
                      handleSlide={(value) =>
                        handleSliderChange("duration", value)
                      }
                      minType={t("search.days")}
                      maxType={t("search.days")}
                    />
                  </div>
                  <div className="mb-4">
                    <h6 className="mb-2">{t("search.budget")}</h6>
                    <RangeSlider
                      min={5}
                      max={2000}
                      steps={5}
                      value={[
                        searchFilterData.price_from,
                        searchFilterData.price_to
                      ]}
                      handleSlide={(value) =>
                        handleSliderChange("price", value)
                      }
                      minType="$"
                      maxType="$"
                    />
                  </div>
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
                  <EmptyData minHeight={"300px"}>
                    {t("notFoundPlaceholder.noProjectsFoundWithThisDetails")}
                  </EmptyData>
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
