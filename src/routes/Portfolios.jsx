import React from "react";
import PortfolioCard from "../ui/cards/PortfolioCard";
import SectionHeader from "../ui/SectionHeader";

function Portfolios() {
  return (
    <>
      <SectionHeader />
      <section className="portfolios">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12 p-2">
              .
            </div>
            <div className="col-lg-9 col-12 p-2">
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolios;
