import React from "react";
import image from "../../Assets/images/Artboard.png";
import avatar from "../../Assets/images/avatar.jpg";
import { Link } from "react-router-dom";

function PortfolioCard({ setRow, setIsModalOpen }) {
  return (
    <div className="portfolio-card" onClick={() => setIsModalOpen(true)}>
      <div className="img">
        <img src={image} alt="" />
        <Link to="/profile/1" className="user">
          <img src={avatar} alt="avatar" />
        </Link>
      </div>
      <div className="info">
        <h6>من اخر اعمالي في تصميم الشعارات</h6>
        <ul>
          <li>
            <i className="fa-sharp fa-regular fa-eye"></i> 3
          </li>
          <li>
            <i className="fa-sharp fa-solid fa-heart"></i> 4
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PortfolioCard;
