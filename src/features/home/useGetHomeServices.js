import { useQuery } from "@tanstack/react-query";
import { getHomeServices } from "../../services/apiServices";

export default function useGetHomeServices() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["homeServices"],
    queryFn: getHomeServices,
    retry: false
  });
  return { isLoading, data, error };
}
