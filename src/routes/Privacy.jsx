import React from "react";
import useGetSettings from "../features/settings/useGetSettings";
import NewsLetter from "../ui/NewsLetter";
import SectionHeader from "../ui/SectionHeader";

const Privacy = () => {
  const { data: settings } = useGetSettings();
  const renderHTML = (htmlContent) => {
    return { __html: htmlContent };
  };
  return (
    <>
      <SectionHeader />
      <section className="faqs">
        <div className="container">
          <div
            dangerouslySetInnerHTML={renderHTML(settings?.data?.privacy)}
          ></div>
        </div>
      </section>
      <NewsLetter />
    </>
  );
};

export default Privacy;
