import React from "react";
import image from "../../Assets/images/Artboard.png";

function PortfolioCard() {
  return (
    <div className="portfolio-card">
      <div className="img">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default PortfolioCard;
