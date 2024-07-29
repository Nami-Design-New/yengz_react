import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useGetLatestProjects from "../projects/useGetLatestProjects";
import ProjectCard from "../../ui/cards/ProjectCard";

const LatestProjects = () => {
  const { t } = useTranslation();
  const { data: projects } = useGetLatestProjects();

  return (
    <section className="popular_departments pt-0">
      <div className="container">
        <div className="row-head" data-aos="fade-up">
          <h6>{t("home.latestProjects")}</h6>
          <Link to="/projects">
            {t("home.viewAll")}
            <i className="fa-regular fa-angle-left"></i>
          </Link>
        </div>
        <div className="row mb-5">
          {projects?.map((project) => (
            <div className="col-lg-6 col-12 p-2" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
