import React, { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CommunitySubjectCard from "../ui/cards/CommunitySubjectCard";
import AddSubjectModal from "../ui/modals/AddSubjectModal";

function CommunityDetails() {
  const location = useLocation();
  const { t } = useTranslation();
  const currentRoute = location.pathname.split("/")[1];
  const [showAddSubjectModal, setShowAddSubjectModal] = useState(false);

  return (
    <>
      <SectionHeader />
      <section className="communityDetails">
        <div className="container">
          <div className="communityHeader">
            <h3>{t("communities.worksHasBeenDone")}</h3>
            <button
              className="btn"
              onClick={() => setShowAddSubjectModal(true)}
            >
              <i className="far fa-plus"></i> {t("communities.newSubject")}
            </button>
          </div>
          <div className="content-body">
            <CommunitySubjectCard currentRoute={currentRoute} />
            <CommunitySubjectCard currentRoute={currentRoute} />
            <CommunitySubjectCard currentRoute={currentRoute} />
            <CommunitySubjectCard currentRoute={currentRoute} />
            <CommunitySubjectCard currentRoute={currentRoute} />
          </div>
        </div>
      </section>
      <AddSubjectModal
        showModal={showAddSubjectModal}
        setShowModal={setShowAddSubjectModal}
      />
    </>
  );
}

export default CommunityDetails;
