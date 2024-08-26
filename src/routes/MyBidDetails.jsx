import useGetProject from "../features/projects/useGetProject";
import SectionHeader from "../ui/SectionHeader";

function MyBidDetails() {
  const { data: project, isLoading } = useGetProject();

  return (
    <>
      <SectionHeader title={project?.title} />
    </>
  );
}

export default MyBidDetails;
