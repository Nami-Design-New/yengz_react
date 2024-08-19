import React from "react";
import image from "../../Assets/images/Artboard.png";
import { Link } from "react-router-dom";

function PortfolioCard({ setRow, setIsModalOpen }) {
  return (
    <div className="portfolio-card" onClick={() => setIsModalOpen(true)}>
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="info">
        <h6>من اخر اعمالي في تصميم الشعارات</h6>
        <ul>
          <li>
            <i class="fa-sharp fa-regular fa-eye"></i> 3
          </li>
          <li>
            <i class="fa-sharp fa-solid fa-heart"></i> 4
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PortfolioCard;
