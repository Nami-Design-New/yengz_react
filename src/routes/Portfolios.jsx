import React from "react";
import PortfolioCard from "../ui/cards/PortfolioCard";

function Portfolios() {
  return (
    <section className="portfolios">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 p-2">
            <PortfolioCard />
          </div>
          <div className="col-lg-4 col-md-6 col-12 p-2">
            <PortfolioCard />
          </div>
          <div className="col-lg-4 col-md-6 col-12 p-2">
            <PortfolioCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolios;
