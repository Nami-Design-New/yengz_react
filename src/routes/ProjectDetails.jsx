import React from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SectionHeader from "../ui/SectionHeader";
import useGetProject from "./../features/projects/useGetProject";
import DataLoader from "../ui/DataLoader";
import AboutProjectCard from "../ui/cards/AboutProjectCard";
import AddOffer from "../features/projects/AddOffer";
import useGetProjectRequests from "../features/projects/useGetProjectRequests";
import OfferCard from "../ui/cards/OfferCard";

function ProjectDetails() {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data: project, isLoading } = useGetProject();
  const { data: requests, isLoading: isLoadingRequests } =
    useGetProjectRequests(id, "global");

  return isLoading || isLoadingRequests ? (
    <DataLoader />
  ) : (
    <>
      <SectionHeader title={project?.title} />
      <section className="requestDetails">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 p-2 d-flex flex-column gap-3">
              {/* post details */}
              <div className="postDetails w-100">
                <h5>
                  <i className="fa-light fa-file"></i>{" "}
                  {t("projects.projectDetails")}
                </h5>
                <p>{project?.description}</p>
                {project?.files?.length > 0 && (
                  <>
                    <h6>{t("projects.attachments")}</h6>
                    <ul>
                      {project?.files?.map((file) => (
                        <li key={file?.id}>
                          <Link
                            to={file?.file}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa-regular fa-link"></i> {file?.file}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              {/* piddings */}
              {requests && requests.length > 0 && (
                <div className="allComments">
                  <h5 className="mb-4">
                    <i className="fa-light fa-comment"></i>{" "}
                    {t("projects.offersMade")}{" "}
                  </h5>
                  <div className="d-flex flex-column gap-3">
                    {requests.map((request) => (
                      <OfferCard
                        request={request}
                        key={request.id}
                        isMyProject={project?.is_my_project}
                      />
                    ))}
                  </div>
                </div>
              )}
              {!project?.is_my_project && (
                <>{!project?.added_request && <AddOffer id={project?.id} />}</>
              )}
            </div>
            <div className="col-lg-4 col-12 p-2">
              <AboutProjectCard project={project} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectDetails;
