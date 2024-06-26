import React from "react";
import SectionHeader from "../ui/SectionHeader";
import NewsLetter from "../ui/NewsLetter";
import FaqAccordin from "../ui/FaqAccordin";

const Faq = () => {
  return (
    <main className="main">
      <div className="section-head">
        <SectionHeader />
      </div>

      <section className="faqs">
        <FaqAccordin />
      </section>

      <div className="Newsletter">
        <NewsLetter />
      </div>
    </main>
  );
};

export default Faq;
