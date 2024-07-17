import React from "react";
import SectionHeader from "../ui/SectionHeader";
import useCategoriesList from "../features/categories/useCategoriesList";
import CategoryCard from "../ui/cards/CategoryCard";

const Categories = () => {
  const { isLoading, data } = useCategoriesList();

  return (
    <>
      <SectionHeader />
      <section className="department">
        <div className="container">
          <div className="row">
            {data &&
              data.data.map((category) => (
                <div className="col-lg-3 col-6 p-2" key={category.id}>
                  <CategoryCard category={category} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
