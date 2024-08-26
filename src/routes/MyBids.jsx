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
            {isLoading ? (
              <DataLoader />
            ) : bids?.length > 0 ? (
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
      </section>
    </>
  );
}
