import { useTranslation } from "react-i18next";
import SectionHeader from "../ui/SectionHeader";
import BankAcountCard from "../ui/cards/BankAcountCard";
import { useState } from "react";
import AddAccountModal from "../ui/modals/AddAccountModal";

function ManageAccounts() {
  const { t } = useTranslation();
  const [targetAccount, setTargetAccount] = useState(null);
  const [showAddAccountModal, setShowAddAccountModal] = useState(false);

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
          <div className="content-body">
            <BankAcountCard />
            <BankAcountCard />
          </div>
        </div>
      </section>
      <AddAccountModal
        targetAccount={targetAccount}
        setTargetAccount={setTargetAccount}
        showModal={showAddAccountModal}
        setShowModal={setShowAddAccountModal}
      />
    </>
  );
}

export default ManageAccounts;
