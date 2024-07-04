import React from "react";
import { Link } from "react-router-dom";
import "../Assets/styles/Chat.scss";
import rateowner3 from "../Assets/images/rateowner3.webp";
import rateowner2 from "../Assets/images/rateowner2.webp";
import paperclip from "../Assets/images/paperclip.svg";
import record from "../Assets/images/record.svg";
import chats from "../Assets/images/chats.svg";
import send from "../Assets/images/send.svg";

import dots from "../Assets/images/dots.svg";

const Chats = () => {
  return (
    <>
      {/* <!-- Chats -->*/}
      <section className="chats-section-Head">
        <button className="openTaps">
          <img src={chats} alt="" />
          <span> Chats </span>
        </button>

        <div className="chats-section">
          {/*<!-- Tab-list --> */}
          <div
            className="nav-pills side-menu"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <div className="colse">
              <img src={rateowner3} alt="" />
            </div>
            {/* <!-- tab -->*/}
            <button
              className="nav-link active d-flex justify-content-between"
              id="chat1-tab"
              data-bs-toggle="pill"
              data-bs-target="#chat1"
              type="button"
              role="tab"
              aria-controls="chat1"
              aria-selected="true"
            >
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
            {/*<!-- tab --> */}
            <button
              className="nav-link d-flex justify-content-between"
              id="chat2-tab"
              data-bs-toggle="pill"
              data-bs-target="#chat2"
              type="button"
              role="tab"
              aria-controls="chat2"
              aria-selected="false"
            >
              <img className="userImg" src={rateowner2} alt="user" />
              <div className="text-wrap">
                <h6 className="name"> خالد عوض</h6>
                <p className="lastMessage">عليكم السلام ورحمه الله </p>
                <span className="time"> 10:00AM </span>
              </div>
              <div className="adsItem">
                <p> المعلم </p>
                <img src={rateowner3} className="adImg" alt="" />
              </div>
            </button>
          </div>

          <div className="tab-content" id="v-pills-tabContent">
            {/*<!-- chat --> */}
            <div
              className="tab-pane fade show active"
              id="chat1"
              role="tabpanel"
              aria-labelledby="chat1-tab"
            >
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
                      <img src={dots} alt="" />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          {" "}
                          sold{" "}
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          {" "}
                          block{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <Link to="itemDetails.html" className="adItem">
                  <img src={rateowner3} alt="" />
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
                      <input type="text" placeholder=" write Here ..." />
                      <label className="files-input">
                        <img src={paperclip} alt="" />
                        <input
                          type="file"
                          name="userImage"
                          id="img-upload"
                          accept="image/*"
                        />
                      </label>
                      <label className="files-input">
                        <img src={record} alt="" />
                        <input type="" />
                      </label>
                    </div>
                    <button type="submit">
                      <img src={send} alt="" />
                    </button>
                  </form>
                </div>
              </div>
              {/*<!-- chat --> */}
              <div
                className="tab-pane fade"
                id="chat2"
                role="tabpanel"
                aria-labelledby="chat2-tab"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chats;
