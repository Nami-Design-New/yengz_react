import avatarPlaceholder from "../../Assets/images/avatar-placeholder-2.svg";

function SubjectCommentCard() {
  return (
    <div className="box-item column comment-item">
      <div className="userBox">
        <div className="image-wrapper">
          <img src={avatarPlaceholder} alt="" />
        </div>
        <div className="info-wrapper">
          <p>.Ahmed K</p>
          <div className="info-boxes-wrapper">
            <p className="info-box name m-0">
              <i className="fa-regular fa-timer"></i>
              منذ 5 أيام و10 ساعات
            </p>
          </div>
        </div>
      </div>
      <div className="comment-wrapper">
        <p>جميل جدا </p>
        <p>
          بس ف تصميم كان ممكن تعمل ظل افضل من كدة تحت الكورسي لاكن مشاء الله شغل
          جميل
        </p>
        <p>بالتوفيق</p>
      </div>
    </div>
  );
}

export default SubjectCommentCard;
