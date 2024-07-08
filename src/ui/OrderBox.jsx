import { Link } from "react-router-dom";

function OrderBox({ order }) {
  return (
    <Link to={`/service-orders/${order.id}`} className="singleRequst">
      <div className="row">
        <div className="col-md-8 p-1">
          <div className="requstPost">
            <Link to="/profile">
              <img src={order?.user?.image} alt="" />
            </Link>
            <div className="postContent">
              <Link to="/reaquest-details" className="postTitle">
                {order?.service?.title}
              </Link>
              <div className="postUser">
                <Link to="/profile" className="name">
                  <i className="fa-regular fa-user"></i> {order?.user?.name}
                </Link>
                <p className="time m-0">
                  <i className="fa-regular fa-timer"></i>
                  {order?.user?.last_login}
                </p>
              </div>
              <span className="status new"> {order.status} </span>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-1">
          <div className="lastInteraction">
            <Link to="/profile">
              <img src={order?.service?.user?.image} alt="" />
            </Link>
            <div className="lastUser">
              <Link to="/profile" className="name">
                {order?.service?.user?.name}
              </Link>
              <p className="time">
                <i className="fa-regular fa-timer"></i>{" "}
                {order?.user?.last_login}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default OrderBox;
