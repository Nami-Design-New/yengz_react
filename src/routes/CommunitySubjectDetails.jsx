import { useTranslation } from "react-i18next";
import SectionHeader from "../ui/SectionHeader";
import avatarImg from "../Assets/images/avatar.jpg";
import SubjectCommentCard from "../ui/cards/SubjectCommentCard";
import avatarPlaceholder from "../Assets/images/avatar-placeholder-2.svg";
import { useState } from "react";
import AddCommentModal from "../ui/modals/AddCommentModal";
import useGetCommunityPostDetails from "../features/community/useGetCommunityPostDetails";
import DataLoader from "../ui/DataLoader";
import { Link, useNavigate, useParams } from "react-router-dom";
import { formatTimeDifference, getTimeDifference } from "../utils/helpers";
import EmptyData from "../ui/EmptyData";
import { useSelector } from "react-redux";

function CommunitySubjectDetails() {
  const { id } = useParams();
  const { t } = useTranslation();
  const [showAddCommentModal, setShowAddCommentModal] = useState(false);
  const { isLoading, data: post } = useGetCommunityPostDetails(id);

  const isLogged = useSelector((state) => state.authedUser.isLogged);
  const navigate = useNavigate();

  function handleClickAddPost() {
    if (isLogged) {
      setShowAddCommentModal(true);
    } else {
      navigate("/login");
    }
  }

  const publisherTimeDifference = getTimeDifference(post?.user?.created_at);
  const publisherStartTime = formatTimeDifference(
    publisherTimeDifference.years,
    publisherTimeDifference.months,
    publisherTimeDifference.days,
    publisherTimeDifference.hours,
    publisherTimeDifference.minutes,
    t
  );

  return (
    <>
      <SectionHeader />
      {isLoading ? (
        <DataLoader />
      ) : (
        <section className="communityDetails communitySubjectDetails">
          <div className="container">
            <div className="communityHeader">
              <h3>{post?.title}</h3>
              <button className="btn" onClick={handleClickAddPost}>
                <i className="far fa-plus"></i> {t("communities.addComment")}
              </button>
            </div>
            <div className="content-body">
              <div className="right-wrapper">
                <div className="subject-box">
                  <div className="box-item">
                    <p>{post?.description}</p>
                  </div>
                </div>
                <div className="subject-box">
                  <div className="box-header">
                    <h5>
                      {t("communities.comments")}{" "}
                      {`(${post?.comments?.length})`}
                    </h5>
                  </div>
                  {post?.comments?.length > 0 ? (
                    post?.comments?.map((comment) => (
                      <SubjectCommentCard key={comment.id} comment={comment} />
                    ))
                  ) : (
                    <EmptyData>
                      <div className="py-4">{t("communities.noComments")}</div>
                    </EmptyData>
                  )}
                </div>
              </div>
              <div className="left-wrapper">
                <div className="subject-box">
                  <div className="box-header">
                    <h5>{t("communities.aboutSubject")}</h5>
                  </div>
                  <div className="box-item">
                    <p>{t("communities.publishTime")}</p>
                    <span>{publisherStartTime}</span>
                  </div>
                  <div className="box-item column">
                    <h6>{t("communities.subjectPublisher")}</h6>
                    <div className="userBox">
                      <Link
                        to={`/profile/${post?.user?.id}`}
                        className="image-wrapper"
                      >
                        <img src={post?.user?.image} alt="" />
                      </Link>
                      <div className="info-wrapper">
                        <p>{post?.user?.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {post?.similar_posts && (
                  <div className="subject-box">
                    <div className="box-header">
                      <h5>{t("communities.similarSubjects")}</h5>
                    </div>
                    {post?.similar_posts?.length ? (
                      post?.similar_posts?.map((post) => (
                        <Link
                          to={`/community/${post?.category_name}/${post?.id}`}
                          className="box-item no-border"
                          key={post.id}
                        >
                          <div className="image-wrapper mini">
                            <img src={post?.user?.image} alt="" />
                          </div>
                          <div className="info-wrapper">
                            <p>{post?.title}</p>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <EmptyData>
                        <div className="py-4">
                          {t("communities.noSimilarSubjects")}
                        </div>
                      </EmptyData>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
      <AddCommentModal
        showModal={showAddCommentModal}
        setShowModal={setShowAddCommentModal}
      />
    </>
  );
}

export default CommunitySubjectDetails;
