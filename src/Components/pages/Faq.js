import React from "react";
import SectionHead from "./SectionHead";
import NewsLetter from "./NewsLetter";
import FaqAccordin from "./FaqAccordin";

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
