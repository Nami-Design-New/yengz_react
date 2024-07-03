import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IconCirclePlus, IconPlus } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ServiceCard from "../../ui/cards/ServiceCard";
import useUserServices from "./../services/useUserServices";

const ProfileTabs = ({ user }) => {
  const { t } = useTranslation();
  const userId = useSelector((state) => state.authedUser.user?.id);
  const { data } = useUserServices(userId);

  console.log(data);

  data?.map((service) => {
    console.log(service);
  })

  return (
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
          <Link to="/add-service" className="add-service mb-2">
            <IconCirclePlus stroke={2} /> {t("profile.addService")}
          </Link>
          <div className="row">
            {data?.length === 0 ? (
              <div className="noDataFound">
                <h4>{t("profile.noService")}</h4>
              </div>
            ) : (
              <>
                {data?.map((service) => (
                  <div
                    key={service.id}
                    className="col-lg-4 col-md-6 col-12 p-2"
                  >
                    <ServiceCard canEdit={true} service={service} />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </Tab>
    </Tabs>
  );
};

export default ProfileTabs;
