import React from "react";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import Rect from "../../Assets/images/Rect.png";

const WorkCard = ({ work, canEdit, onDeleteModalShow, onEditModalShow }) => {
  return (
    <div className="workCard">
      <div className="img">
        <img src={work?.images[0]?.image || Rect} alt="" />
        {canEdit && (
          <div className="icons">
            <button onClick={() => onEditModalShow(work)}>
              <IconEdit stroke={2} />
            </button>
            <button onClick={() => onDeleteModalShow(work?.id)}>
              <IconTrash stroke={2} />
            </button>
          </div>
        )}
      </div>
      <h4>{work?.title || "مشروع"}</h4>
    </div>
  );
};

export default WorkCard;
