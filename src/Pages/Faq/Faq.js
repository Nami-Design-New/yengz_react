import React from "react";
import SectionHead from "../../Components/SectionHead/SectionHead";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import FaqAccordin from "../../Components/FaqAccordidn/FaqAccordin";


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
