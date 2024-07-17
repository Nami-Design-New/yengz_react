import { useQuery } from "@tanstack/react-query";
import { getProjectById } from "../../services/apiProjects";

export default function useGetProject(id) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["Project", id],
    queryFn: () => getProjectById(id),
    retry: false
  });
  return { isLoading, data, error };
}
