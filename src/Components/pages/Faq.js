import React from "react";
import SectionHead from "./SectionHead";
import NewsLetter from "./NewsLetter";
import FaqAccordin from "./FaqAccordin";

const Faq = () => {
  return (
    <main class="main">

      <div class="section-head">
        <SectionHead />
      </div>

      <section class="faqs">
        

        <FaqAccordin />

      </section>

      <div class="Newsletter">
        <NewsLetter />
      </div>
    </main>
  );
};

export default Faq;
