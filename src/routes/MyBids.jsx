import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../ui/SectionHeader";
import InputField from "../ui/form-elements/InputField";
import MultiSelect from "../ui/form-elements/MultiSelect";
import BidCard from "../ui/cards/BidCard";
import useGetMyProjectRequestsList from "../features/projects/useGetMyProjectRequestsList";
import EmptyData from "../ui/EmptyData";
import DataLoader from "../ui/DataLoader";

export default function MyBids() {
  const { t } = useTranslation();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchFilterData, setSearchFilterData] = useState({});
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { isLoading, data: bids } = useGetMyProjectRequestsList();

  const options = [
    { value: "Ahmed Ali", label: "Ahmed Ali" },
    { value: "Emad Salem", label: "Emad Salem" },
    { value: "Mohamed Ahmed", label: "Mohamed Ahmed" },
  ];

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
      skills: selectedValues,
    });
  };

  return (
    <>
      <SectionHeader />
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
                  <MultiSelect
                    label={t("search.projectOwnerName")}
                    id="project_owner_name"
                    name="project_owner_name"
                    options={options}
                    selectedOptions={selectedOptions}
                    handleChange={handleSelect}
                  />
                  <ul className="seller-level w-100">
                    <h6>{t("search.satus")}</h6>
                    <ul>
                      <li>
                        <input
                          type="checkbox"
                          id="waiting_for_approval"
                          name="waiting_for_approval"
                        />
                        <label htmlFor="waiting_for_approval">
                          {t("search.waitingForApproval")}
                        </label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          id="under_implementation"
                          name="under_implementation"
                        />
                        <label htmlFor="under_implementation">
                          {t("search.underImplementation")}
                        </label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          id="completed"
                          name="completed"
                        />
                        <label htmlFor="completed">
                          {t("search.completed")}
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" id="excluded" name="excluded" />
                        <label htmlFor="excluded">{t("search.excluded")}</label>
                      </li>
                      <li>
                        <input type="checkbox" id="closed" name="closed" />
                        <label htmlFor="closed">{t("search.closed")}</label>
                      </li>
                      <li>
                        <input type="checkbox" id="canceled" name="canceled" />
                        <label htmlFor="canceled">{t("search.canceled")}</label>
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
            {isLoading ? (
              <DataLoader />
            ) : (
              <div className="col-lg-9 col-12 p-2">
                <div className="row">
                  {bids?.length > 0 ? (
                    bids.map((bid) => (
                      <div className="col-12 p-2" key={bid?.id}>
                        <BidCard bid={bid} />
                      </div>
                    ))
                  ) : (
                    <EmptyData>{t("search.noData")}</EmptyData>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
