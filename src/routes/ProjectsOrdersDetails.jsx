import React from "react";
import useGetProject from "../features/projects/useGetProject";

function ProjectsOrdersDetails() {
  const { data: projectDetails } = useGetProject();

  console.log(projectDetails);
  return <div>ProjectsOrdersDetails</div>;
}

export default ProjectsOrdersDetails;
