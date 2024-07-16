import React from "react";
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

const ChatRoom = () => {
  const { t } = useTranslation();
  return (
    <div className="chat-container">
      <div className="chat-head">
        <div className="user">
          <img src={rateowner3} alt="" />
          <h6 className="name"> خالد عوض </h6>
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

      <Link to="/" className="adItem">
        <img src={service} alt="" />
        <p> انشاء متجر الكتروني احترافي على منصة ووردبريس ووكومرس</p>
      </Link>

      <div className="inner-container">
        <div className="sent-message message">
          <div className="d-flex flex-column">
            <div className="message-content">
              <p> hi </p>
            </div>
            <span className="time align-self-end">10:00AM</span>
          </div>
        </div>

        <div className="recieved-message message">
          <div className="d-flex flex-column">
            <div className="message-content">
              <p> hello how are you </p>
            </div>
            <span className="time align-self-start">10:02AM</span>
          </div>
        </div>

        <div className="recieved-message message">
          <div className="d-flex flex-column">
            <div className="message-content">
              <p> hello how are you </p>
            </div>
            <span className="time align-self-start">10:02AM</span>
          </div>
        </div>

        <div className="sent-message message">
          <div className="d-flex flex-column">
            <div className="message-content">
              <p> i,m fine</p>
            </div>
            <span className="time align-self-end">10:00AM</span>
          </div>
        </div>

        <div className="recieved-message message">
          <div className="d-flex flex-column">
            <div className="message-content">
              <p> hello how are you </p>
            </div>
            <span className="time align-self-start">10:02AM</span>
          </div>
        </div>
      </div>

      <div className="chat-send">
        <form action="" method="post">
          <div className="input-field">
            <input type="text" placeholder={t("chat.writeHere")} />
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
          <button type="submit">
            <IconSend stroke={2} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;
