import React from "react";
import SectionHeader from "../ui/SectionHeader";
import NewsLetter from "../ui/NewsLetter";
import FaqAccordin from "../ui/FaqAccordin";

const Faq = () => {
  return (
    <>
      <div className="section-head">
        <SectionHeader />
      </div>
      <section className="faqs">
        <FaqAccordin />
      </section>
      <NewsLetter />
    </>
  );
};

export default Faq;
