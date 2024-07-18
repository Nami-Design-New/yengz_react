import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { deleteService } from "../../services/apiServices";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import {
  IconCirclePlus,
  IconPlus,
  IconRosetteDiscountCheck,
  IconBrandXamarin
} from "@tabler/icons-react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ServiceCard from "../../ui/cards/ServiceCard";
import useGetWorks from "./useGetWorks";
import useUserServices from "../services/useUserServices";
import CertificatesTab from "./CertificatesTab";
import WorksTab from "./WorksTab";
import useGetUserProjects from "./../projects/useGetUserProjects";
import ProjectCard from "../../ui/cards/ProjectCard";
import DataLoader from "../../ui/DataLoader";

const ProfileTabs = ({ user, isMyAccount }) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const { data: services } = useUserServices(user?.id);
  const { data: myProjects, isLoading } = useGetUserProjects(user?.id);
  const { data: works } = useGetWorks(user?.id);

  const handleDeleteService = async (id) => {
    try {
      await deleteService(id, queryClient);
      toast.success(t("addService.serviceDeleted"));
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Tabs defaultActiveKey="about" id="uncontrolled-tab-example">
        {/* about me */}
        <Tab eventKey="about" title={t("profile.aboutMe")} className="tab_item">
          <div className="user_about">
            {user?.about ? (
              <p>{user?.about}</p>
            ) : (
              <>
                {isMyAccount && (
                  <Link to="/edit-profile">
                    <IconPlus stroke={1} /> {t("profile.noAbout")}
                  </Link>
                )}
              </>
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
            {isMyAccount && (
              <Link to="/add-service" className="add-service">
                <IconCirclePlus stroke={2} /> {t("profile.addService")}
              </Link>
            )}

            <div className="services_grid">
              {services?.length === 0 ? (
                <div className="noDataFound">
                  <h4>{t("profile.noService")}</h4>
                </div>
              ) : (
                <>
                  {services?.map((service) => (
                    <ServiceCard
                      canEdit={isMyAccount}
                      key={service.id}
                      service={service}
                      handleDelete={handleDeleteService}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </Tab>

        {/* projects */}
        <Tab
          eventKey="projects"
          title={t("profile.projects")}
          className="tab_item"
        >
          <div className="services-container">
            {isMyAccount && (
              <Link to="/add-project" className="add-service mb-3">
                <IconCirclePlus stroke={2} /> {t("routes.add-project")}
              </Link>
            )}
            {isLoading ? (
              <DataLoader />
            ) : (
              <div className="projects_wrapper">
                {myProjects?.length === 0 ? (
                  <div className="noDataFound">
                    <h4>{t("profile.noProjects")}</h4>
                  </div>
                ) : (
                  <>
                    {myProjects?.map((project) => (
                      <ProjectCard key={project?.id} project={project} />
                    ))}
                  </>
                )}
              </div>
            )}
          </div>
        </Tab>

        {/* verifications */}
        <Tab
          eventKey="documentation"
          title={t("profile.verification")}
          className="tab_item"
        >
          <div className="tab-pane">
            <ul className="verify-list">
              <li className="d-flex gap-2">
                {user?.verified === 1 ? (
                  <IconRosetteDiscountCheck stroke={2} />
                ) : (
                  <IconBrandXamarin className="tabler-danger" stroke={2} />
                )}
                {t("profile.personalIdentification")}
              </li>
              <li className="d-flex gap-2">
                {user?.phone_verified === 1 ? (
                  <IconRosetteDiscountCheck stroke={2} />
                ) : (
                  <IconBrandXamarin className="tabler-danger" stroke={2} />
                )}
                {t("profile.phoneNumber")}
              </li>
              <li className="d-flex gap-2">
                <IconRosetteDiscountCheck stroke={2} />
                {t("profile.emailAddress")}
              </li>
            </ul>
            {isMyAccount && (
              <>
                {user?.verified === 0 && (
                  <div className="unverified-box">
                    <h6>{t("profile.notVerified")}</h6>
                    <Link to="/verify-user">{t("profile.verifyAccount")}</Link>
                  </div>
                )}
              </>
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
          <WorksTab works={works} isMyAccount={isMyAccount} />
        </Tab>

        {/* my certificates */}
        <Tab
          eventKey="My Certifications"
          title={t("profile.myCertificates")}
          className="tab_item"
        >
          <CertificatesTab user={user} isMyAccount={isMyAccount} />
        </Tab>
      </Tabs>
    </>
  );
};

export default ProfileTabs;
