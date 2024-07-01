import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../ui/SectionHeader";
import useCategoriesList from "../features/categories/useCategoriesList";

const Categories = () => {
  const { isLoading, data } = useCategoriesList();

  return (
    <>
      <main className="main">
        <div className="section-head">
          <SectionHeader />
        </div>
        <section className="department">
          <div className="container">
            <div className="row">
              {data &&
                data.data.map((category) => (
                  <div className="col-lg-3 col-6 p-2" key={category.id}>
                    <div className="category-card" data-aos="fade-up">
                      <Link
                        to={`/search?id=${category.id}`}
                        className="inner-card"
                      >
                        <div className="category-img">
                          <img src={category.image} alt="" />
                        </div>
                        <div className="category-content">
                          <div className="top-area">
                            <h6 className="title mb-1">
                              {category.count} خدمة
                            </h6>
                            <h5 className="text"> {category.name} </h5>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Categories;
