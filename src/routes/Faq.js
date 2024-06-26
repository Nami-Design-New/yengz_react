import React from "react";
import SectionHead from "../ui/SectionHead";
import NewsLetter from "../ui/NewsLetter";
import FaqAccordin from "../ui/FaqAccordin";

const Faq = () => {
  return (
    <main className="main">
      <div className="section-head">
        <SectionHead />
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
