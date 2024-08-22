import { useQuery } from "@tanstack/react-query";
import { getCommunityPostDetails } from "../../services/apiCommunities";

function useGetCommunityPostDetails(id) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["communityPostDetails", id],
    queryFn: () => getCommunityPostDetails(id),
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
  return { isLoading, data, error };
}

export default useGetCommunityPostDetails;
