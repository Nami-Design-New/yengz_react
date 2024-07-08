import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import av2 from "../Assets/images/av2.png";
import av1 from "../Assets/images/av1.png";
import SectionHeader from "../ui/SectionHeader";
import CommentCard from "../ui/cards/CommentCard";
import useCommentsList from "../features/comments/useCommentsList";
import useServiceDetails from "../features/services/useServiceDetails";
import useCreateComment from "../features/comments/useCreateComment";
import { useTranslation } from "react-i18next";

function ServiceOrdersDetails() {
  const { t } = useTranslation();
  const id = Number(useParams().id);
  const { data: service } = useServiceDetails();
  const { data: comments } = useCommentsList();
  const { createComment } = useCreateComment();
  const [isConfirmToComment, setIsConfirmToComment] = useState(false);
  const [comment, setComment] = useState("");

  function handleConfirmToComment(e) {
    setIsConfirmToComment(e.target.checked);
  }

  function handleCommentChange(e) {
    setComment(e.target.value);
  }

  async function handleCreateComment(e) {
    e.preventDefault();
    try {
      if (isConfirmToComment && comment) {
        createComment(
          { service_id: id, comment },
          {
            onSuccess: () => {
              setComment("");
              setIsConfirmToComment(false);
            },
          }
        );
      }
    } catch (error) {
      throw new Error(error.message);
    }
    // setIsConfirmToComment(false);
  }

  return (
    <>
      <div className="section-head">
        <SectionHeader />
      </div>
      <section className="requestDetails">
        <div className="container">
          <div className="postDetails w-100  p-2">
            <span className="status new">جديد</span>
            <p>{service?.title}</p>
            <div className="postUser">
              <Link to={`/profile/${service?.user?.id}`} className="name">
                <i className="fa-regular fa-user"></i> {service?.user?.name}
              </Link>
              <p className="time m-0">
                <i className="fa-regular fa-timer"></i>{" "}
                {service?.user?.last_login}
              </p>
              <button className="btn btn-dark ms-auto"> تم التعاقد </button>
            </div>
          </div>
          {/* <!-- Comments Section -->**/}
          <div className="row">
            <div className="col-md-12 p-2">
              {/*<!-- All Comments -->*/}
              <div className="allComments">
                <div className="title">
                  <h5> {t("comments.comments")} </h5>
                </div>
                {comments &&
                  comments.length > 0 &&
                  comments.map((comment) => (
                    <CommentCard comment={comment} key={comment.id} />
                  ))}
              </div>
              {/*<!-- Add Comment Form -->*/}

              <div className="addComment">
                <div className="title">
                  <h5> {t("comments.addComment")} </h5>
                </div>
                <form onSubmit={handleCreateComment}>
                  <div className="input-field mt-2 mb-4">
                    <textarea
                      name="comment"
                      id="comment"
                      placeholder={t("comments.commentPlaceholder")}
                      value={comment}
                      onChange={handleCommentChange}
                    ></textarea>
                  </div>
                  <div className="input-field flex-row gap-4 ps-3">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      className="bg-transparent p-0 w-auto h-auto"
                      checked={isConfirmToComment}
                      onChange={handleConfirmToComment}
                    />
                    <label htmlFor="terms">
                      {t("comments.readAndAccept")}{" "}
                      <Link to="/terms">
                        {t("comments.conditionsAndTerms")}
                      </Link>
                    </label>
                  </div>
                  <div className="d-flex justify-content-start py-4">
                    <button type="submit" className="btn btn-success px-5">
                      {t("comments.publish")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceOrdersDetails;
