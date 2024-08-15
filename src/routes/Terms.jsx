import React from "react";
import SectionHeader from "../ui/SectionHeader";
import useGetSettings from "../features/settings/useGetSettings";
import DataLoader from "../ui/DataLoader";

const Terms = () => {
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
            <div>
              <DataLoader />
            </div>
          ) : (
            <div dangerouslySetInnerHTML={renderHTML(settings?.data?.terms)} />
          )}
        </div>
      </section>
    </>
  );
};

export default Terms;
