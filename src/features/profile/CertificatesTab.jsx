import React, { useState } from "react";
import { toast } from "react-toastify";
import { IconCirclePlus } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import { deleteCertificate } from "../../services/apiCertificate";
import useGetCertificates from "./useGetCertificates";
import CertificateCard from "../../ui/cards/CertificateCard";
import ConfirmationModal from "../../ui/modals/ConfirmationModal";
import AddCertificateModal from "../../ui/modals/AddCertificateModal";

const CertificatesTab = ({ user }) => {
  const queryClient = useQueryClient();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showAddCertificateModal, setShowAddCertificateModal] = useState(false);
  const [targetId, setTargetId] = useState(null);
  const [targetCertificate, setTargetCertificate] = useState(null);
  const { t } = useTranslation();
  const { data: certificates } = useGetCertificates(user?.id);

  const onDeleteModalShow = (id) => {
    setShowConfirmation(true);
    setTargetId(id);
  };

  const onEditModalShow = (certificate) => {
    setShowAddCertificateModal(true);
    setTargetCertificate(certificate);
  };

  const handleDelete = async () => {
    try {
      await deleteCertificate(targetId, queryClient);
      toast.success(t("profile.certificateDeletedSuccessfully"));
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setShowConfirmation(false);
    }
  };

  return (
    <div className="tab-pane ">
      <div className="services-container">
        <button
          onClick={() => setShowAddCertificateModal(true)}
          className="add-service"
        >
          <IconCirclePlus stroke={2} /> {t("profile.addCertificate")}
        </button>
        <div className="services_grid">
          {certificates?.length === 0 ? (
            <div className="noDataFound">
              <h4>{t("profile.noCertificatesFound")}</h4>
            </div>
          ) : (
            <>
              {certificates?.map((cer) => (
                <CertificateCard
                  canEdit={true}
                  key={cer.id}
                  certificate={cer}
                  onEditModalShow={onEditModalShow}
                  onDeleteModalShow={onDeleteModalShow}
                />
              ))}
            </>
          )}
        </div>
      </div>
      <ConfirmationModal
        showModal={showConfirmation}
        setShowModal={setShowConfirmation}
        type="delete"
        eventFun={handleDelete}
        buttonText={t("profile.delete")}
        text={t("profile.areYouSureYouWantToDeleteCertificate")}
      />
      <AddCertificateModal
      setTargetCertificate={setTargetCertificate}
        targetCertificate={targetCertificate}
        showModal={showAddCertificateModal}
        setShowModal={setShowAddCertificateModal}
      />
    </div>
  );
};

export default CertificatesTab;
