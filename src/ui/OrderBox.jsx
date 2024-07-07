import av2 from "../Assets/images/av2.png";
import av1 from "../Assets/images/av1.png";
import { Link } from "react-router-dom";

function OrderBox() {
  return (
    <div className="singleRequst">
      <div className="row">
        <div className="col-md-8 p-1">
          <div className="requstPost">
            <Link to="/profile">
              <img src={av2} alt="" />
            </Link>
            <div className="postContent">
              <Link to="/reaquest-details" className="postTitle">
                ابحث عن مصمم صفحة هبوط على ووردبرس
              </Link>
              <div className="postUser">
                <Link to="/profile" className="name">
                  <i className="fa-regular fa-user"></i> محمد عصام
                </Link>
                <p className="time">
                  <i className="fa-regular fa-timer"></i> منذ 22 ساعة و6 دقائق
                </p>
              </div>
              <span className="status new"> جديد </span>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-1">
          <div className="lastInteraction">
            <Link to="/profile">
              <img src={av1} alt="" />
            </Link>
            <div className="lastUser">
              <Link to="/profile" className="name">
                محمد عصام
              </Link>
              <p className="time">
                <i className="fa-regular fa-timer"></i> آخر تفاعل منذ 5 دقائق
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderBox;
