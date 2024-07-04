import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  IconCirclePlus,
  IconCircleX,
  IconPlus,
  IconRosetteDiscountCheck
} from "@tabler/icons-react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ServiceCard from "../../ui/cards/ServiceCard";
import useGetWorks from "./useGetWorks";
import useUserServices from "./../services/useUserServices";
import ConfirmationModal from "../../ui/modals/ConfirmationModal";
import AddWorkModal from "../../ui/modals/AddWorkModal";
import CertificatesTab from "./CertificatesTab";
import WorksTab from "./WorksTab";

const ProfileTabs = ({ user }) => {
  const { t } = useTranslation();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showAddWorkModal, setShowAddWorkModal] = useState(false);
  const [targetId, setTargetId] = useState(null);
  const { data: services } = useUserServices(user?.id);
  const { data: works } = useGetWorks(user?.id);

  return (
    <>
      <Tabs defaultActiveKey="about" id="uncontrolled-tab-example">
        {/* about me */}
        <Tab eventKey="about" title={t("profile.aboutMe")} className="tab_item">
          <div className="user_about">
            {user?.about ? (
              <p>{user?.about}</p>
            ) : (
              <Link to="/edit-profile">
                <IconPlus stroke={1} /> {t("profile.noAbout")}
              </Link>
            )}
          </div>
        </Tab>
        {/* services */}
        <Tab
          eventKey="service"
          title={t("profile.services")}
          className="tab_item"
        >
          <div className="services-container">
            <Link to="/add-service" className="add-service">
              <IconCirclePlus stroke={2} /> {t("profile.addService")}
            </Link>
            <div className="services_grid">
              {services?.length === 0 ? (
                <div className="noDataFound">
                  <h4>{t("profile.noService")}</h4>
                </div>
              ) : (
                <>
                  {services?.map((service) => (
                    <ServiceCard
                      canEdit={true}
                      key={service.id}
                      service={service}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </Tab>
        {/* reviews */}
        {/* <Tab
          eventKey="Rating"
          title={t("profile.reviews")}
          className="tab_item"
        >
          <UserReviewCard />
        </Tab> */}
        {/* verifications */}
        <Tab
          eventKey="documentation"
          title={t("profile.verification")}
          className="tab_item"
        >
          <div className="tab-pane">
            <ul className="verify-list">
              <li className="d-flex gap-2">
                <IconRosetteDiscountCheck stroke={2} />
                {t("profile.personalIdentification")}
              </li>
              <li className="d-flex gap-2">
                {user?.phone_verified === 1 ? (
                  <IconRosetteDiscountCheck stroke={2} />
                ) : (
                  <IconCircleX stroke={2} />
                )}
                {t("profile.phoneNumber")}
              </li>
              <li className="d-flex gap-2">
                <IconRosetteDiscountCheck stroke={2} />
                {t("profile.emailAddress")}
              </li>
            </ul>
            {user?.verified === 0 && (
              <div className="unverified-box">
                <h6>{t("profile.notVerified")}</h6>
                <a href="/verify-user">{t("profile.verifyAccount")}</a>
              </div>
            )}
          </div>
        </Tab>
        {/*  statistics */}
        <Tab
          eventKey="statistics"
          title={t("profile.statistics")}
          className="tab_item"
        >
          <div
            className="tab-pane"
            id="pills-statics"
            role="tabpanel"
            aria-labelledby="pills-statics-tab"
          >
            <ul className="statics-list p-2">
              <li className="d-flex justify-content-between">
                <h6>{t("profile.averageResponseTime")}</h6>
                <span>
                  60 <small>د</small>
                </span>
              </li>
              <li className="d-flex justify-content-between">
                <h6>{t("profile.puplidhedServices")}</h6>
                <span>{user?.service_count}</span>
              </li>
              <li className="d-flex justify-content-between">
                <h6>{t("profile.clientsNumber")}</h6>
                <span>{user?.customer_count}</span>
              </li>
            </ul>
          </div>
        </Tab>
        {/* my works */}
        <Tab
          eventKey="My works"
          title={t("profile.myWorks")}
          className="tab_item"
        >
          <WorksTab works={works} />
        </Tab>

        {/* my certificates */}
        <Tab
          eventKey="My Certifications"
          title={t("profile.myCertificates")}
          className="tab_item"
        >
          <CertificatesTab user={user} />
        </Tab>
      </Tabs>
    </>
  );
};

export default ProfileTabs;
