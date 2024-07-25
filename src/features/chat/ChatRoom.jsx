import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import rateowner3 from "../../Assets/images/rateowner3.webp";
import service from "../../Assets/images/bann.webp";
import { useSelector } from "react-redux";
import { createMessage } from "../../services/apiChats";
import { useQueryClient } from "@tanstack/react-query";
import {
  IconCircleOff,
  IconDotsVertical,
  IconInfoCircle,
  IconMicrophone,
  IconPaperclip,
  IconPlayerPause,
  IconSend
} from "@tabler/icons-react";

const ChatRoom = ({ chat }) => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const formRef = useRef(null);
  const chatContainerRef = useRef(null);
  const recordingIntervalRef = useRef(null);
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

  useEffect(() => {
    return () => {
      if (recordingIntervalRef.current) {
        clearInterval(recordingIntervalRef.current);
      }
    };
  }, []);

  const handleSendMessage = async () => {
    try {
      setLoading(true);
      await createMessage(message, queryClient);
      setMessage({ ...message, message: "", type: "" });
      formRef.current.reset();
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSendMessage();
  };

  const startRecording = async () => {
    setIsRecording(true);
    setRecordingTime(0);
    const audioChunks = [];

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorderInstance = new MediaRecorder(stream);

      mediaRecorderInstance.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunks.push(event.data);
        }
      };

      mediaRecorderInstance.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });

        console.log("Audio blob:", audioBlob.type);
        console.log("Audio blob:", audioBlob.size);
        console.log("Audio blob:", audioBlob);

        setMessage((prevMessage) => ({
          ...prevMessage,
          message: audioBlob,
          type: "audio"
        }));

        mediaRecorderInstance.stream.getTracks().forEach((track) => {
          track.stop();
        });

        setRecordingTime(0);
        setIsRecording(false);
        clearInterval(recordingIntervalRef.current);
      };

      mediaRecorderInstance.start();
      setMediaRecorder(mediaRecorderInstance);
      startRecordingTimer();
    } catch (err) {
      console.error("Error accessing microphone:", err);
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
    }
    clearInterval(recordingIntervalRef.current);
  };

  const startRecordingTimer = () => {
    recordingIntervalRef.current = setInterval(() => {
      setRecordingTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const formatRecordingTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
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
          <p>{chat?.service?.title}</p>
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
                  : "received-message"
              }`}
              key={message?.id}
            >
              <div className="d-flex flex-column">
                <div className="message-content">
                  {message?.type === "text" && <p>{message?.message}</p>}
                  {message?.type === "audio" && (
                    <audio controls src={message?.message} />
                  )}
                  {message?.type === "image" && (
                    <img
                      style={{
                        aspectRatio: 1 / 1,
                        width: "300px",
                        objectFit: "contain"
                      }}
                      src={message?.message}
                      alt=""
                    />
                  )}
                </div>
                <span className={message?.from_id === user?.id ? "sen" : "rec"}>
                  10:00AM
                </span>
              </div>
            </div>
          ))}
      </div>

      <div className="chat-send">
        <form onSubmit={handleSubmit} ref={formRef}>
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
                onChange={(e) =>
                  setMessage({
                    ...message,
                    message: e.target.files[0],
                    type: e.target.files[0].type.startsWith("image/")
                      ? "image"
                      : "file"
                  })
                }
                type="file"
                name="userImage"
                id="img-upload"
                accept="image/*"
              />
            </label>
            {isRecording ? (
              <label className="files-input" onClick={stopRecording}>
                <IconPlayerPause stroke={2} />
                <input type="" />
              </label>
            ) : (
              <label className="files-input" onClick={startRecording}>
                <IconMicrophone stroke={2} />
                <input type="" />
              </label>
            )}
            {recordingTime > 0 && (
              <span>{formatRecordingTime(recordingTime)}</span>
            )}
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
