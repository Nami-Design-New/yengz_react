import React from "react";
import { IconEdit, IconTrash } from "@tabler/icons-react";

const CertificateCard = ({
  certificate,
  canEdit,
  onDeleteModalShow,
  onEditModalShow,
  onClick
}) => {
  return (
    <div className="workCard" onClick={() => onClick(certificate)}>
      <div className="img">
        <img src={certificate?.image} alt={certificate?.title} />
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
      <h4>{certificate?.title}</h4>
    </div>
  );
};

export default CertificateCard;
