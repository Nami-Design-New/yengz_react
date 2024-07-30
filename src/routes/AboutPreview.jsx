import React from "react";
import useGetAboutData from "../features/About/useGetAboutData";
import DataLoader from "../ui/DataLoader";

const AboutPreview = () => {
  const { data, isLoading } = useGetAboutData();
  const renderHTML = (htmlContent) => {
    return { __html: htmlContent };
  };
  return (
    <section className="faqs">
      <div className="container">
        {isLoading ? (
          <div>
            <DataLoader />
          </div>
        ) : (
          <div dangerouslySetInnerHTML={renderHTML(data?.html)} />
        )}
      </div>
    </section>
  );
};

export default AboutPreview;
