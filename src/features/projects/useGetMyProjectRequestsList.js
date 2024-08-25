import { useQuery } from "@tanstack/react-query";
import { getMyProjectRequests } from "../../services/apiProjects";

function useGetMyProjectRequestsList() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["myProjectRequests"],
    queryFn: () => getMyProjectRequests(),
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
  return { isLoading, data, error };
}

export default useGetMyProjectRequestsList;
