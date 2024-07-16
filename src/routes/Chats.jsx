import ChatRoom from "../features/chat/ChatRoom";
import "../Assets/styles/Chat.css";
import ChatSideBar from "../features/chat/ChatSideBar";
import { IconBrandWechat } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Chats = () => {
  const { t } = useTranslation();
  const [showChatsMenu, setShowChatsMenu] = useState(false);
  return (
    <section className="chat-section">
      <div className="container d-block">
        <button className="openTaps" onClick={() => setShowChatsMenu(true)}>
          <IconBrandWechat stroke={2} />
          <span> {t("chat.chats")} </span>
        </button>
        <div className="row">
          <div className="col-lg-4 col-12 p-2">
            <ChatSideBar
              setShowChatsMenu={setShowChatsMenu}
              showChatsMenu={showChatsMenu}
            />
          </div>
          <div className="col-lg-8 col-12 p-2">
            <ChatRoom />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chats;
