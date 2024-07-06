import { useQuery } from "@tanstack/react-query";
import { getServiceDetails } from "../../services/apiServices";

function useServiceDetails(id) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["serviceDetails", id],
    queryFn: () => getServiceDetails(id),
    retry: false
  });
  return { isLoading, data, error };
}

export default useServiceDetails