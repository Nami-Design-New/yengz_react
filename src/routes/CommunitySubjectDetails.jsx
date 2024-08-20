import { useTranslation } from "react-i18next";
import SectionHeader from "../ui/SectionHeader";
import avatarImg from "../Assets/images/avatar.jpg";
import SubjectCommentCard from "../ui/cards/SubjectCommentCard";
import avatarPlaceholder from "../Assets/images/avatar-placeholder-2.svg";
import { useState } from "react";
import AddCommentModal from "../ui/modals/AddCommentModal";

function CommunitySubjectDetails() {
  const { t } = useTranslation();
  const [showAddCommentModal, setShowAddCommentModal] = useState(false);

  return (
    <>
      <SectionHeader />
      <section className="communityDetails communitySubjectDetails">
        <div className="container">
          <div className="communityHeader">
            <h3>{t("communities.subjectHeader")}</h3>
            <button className="btn" onClick={() => setShowAddCommentModal(true)}>
              <i className="far fa-plus"></i> {t("communities.addComment")}
            </button>
          </div>
          <div className="content-body">
            <div className="right-wrapper">
              <div className="subject-box">
                <div className="box-item">
                  <p>{t("communities.subjectWork")}</p>
                </div>
              </div>
              <div className="subject-box">
                <div className="box-header">
                  <h5>
                    {t("communities.comments")} {`(4)`}
                  </h5>
                </div>
                <SubjectCommentCard />
                <SubjectCommentCard />
                <SubjectCommentCard />
                <SubjectCommentCard />
              </div>
            </div>
            <div className="left-wrapper">
              <div className="subject-box">
                <div className="box-header">
                  <h5>{t("communities.aboutSubject")}</h5>
                </div>
                <div className="box-item">
                  <p>{t("communities.publishTime")}</p>
                  <span>منذ 13 ساعة ودقيقة </span>
                </div>
                <div className="box-item column">
                  <h6>{t("communities.subjectPublisher")}</h6>
                  <div className="userBox">
                    <div className="image-wrapper">
                      <img src={avatarImg} alt="" />
                    </div>
                    <div className="info-wrapper">
                      <p>عمرو م.</p>
                      <div className="info-boxes-wrapper">
                        <p className="info-box name m-0">
                          <i className="fa-regular fa-user"></i>
                          {t("communities.newSeller")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="subject-box">
                <div className="box-header">
                  <h5>{t("communities.latestContributions")}</h5>
                </div>
                <div className="box-item no-border">
                  <div className="image-wrapper mini">
                    <img src={avatarPlaceholder} alt="" />
                  </div>
                  <div className="info-wrapper">
                    <p>تصميم لوجو احترافي</p>
                  </div>
                </div>
                <div className="box-item no-border">
                  <div className="image-wrapper mini">
                    <img src={avatarPlaceholder} alt="" />
                  </div>
                  <div className="info-wrapper">
                    <p>تصميم لوجو احترافي</p>
                  </div>
                </div>
                <div className="box-item no-border">
                  <div className="image-wrapper mini">
                    <img src={avatarPlaceholder} alt="" />
                  </div>
                  <div className="info-wrapper">
                    <p>تصميم لوجو احترافي</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AddCommentModal
        showModal={showAddCommentModal}
        setShowModal={setShowAddCommentModal}
      />
    </>
  );
}

export default CommunitySubjectDetails;
