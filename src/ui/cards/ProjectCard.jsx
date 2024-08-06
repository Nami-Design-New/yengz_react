import { useState } from "react";
import { Link } from "react-router-dom";
import { formatTimeDifference, getTimeDifference } from "../../utils/helpers";
import { useTranslation } from "react-i18next";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import useTruncateString from "../../hooks/useTruncateString";
import ConfirmationModal from "../modals/ConfirmationModal";
import { deleteProject } from "../../services/apiProjects";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

function ProjectCard({ project }) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const user = useSelector((state) => state.authedUser.user);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const timeDifference = getTimeDifference(project?.created_at);
  const formattedTime = formatTimeDifference(
    timeDifference.years,
    timeDifference.months,
    timeDifference.days,
    timeDifference.hours,
    timeDifference.minutes,
    t
  );
  const truncatedText = useTruncateString(project?.description, 200);

  const delteProject = async () => {
    setLoading(true);
    try {
      await deleteProject(project?.id, queryClient);
      setShowModal(false);
      toast.success(t("projects.projectDeleted"));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Link
      to={`/projects/${project?.id}`}
      className="singleRequst"
      onClick={(e) => e.stopPropagation()} // Prevent card navigation
    >
      <div className="row">
        <div className="col-12 p-0">
          <div className="requstPost">
            <div className="d-flex gap-3">
              <Link
                to={`/profile/${project?.user?.id}`}
                onClick={(e) => e.stopPropagation()}
              >
                <img src={project?.user?.image} alt="" />
              </Link>
              <div className="postContent">
                <Link
                  to={`/projects/${project?.id}`}
                  className="postTitle"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project?.title}
                </Link>
                <div className="postUser">
                  <Link
                    to={`/profile/${project?.user?.id}`}
                    className="name"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fa-regular fa-user"></i> {project?.user?.name}
                  </Link>
                  <p className="time m-0">
                    <i className="fa-regular fa-timer"></i>
                    {formattedTime}
                  </p>
                </div>
              </div>
            </div>
            {user?.id === project?.user?.id && (
              <div className="status_action">
                <span className="status">{project?.status_name}</span>
                {(project?.status_name === "جديد" ||
                  project?.status_name === "new") && (
                  <>
                    <Link to={`/edit-project/${project?.id}`}>
                      <IconEdit stroke={2} />
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowModal(true);
                      }}
                    >
                      <IconTrash stroke={2} />
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
          <p className="m-0 mt-3">{truncatedText}</p>
        </div>
      </div>
      <ConfirmationModal
        showModal={showModal}
        setShowModal={setShowModal}
        buttonText={t("projects.deleteProject")}
        text={t("projects.areYouSureYouWantToDelete")}
        eventFun={delteProject}
        loading={loading}
      />
    </Link>
  );
}

export default ProjectCard;
