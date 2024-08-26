import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { handleApplyFilters } from "../utils/helpers";
import DepartmentFilterBox from "../ui/filter/DepartmentFilterBox";
import RatingFilterBox from "../ui/filter/RatingFilterBox";
import SellerStatusFilterBox from "../ui/filter/SellerStatusFilterBox";
import InputField from "../ui/form-elements/InputField";
import useSearchServicesList from "../features/services/useSearchServicesList";
import ServiceCard from "../ui/cards/ServiceCard";
import useCategorieListWithSub from "../features/categories/useCategorieListWithSub";
import DataLoader from "../ui/DataLoader";
import EmptyData from "../ui/EmptyData";
import MultiSelect from "../ui/form-elements/MultiSelect";
import useGetSkills from "../features/settings/useGetSkills";
import SortFilterBox from "../ui/SortFilterBox";

const Services = () => {
  const { t } = useTranslation();
  const { data: skills } = useGetSkills();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchFilterData, setSearchFilterData] = useState({
    search: searchParams.get("search") || "",
    page: Number(searchParams.get("page")) || null,
    rate: Number(searchParams.get("rate")) || null,
    user_verification: Number(searchParams.get("user_verification")) || null,
    user_available: Number(searchParams.get("user_available")) || null,
    skills: searchParams.get("skills")
      ? searchParams
          .get("skills")
          .split("-")
          .map((skill) => Number(skill))
      : [],
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
    skills: searchParams.get("skills")
      ? searchParams.get("skills").split("-")
      : [],
  });

  useEffect(() => {
    const options = searchFilterData?.skills?.map((id) => {
      const skill = skills?.find((s) => s?.id === Number(id));
      return { value: id, label: skill?.name };
    });

    setSelectedOptions(options);
  }, [searchFilterData, skills]);

  const { isLoading: categoriesIsLoading, data: categoriesWithSubCategories } =
    useCategorieListWithSub();

  const {
    data: searchServicesList,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useSearchServicesList();

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
        const relatedSubCategories =
          categoriesWithSubCategories
            .find((category) => category.id === categoryValue)
            ?.sub_categories.map((subCategory) => subCategory.id) || [];
        updatedState["sub_categories"] = checked
          ? [
              ...new Set([
                ...prevState["sub_categories"],
                ...relatedSubCategories,
              ]),
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

  if ((categoriesIsLoading || isFetching) && searchServicesList?.length < 10) {
    return <DataLoader />;
  }

  return (
    <section className="search-section">
      <div className="container">
        <div className="row">
          <aside
            className={`col-lg-3 p-2 mt-2 side-menu ${
              isFilterOpen ? "active" : ""
            }`}
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
                    value: skill?.id,
                  }))}
                />
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

          <div className="small-filter-header">
            <h6>{t("routes.services")}</h6>
            <button
              className="openfilter"
              onClick={() => setIsFilterOpen(true)}
            >
              <i className="fa-light fa-sliders"></i>
            </button>
          </div>

          <main className="col-lg-9 p-2">
            <div className="row">
              <SortFilterBox type="services" />
              {searchServicesList.length > 0 ? (
                <>
                  {searchServicesList.map((service) => (
                    <div
                      className="col-lg-4 col-md-6 col-12 p-2"
                      key={service.id}
                    >
                      <ServiceCard service={service} />
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
                <EmptyData minHeight="300px">
                  {t("notFoundPlaceholder.noServicesFoundWithThisDetails")}
                </EmptyData>
              )}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};
export default Services;
