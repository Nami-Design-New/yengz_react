import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import rateowner3 from "../../Assets/images/rateowner3.webp";
import service from "../../Assets/images/bann.webp";
import {
  IconCircleOff,
  IconDotsVertical,
  IconInfoCircle,
  IconMicrophone,
  IconPaperclip,
  IconSend
} from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { createMessage } from "../../services/apiChats";
import { useQueryClient } from "@tanstack/react-query";

const ChatRoom = ({ chat }) => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const chatContainerRef = useRef(null);
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.authedUser);
  const [message, setMessage] = useState({
    from_id: user?.id,
    chat_id: chat?.id,
    message: "",
    type: ""
  });

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chat?.messages?.length]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await createMessage(message, queryClient);
      setMessage({ ...message, message: "", type: "" });
      formRef.current.reset();
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-head">
        <div className="user">
          <img
            src={
              user?.id === chat?.apply?.id
                ? chat?.owner?.image
                : chat?.apply?.image || rateowner3
            }
            alt="user"
          />
          <h6 className="name">
            {user?.id === chat?.apply?.id
              ? chat?.owner?.name
              : chat?.apply?.name}
          </h6>
        </div>

        <div className="dropdown setting">
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <IconDotsVertical stroke={2} />
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item">
                <IconCircleOff stroke={2} /> {t("chat.block")}
              </button>
            </li>
            <li>
              <button className="dropdown-item">
                <IconInfoCircle stroke={2} /> {t("chat.report")}
              </button>
            </li>
          </ul>
        </div>
      </div>

      {chat?.service && (
        <Link to={`/services/${chat?.service?.id}`} className="adItem">
          <img src={chat?.service?.image || service} alt="" />
          <p> {chat?.service?.title} </p>
        </Link>
      )}

      <div className="inner-container" ref={chatContainerRef}>
        {chat?.messages
          ?.slice()
          .reverse()
          .map((message) => (
            <div
              className={`message ${
                message?.from_id === user?.id
                  ? "sent-message"
                  : "recieved-message"
              }`}
              key={message?.id}
            >
              <div className="d-flex flex-column">
                <div className="message-content">
                  <p> {message?.message} </p>
                </div>
                <span className={message?.from_id === user?.id ? "sen" : "rec"}>
                  10:00AM
                </span>
              </div>
            </div>
          ))}
      </div>

      <div className="chat-send">
        <form onSubmit={handleSendMessage} ref={formRef}>
          <div className="input-field">
            <input
              type="text"
              placeholder={t("chat.writeHere")}
              value={message?.type === "text" ? message?.message : ""}
              onChange={(e) =>
                setMessage({
                  ...message,
                  message: e.target.value,
                  type: "text"
                })
              }
            />
            <label className="files-input">
              <IconPaperclip stroke={2} />
              <input
                type="file"
                name="userImage"
                id="img-upload"
                accept="image/*"
              />
            </label>
            <label className="files-input">
              <IconMicrophone stroke={2} />
              <input type="" />
            </label>
          </div>
          <button type="submit" disabled={loading}>
            <IconSend stroke={2} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;
