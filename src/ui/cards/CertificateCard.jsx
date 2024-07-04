import React from "react";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import Rect from "../../Assets/images/Rect.png";

const CertificateCard = ({
  certificate,
  canEdit,
  onDeleteModalShow,
  onEditModalShow
}) => {
  return (
    <div className="workCard">
      <div className="img">
        <img src={certificate?.image || Rect} alt={certificate?.title} />
        {canEdit && (
          <div className="icons">
            <button onClick={() => onEditModalShow(certificate)}>
              <IconEdit stroke={2} />
            </button>
            <button onClick={() => onDeleteModalShow(certificate?.id)}>
              <IconTrash stroke={2} />
            </button>
          </div>
        )}
      </div>
      <h4>{certificate?.title || "مشروع"}</h4>
    </div>
  );
};

export default CertificateCard;
