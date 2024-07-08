import { Link } from "react-router-dom";

function CommentCard({ comment }) {
  return (
    <div className="comment">
      <div className="userCommented">
        <Link to="/profile">
          <img src={comment?.user?.image} alt="صورة المستخدم" />
        </Link>
        <div className="lastUser">
          <Link to="/profile" className="name">
            {comment?.user?.name}
          </Link>
          <p className="time">
            <i className="fa-regular fa-timer"></i>{" "}
            {new Date(comment?.created_at).toUTCString()}
          </p>
        </div>
      </div>
      <p className="text">{comment?.comment}</p>
    </div>
  );
}

export default CommentCard;
