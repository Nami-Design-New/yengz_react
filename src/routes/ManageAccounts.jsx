import { useTranslation } from "react-i18next";
import SectionHeader from "../ui/SectionHeader";
import BankAcountCard from "../ui/cards/BankAcountCard";
import { useState } from "react";
import AddAccountModal from "../ui/modals/AddAccountModal";
import useBanksList from "../features/Banks/useBanksList";
import DataLoader from "../ui/DataLoader";

function ManageAccounts() {
  const { t } = useTranslation();
  const [targetBank, setTargetBank] = useState(null);
  const [showAddAccountModal, setShowAddAccountModal] = useState(false);
  const { isLoading, data: banks } = useBanksList();

  return (
    <>
      <SectionHeader />
      <section className="balance_section">
        <div className="container">
          <div className="blanceHeader">
            <h3>{t("manageAccounts.headerText")}</h3>
            <div className="btns-wrapper">
              <button
                className="btn"
                onClick={() => setShowAddAccountModal(true)}
              >
                <i className="far fa-plus"></i>
                {t("manageAccounts.addAccount")}
              </button>
            </div>
          </div>
          {isLoading ? (
            <DataLoader />
          ) : (
            banks &&
            banks?.length > 0 &&
            banks?.map((bank) => (
              <div className="content-body" key={bank?.id}>
                <BankAcountCard
                  setShowModal={setShowAddAccountModal}
                  setTargetBank={setTargetBank}
                  bank={bank}
                  key={bank?.id}
                  targetBank={targetBank}
                />
              </div>
            ))
          )}
        </div>
      </section>
      <AddAccountModal
        targetBank={targetBank}
        setTargetBank={setTargetBank}
        showModal={showAddAccountModal}
        setShowModal={setShowAddAccountModal}
      />
    </>
  );
}

export default ManageAccounts;
