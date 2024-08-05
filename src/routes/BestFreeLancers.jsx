import React from "react";
import SectionHeader from "../ui/SectionHeader";
import useGetBestFreelancers from "../features/home/useGetBestFreelancers";
import StarsList from "../ui/StarsList";
import { IconRosetteDiscountCheckFilled } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import DataLoader from "../ui/DataLoader";

const BestFreeLancers = () => {
  const { t } = useTranslation();
  const { data: freelancers, isLoading } = useGetBestFreelancers();
  return (
    <>
      <SectionHeader />
      {isLoading ? (
        <DataLoader />
      ) : (
        <section className="best-freelancers">
          <div className="container">
            <div className="row">
              {freelancers?.data?.map((freelancer) => (
                <div className="col-lg-6 col-12 p-2" key={freelancer?.id}>
                  <Link
                    to={`/profile/${freelancer?.id}`}
                    className="freelancerCard"
                  >
                    <div className="info">
                      <div className="img">
                        <img src={freelancer?.image} alt={freelancer?.name} />
                        {freelancer?.verified === 1 && (
                          <span className="status">
                            <IconRosetteDiscountCheckFilled />
                          </span>
                        )}
                      </div>
                      <div className="content">
                        <h6>{freelancer?.name}</h6>
                        <ul>
                          <li>
                            <i className="fa-regular fa-cubes"></i>{" "}
                            {t("servicesCount")}: {freelancer?.service_count}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <StarsList rate={freelancer?.rate} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BestFreeLancers;
