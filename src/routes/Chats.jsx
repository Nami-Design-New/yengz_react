import { useEffect, useState } from "react";
import { IconBrandWechat } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import ChatSideBar from "../features/chat/ChatSideBar";
import ChatRoom from "../features/chat/ChatRoom";
import useGetChats from "../features/chat/useGetChats";
import Lottie from "react-lottie";
import DataLoader from "./../ui/DataLoader";
import useGetChat from "../features/chat/useGetChat";
import "../Assets/styles/Chat.css";

const Chats = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../Assets/lotties/chat.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const { t } = useTranslation();
  const [showChatsMenu, setShowChatsMenu] = useState(false);
  const [targetChat, setTargetChat] = useState(null);
  const { data: chats, isLoading } = useGetChats();

  const { data: chat, isLoading: isChatLoading } = useGetChat({
    request_type: sessionStorage.getItem("request_type"),
    owner_id: sessionStorage.getItem("owner_id"),
    applied_id: sessionStorage.getItem("applied_id"),
    request_id: sessionStorage.getItem("request_id")
  });

  useEffect(() => {
    if (chat?.id) {
      setTargetChat(chat);
    } else {
      setTargetChat(null);
    }
  }, [chat]);

  return isLoading ? (
    <DataLoader />
  ) : (
    <section className="chat-section">
      <div className="container d-block">
        <button className="openTaps" onClick={() => setShowChatsMenu(true)}>
          <IconBrandWechat stroke={2} />
          <span> {t("chat.chats")} </span>
        </button>
        <div className="row">
          {chats?.length > 0 ? (
            <>
              <div className="col-lg-4 col-12 p-2">
                <ChatSideBar
                  chats={chats}
                  setTargetChat={setTargetChat}
                  targetChat={targetChat}
                  showChatsMenu={showChatsMenu}
                  setShowChatsMenu={setShowChatsMenu}
                />
              </div>
              <div className="col-lg-8 col-12 p-2">
                {targetChat ? (
                  <>
                    {isChatLoading ? <DataLoader /> : <ChatRoom chat={chat} />}
                  </>
                ) : (
                  <div className="lottie_player_holder">
                    <Lottie options={defaultOptions} height={250} width={250} />
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="lottie_player_holder">
              <Lottie options={defaultOptions} height={250} width={250} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Chats;
