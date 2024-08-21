import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import PortfolioCard from "../ui/cards/PortfolioCard";
import SectionHeader from "../ui/SectionHeader";
import InputField from "../ui/form-elements/InputField";
import SelectField from "../ui/form-elements/SelectField";
import MultiSelect from "../ui/form-elements/MultiSelect";
import WorkViewModal from "../ui/modals/WorkViewModal";
import useGetSkills from "../features/settings/useGetSkills";
import handleApplyFilters from "../utils/helpers";

function Portfolios() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [row, setRow] = useState({});
  const { data: skills } = useGetSkills();

  const [searchFilterData, setSearchFilterData] = useState({
    search: searchParams.get("search") || "",
    duration: searchParams.get("added_during") || "",
    skills: searchParams.get("skills")?.split("-") || [],
    sort: searchParams.get("sort") || "",
    page: Number(searchParams.get("page")) || null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchFilterData({ ...searchFilterData, [name]: value });
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

  function handleSubmit(e) {
    e.preventDefault();
    handleApplyFilters(setSearchParams, searchFilterData);
  }

  function handleClearFilters() {
    setSearchParams({});
  }

  return (
    <>
      <SectionHeader />
      <section className="portfolios search-section">
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
                <form className="form" onSubmit={handleSubmit}>
                  <InputField
                    id="search"
                    name="search"
                    value={searchFilterData.search}
                    onChange={handleChange}
                    label={t("search.search")}
                    placeholder={t("search.searchFor")}
                  />
                  <MultiSelect
                    label={t("search.skills")}
                    id="skills"
                    name="skills"
                    options={skills?.map((skill) => ({
                      label: skill?.name,
                      value: skill?.id
                    }))}
                    selectedOptions={selectedOptions}
                    handleChange={handleSelect}
                  />
                  <SelectField
                    id="added_during"
                    name="added_during"
                    onChange={handleChange}
                    disabledOption={t("select")}
                    value={searchFilterData.added_during}
                    label={t("search.addedDuring")}
                    options={[
                      { name: "أسبوع", value: "week" },
                      { name: "شهر", value: "month" },
                      { name: "3 أشهر", value: "3 month" },
                      { name: "6 أشهر", value: "6 month" },
                      { name: "سنة", value: "year" },
                      { name: "جميع الأعمال", value: "all" }
                    ]}
                  />
                  <div className="d-flex gap-2 w-100">
                    <div className="search-btn">
                      <button style={{ height: "44px" }}>
                        {t("search.apply")}
                      </button>
                    </div>
                    <div className="search-btn" onClick={handleClearFilters}>
                      <span>{t("search.clear")}</span>
                    </div>
                  </div>
                </form>
              </div>
            </aside>
            <div className="col-lg-9 col-12 p-2">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 p-2">
                  <PortfolioCard
                    setRow={setRow}
                    setIsModalOpen={setIsModalOpen}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <WorkViewModal showModal={isModalOpen} setShowModal={setIsModalOpen} />
      </section>
    </>
  );
}

export default Portfolios;
