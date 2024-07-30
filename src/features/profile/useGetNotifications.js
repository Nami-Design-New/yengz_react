import { useQuery } from "@tanstack/react-query";
import { getNotifications } from "../../services/apiNotifications";

export default function useGetNotifications() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["notifications"],
    queryFn: getNotifications,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false
  });
  return { isLoading, data, error };
}
