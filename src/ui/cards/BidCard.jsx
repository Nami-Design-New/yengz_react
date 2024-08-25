import React from "react";
import { Link } from "react-router-dom";
import {
  IconCalendar,
  IconClock,
  IconMoneybag,
  IconUser,
} from "@tabler/icons-react";
import { formatTimeDifference, getTimeDifference } from "../../utils/helpers";
import { useTranslation } from "react-i18next";

function BidCard({ bid }) {
  const { t } = useTranslation();
  console.log(bid);

  const timeDifference = getTimeDifference(bid?.created_at);
  const formattedTime = formatTimeDifference(
    timeDifference.years,
    timeDifference.months,
    timeDifference.days,
    timeDifference.hours,
    timeDifference.minutes,
    t
  );

  return (
    <Link to="/projects/1" className="bid-card">
      <div className="d-flex align-items-center w-100 justify-content-between">
        <h4>{bid?.project?.title}</h4>
        <span className={`bid-status ${bid?.status}`}>
          {bid?.project?.status_name}
        </span>
      </div>
      <ul>
        <li>
          <IconUser stroke={1.5} />
          <span> {bid?.project?.user?.name}</span>
        </li>
        <li>
          <IconClock stroke={1.5} />
          <span> {`${t("projects.publishedScience")} ${formattedTime}`}</span>
        </li>
        <li>
          <IconMoneybag stroke={1.5} />
          <span>{`$${bid?.price}`}</span>
        </li>
        <li>
          <IconCalendar stroke={1.5} />
          <span>{`${t("projects.deliveryTime")} ${bid?.days} ${t(
            "projects.days"
          )}`}</span>
        </li>
      </ul>
      <p>{bid?.project?.description}</p>
    </Link>
  );
}

export default BidCard;
