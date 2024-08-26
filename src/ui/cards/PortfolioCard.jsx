import React, { useState } from "react";
import image from "../../Assets/images/Artboard.png";
import avatar from "../../Assets/images/avatar.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "../../utils/axios";
import useSearchWorks from "../../features/profile/useSearchWorks";

function PortfolioCard({ setRow, setIsModalOpen, portfolio }) {
  const logged = useSelector((state) => state.authedUser.isLogged);
  const [isLike, setIsLike] = useState(portfolio?.liked);
  const { refetch } = useSearchWorks();

  const handleAddLike = async (e) => {
    e.stopPropagation();
    try {
      const res = await axios.post("/user/addLike", {
        my_work_id: portfolio?.id,
      });
      if (res.data.code === 200) {
        setIsLike(true);
        refetch();
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const handleRemoveLike = async (e) => {
    e.stopPropagation();
    try {
      const res = await axios.post("/user/deleteLike", {
        my_work_id: portfolio?.id,
      });
      if (res.data.code === 200) {
        setIsLike(false);
        refetch();
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div
      className="portfolio-card"
      onClick={() => {
        setIsModalOpen(true);
        setRow(portfolio);
      }}
    >
      <div className="img">
        <img src={portfolio?.images[0]?.image || image} alt="portfolio" />
        <Link to={`/profile/${portfolio?.user?.id}`} className="user">
          <img src={portfolio?.user?.image || avatar} alt="avatar" />
        </Link>
      </div>
      <div className="info">
        <h6>{portfolio?.title}</h6>
        <ul>
          <li>
            <i className="fa-sharp fa-regular fa-eye"></i>{" "}
            {portfolio?.view_count || 0}
          </li>
          <li>
            {logged &&
              (!portfolio?.is_my_work ? (
                <>
                  {isLike ? (
                    <button
                      className="like-btn liked can-like"
                      onClick={handleRemoveLike}
                    >
                      <i className="fa-sharp fa-solid fa-heart"></i>{" "}
                      {portfolio?.likes_count || 0}
                    </button>
                  ) : (
                    <button
                      className="like-btn  can-like"
                      onClick={handleAddLike}
                    >
                      <i className="fa-sharp fa-solid fa-heart"></i>{" "}
                      {portfolio?.likes_count || 0}
                    </button>
                  )}
                </>
              ) : (
                <span className="like-btn liked">
                  <i className="fa-sharp fa-solid fa-heart"></i>{" "}
                  {portfolio?.likes_count || 0}
                </span>
              ))}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PortfolioCard;
