import { IconRosetteDiscountCheckFilled } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import StarsList from "../StarsList";
import { useTranslation } from "react-i18next";
import avatarPlaceholder from "../../Assets/images/avatar-placeholder-2.svg";

function FreelancerCard({ freelancer, truncate }) {
  const { t } = useTranslation();
  const [imgError, setImgError] = useState(false);

  return (
    <Link to={`/profile/${freelancer?.id}`} className="freelancerCard">
      <div className="d-flex justify-content-between">
        <div className="info">
          <div className="img">
            <img
              src={imgError ? avatarPlaceholder : freelancer.image}
              alt={freelancer?.name}
              onError={() => setImgError(true)}
            />
            {freelancer?.verified === 1 && (
              <span className="status">
                <IconRosetteDiscountCheckFilled />
              </span>
            )}
          </div>
          <div className="content">
            <h6>{freelancer?.name}</h6>
            <ul>
              <li>
                <i className="fa-regular fa-cubes"></i> {t("servicesCount")}:{" "}
                {freelancer?.service_count}
              </li>
            </ul>
          </div>
        </div>
        <StarsList rate={freelancer?.rate} />
      </div>
      <p>{truncate(freelancer?.about)}</p>
    </Link>
  );
}

export default FreelancerCard;
