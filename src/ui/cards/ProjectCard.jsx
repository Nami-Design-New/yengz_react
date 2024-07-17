import { Link } from "react-router-dom";
import { formatTimeDifference, getTimeDifference } from "../../utils/helpers";
import { useTranslation } from "react-i18next";
import useTruncateString from "../../hooks/useTruncateString";

function ProjectCard({ order }) {
  const { t } = useTranslation();
  const timeDifference = getTimeDifference(order.created_at);
  const formattedTime = formatTimeDifference(
    timeDifference.years,
    timeDifference.months,
    timeDifference.days,
    timeDifference.hours,
    timeDifference.minutes,
    t
  );
  const truncatedText = useTruncateString(order?.description);
  return (
    <Link to={`/projects/${order?.id}`} className="singleRequst">
      <div className="row">
        <div className="col-12 p-0">
          <div className="requstPost">
            <Link to={`/profile/${order?.user?.id}`}>
              <img src={order?.user?.image} alt="" />
            </Link>
            <div className="postContent">
              <Link to={`/projects/${order?.id}`} className="postTitle">
                {order?.title}
              </Link>
              <div className="postUser">
                <Link to={`/profile/${order?.user?.id}`} className="name">
                  <i className="fa-regular fa-user"></i> {order?.user?.name}
                </Link>
                <p className="time m-0">
                  <i className="fa-regular fa-timer"></i>
                  {formattedTime}
                </p>
              </div>
            </div>
          </div>
          <p className="m-0 mt-3">{truncatedText}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
