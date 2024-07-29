import React from "react";
import rateowner2 from "../../Assets/images/rateowner2.webp";
import { IconPaperclip, IconX } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const ChatSideBar = ({
  setShowChatsMenu,
  showChatsMenu,
  chats,
  targetChat,
  setTargetChat
}) => {
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.authedUser);

  function truncate(inputString) {
    let truncateStringResult;
    if (inputString.length > 35) {
      truncateStringResult = inputString.substring(0, 35) + "...";
    } else {
      truncateStringResult = inputString;
    }
    return truncateStringResult;
  }

  return (
    <div className={`side-menu ${showChatsMenu ? "active" : ""}`}>
      <div className="colse" onClick={() => setShowChatsMenu(false)}>
        <IconX stroke={2} />
      </div>
      {chats?.map((chat) => (
        <button
          className={`nav-link ${targetChat?.id === chat?.id ? "active" : ""}`}
          key={chat?.id}
          onClick={() => {
            setTargetChat(chat);
            setShowChatsMenu(false);
          }}
        >
          <img
            className="userImg"
            src={
              chat?.apply?.id === user?.id
                ? chat?.owner?.image
                : chat?.apply?.image || rateowner2
            }
            alt="user"
          />
          <div className="text-wrap">
            <h6 className="name">
              {chat?.apply?.id === user?.id
                ? chat?.owner?.name
                : chat?.apply?.name}
            </h6>
            <p className="lastMessage unread">
              {chat?.last_message?.type !== "text" ? (
                <div className="icon">
                  <IconPaperclip stroke={2} />
                  <span>{t("chat.attachment")}</span>
                </div>
              ) : (
                truncate(chat?.last_message?.message)
              )}
              {chat?.last_message?.from_id === user?.id && (
                <span className="read">
                  <i className="fa-regular fa-check"></i>
                </span>
              )}
            </p>
            <span className="time"> 10:00 AM </span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ChatSideBar;
