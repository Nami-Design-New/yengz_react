import React from "react";
import rateowner2 from "../../Assets/images/rateowner2.webp";
import { IconX } from "@tabler/icons-react";

const ChatSideBar = ({ setShowChatsMenu, showChatsMenu }) => {
  return (
    <div className={`side-menu ${showChatsMenu ? "active" : ""}`}>
      <div className="colse" onClick={() => setShowChatsMenu(false)}>
        <IconX stroke={2} />
      </div>
      <button className="nav-link active">
        <img className="userImg" src={rateowner2} alt="user" />
        <div className="text-wrap">
          <h6 className="name"> خالد عوض </h6>
          <p className="lastMessage unread">
            150 دولار انشاء الله
            <span className="unreadNumber"> 2 </span>
          </p>
          <span className="time"> 10:00AM </span>
        </div>
        <div className="adsItem">
          <p>المهندس</p>
          <img src={rateowner2} className="adImg" alt="" />
        </div>
      </button>
    </div>
  );
};

export default ChatSideBar;
