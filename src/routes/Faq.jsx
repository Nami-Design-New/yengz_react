import React from "react";
import SectionHeader from "../ui/SectionHeader";
import FaqAccordin from "../ui/FaqAccordin";

const Faq = () => {
  return (
    <>
      <SectionHeader />
      <section className="faqs">
        <FaqAccordin />
      </section>
    </>
  );
};

export default Faq;
