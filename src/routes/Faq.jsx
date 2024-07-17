import React from "react";
import SectionHeader from "../ui/SectionHeader";
import NewsLetter from "../ui/NewsLetter";
import FaqAccordin from "../ui/FaqAccordin";

const Faq = () => {
  return (
    <>
      <SectionHeader />
      <section className="faqs">
        <FaqAccordin />
      </section>
      <NewsLetter />
    </>
  );
};

export default Faq;
