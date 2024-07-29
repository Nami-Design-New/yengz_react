import { useQuery } from "@tanstack/react-query";
import getProfile from "./../../services/apiProfile";

export default function useGetProfile(id) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["profile", id],
    queryFn: () => getProfile(id),
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false
  });
  return { isLoading, data, error };
}
