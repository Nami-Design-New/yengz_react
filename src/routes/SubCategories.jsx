import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SectionHeader from "../ui/SectionHeader";
import CategoryCard from "../ui/cards/CategoryCard";
import EmptyData from "../ui/EmptyData";
import useSubCategoriesList from "../features/categories/useSubCategoriesList";
import DataLoader from "../ui/DataLoader";
import useGetCategoryById from "./../features/categories/useGetCategoryById";
import ChooseCategoryPath from "../ui/modals/ChooseCategoryPath";
import SubCategoryCard from "./../ui/cards/SubCategoryCard";
import ErrorPage from "./ErrorPage";

const SubCategories = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { data: category } = useGetCategoryById(id);
  const { data, isLoading } = useSubCategoriesList(id);
  const [showModal, setShowModal] = React.useState(false);
  const [targetedSubCategory, setTargetedSubCategory] = useState("");

  if (!category) {
    return <ErrorPage />;
  }

  return (
    <>
      <SectionHeader title={category?.name} />
      <section className="department">
        <div className="container">
          <div className="row">
            {isLoading ? (
              <DataLoader />
            ) : data && data?.length > 0 ? (
              data.map((subCategory) => (
                <div className="col-lg-3 col-6 p-2" key={subCategory.id}>
                  <SubCategoryCard
                    key={subCategory.id}
                    subCategory={subCategory}
                    onClick={() => {
                      setShowModal(true);
                      setTargetedSubCategory(subCategory);
                    }}
                  />
                </div>
              ))
            ) : (
              <EmptyData>{t("no_sub_categories")}</EmptyData>
            )}
          </div>
        </div>
      </section>
      <ChooseCategoryPath
        subCategory={targetedSubCategory}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default SubCategories;
