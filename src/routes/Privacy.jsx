import React from "react";
import useGetSettings from "../features/settings/useGetSettings";
import NewsLetter from "../ui/NewsLetter";
import SectionHeader from "../ui/SectionHeader";
import DataLoader from "../ui/DataLoader";

const Privacy = () => {
  const { data: settings, isLoading } = useGetSettings();
  const renderHTML = (htmlContent) => {
    return { __html: htmlContent };
  };
  return (
    <>
      <SectionHeader />
      <section className="faqs">
        <div className="container">
          {isLoading ? (
            <DataLoader />
          ) : (
            <div
              dangerouslySetInnerHTML={renderHTML(settings?.data?.privacy)}
            />
          )}
        </div>
      </section>
      <NewsLetter />
    </>
  );
};

export default Privacy;
