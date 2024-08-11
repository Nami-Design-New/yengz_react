import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import NewsLetter from "../ui/NewsLetter";
import SectionHeader from "../ui/SectionHeader";
import useGetAboutAppCategory from "./../features/About/useGetAboutAppCategory";
import DataLoader from "../ui/DataLoader";
import ErrorPage from "./ErrorPage";

const About = () => {
  const { data: aboutCategoriesList, isLoading } = useGetAboutAppCategory();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (aboutCategoriesList && !searchParams.get("category")) {
      setSearchParams({ category: aboutCategoriesList[0].name });
    }
  }, [aboutCategoriesList, searchParams, setSearchParams]);

  const selectedCategory = searchParams.get("category");

  if (isLoading) {
    return <DataLoader />;
  }

  if (!aboutCategoriesList) {
    return <ErrorPage />;
  }

  return (
    <>
      <SectionHeader />
      <section className="faqs">
        <div className="container">
          <ul
            className="nav nav-pills w-100 mb-3"
            id="pills-tab"
            role="tablist"
          >
            {aboutCategoriesList?.map((category) => (
              <li className="nav-item" key={category.id}>
                <button
                  onClick={() => setSearchParams({ category: category.name })}
                  className={`nav-link ${
                    category.name === selectedCategory ? "active" : ""
                  }`}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
          <div className="about_links">
            {aboutCategoriesList
              ?.find((category) => category?.name === selectedCategory)
              ?.sub_categories?.map((subcategory) => (
                <Link to={`/about/preview/${subcategory?.id}`}>
                  {subcategory?.name}
                  <i className="fa-light fa-angle-left"></i>
                </Link>
              ))}
          </div>
        </div>
      </section>
      <NewsLetter />
    </>
  );
};

export default About;
