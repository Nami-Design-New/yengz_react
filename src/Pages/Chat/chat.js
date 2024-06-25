import rateowner3 from "../../Assets/images/rateowner3.webp";
import rateowner2 from "../../Assets/images/rateowner2.webp";

const Chat = () => {
  return (
    <main>
      <section className="chat-section container">
        <button className="openTaps">
          <i className="fa-solid fa-user-group"></i>
        </button>
        <div className="row">
          {/* <!-- <div className="d-flex align-items-start"> -->*/}

          {/* <!-- Tab-list -->  */}

          <div
            className="nav flex-column nav-pills  col-lg-5 col-12 side-menu"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <div className="colse">
              <i className="fa-light fa-xmark"></i>
            </div>
            {/*<!-- tab --> */}

            <button
              className="nav-link active d-flex justify-content-between"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              <div className="image-wrap">
                <img src={rateowner2} alt="user" />
              </div>

              <div className="text-wrap">
                <div className="d-flex justify-content-between w-100">
                  <h6>خالد عوض</h6>
                  <span className="time">18 / 10 / 2023</span>
                </div>
                <p>نظام الكتروني لعيادة طبية</p>
                <div className="d-flex justify-content-between align-items-center">
                  <h5>وعليكم السلام ورحمة الله وبركاته</h5>
                </div>
              </div>
            </button>
            {/*<!-- tab --> */}
            <button
              className="nav-link d-flex justify-content-between"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              <div className="image-wrap">
                <img src={rateowner3} alt="user" />
              </div>
              <div className="text-wrap">
                <div className="d-flex justify-content-between w-100">
                  <h6>خالد عوض</h6>
                  <span className="time">20 / 10 / 2023</span>
                </div>
                <p>انشاء متجر الكتروني احترافي على منصة ووردبريس </p>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <h5 className="me">150 دولار ان شاء الله</h5>
                  <span className="message-number">2</span>
                </div>
              </div>
            </button>
          </div>
          <div
            className="tab-content col-lg-7 col-12 pe-lg-4 pe-2 ps-lg-4 ps-2"
            id="v-pills-tabContent"
          >
            {/*<!-- chat -->*/}

            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <div className="chat-container">
                <div className="chat-head">
                  <div className="d-flex align-items-center gap-3">
                    <div className="img">
                      <img src={rateowner2} alt="" />
                    </div>
                    <h6 className="name">خالد عوض</h6>
                  </div>
                  <button className="setting">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </button>
                </div>
                <div className="ordered-service">
                  <p>انشاء متجر الكتروني احترافي على منصة ووردبريس ووكومرس</p>
                </div>
                <div className="inner-container">
                  <div className="sent-message message">
                    <div className="d-flex flex-column">
                      <div className="message-content">
                        <p>السلام عليكم</p>
                      </div>
                      <span className="time align-self-end">10:00 ص</span>
                    </div>
                  </div>
                  <div className="recieved-message message">
                    <div className="d-flex flex-column">
                      <div className="message-content">
                        <p>وعليكم السلام ورحمة الله </p>
                      </div>
                      <span className="time align-self-start">10:02 ص</span>
                    </div>
                  </div>
                </div>
                <div className="chat-send">
                  <form action="" method="post">
                    <div className="input-field">
                      <input type="text" placeholder="اكتب هنا ..." />
                      <label className="files-input">
                        <i className="fa-light fa-paperclip"></i>
                        <input
                          type="file"
                          name="userImage"
                          id="img-upload"
                          accept="image/*"
                        />
                      </label>
                    </div>
                    <button type="submit">
                      <i className="fa-light fa-paper-plane-top"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/*<!-- chat -->*/}
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <div className="chat-container">
                <div className="chat-head">
                  <div className="d-flex align-items-center gap-3">
                    <div className="img">
                      <img src={rateowner3} alt="" />
                    </div>
                    <h6 className="name">خالد عوض</h6>
                  </div>
                  <button className="setting">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </button>
                </div>
                <div className="ordered-service">
                  <p>انشاء متجر الكتروني احترافي على منصة ووردبريس ووكومرس</p>
                </div>
                <div className="inner-container">
                  <div className="sent-message message">
                    <div className="d-flex flex-column">
                      <div className="message-content">
                        <p>السلام عليكم</p>
                      </div>
                      <span className="time align-self-end">10:00 ص</span>
                    </div>
                  </div>
                  <div className="recieved-message message">
                    <div className="d-flex flex-column">
                      <div className="message-content">
                        <p>وعليكم السلام ورحمة الله </p>
                      </div>
                      <span className="time align-self-start">10:02 ص</span>
                    </div>
                  </div>
                </div>
                <div className="chat-send">
                  <form action="" method="post">
                    <div className="input-field">
                      <input type="text" placeholder="اكتب هنا ..." />
                      <label className="files-input">
                        <i className="fa-light fa-paperclip"></i>
                        <input
                          type="file"
                          name="userImage"
                          id="img-upload"
                          accept="image/*"
                        />
                      </label>
                    </div>
                    <button type="submit">
                      <i className="fa-light fa-paper-plane-top"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/*<!-- </div> -->*/}
        </div>
      </section>
    </main>
  );
};

export default Chat;
