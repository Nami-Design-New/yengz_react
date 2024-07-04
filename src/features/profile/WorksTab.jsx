import React, { useState } from "react";
import { toast } from "react-toastify";
import { IconCirclePlus } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import AddWorkModal from "../../ui/modals/AddWorkModal";
import WorkCard from "../../ui/cards/WorkCard";
import ConfirmationModal from "../../ui/modals/ConfirmationModal";
import { deleteWork } from "../../services/apiWorks";

const WorksTab = ({ works }) => {
  const { t } = useTranslation();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showAddWorkModal, setShowAddWorkModal] = useState(false);
  const [targetId, setTargetId] = useState(null);
  const [targetWork, setTargetWork] = useState(null);
  const queryClient = useQueryClient();

  const onDeleteModalShow = (id) => {
    setShowConfirmation(true);
    setTargetId(id);
  };

  const onEditModalShow = (work) => {
    setShowAddWorkModal(true);
    setTargetWork(work);
  };

  const handleDelete = async () => {
    try {
      await deleteWork(targetId, queryClient);
      toast.success(t("profile.workDeletedSuccessfully"));
    } catch (error) {
      toast.error(t("profile.errorDeletingWork"));
      throw new Error(error.message);
    } finally {
      setShowConfirmation(false);
    }
  };

  return (
    <>
      <div className="tab-pane ">
        <div className="services-container">
          <button
            onClick={() => setShowAddWorkModal(true)}
            className="add-service"
          >
            <IconCirclePlus stroke={2} /> {t("profile.addWork")}
          </button>
          <div className="services_grid">
            {works?.length === 0 ? (
              <div className="noDataFound">
                <h4>{t("profile.noWorksFound")}</h4>
              </div>
            ) : (
              <>
                {works?.map((work) => (
                  <WorkCard
                    canEdit={true}
                    key={work.id}
                    work={work}
                    onEditModalShow={onEditModalShow}
                    onDeleteModalShow={onDeleteModalShow}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      <ConfirmationModal
        showModal={showConfirmation}
        setShowModal={setShowConfirmation}
        type="delete"
        eventFun={handleDelete}
        buttonText={t("profile.delete")}
        text={t("profile.areYouSureYouWantToDelete")}
      />

      <AddWorkModal
        targetWork={targetWork}
        setTargetWork={setTargetWork}
        showModal={showAddWorkModal}
        setShowModal={setShowAddWorkModal}
      />
    </>
  );
};

export default WorksTab;
