import { useQuery } from "@tanstack/react-query";
import { getServiceDetails } from "../../services/apiServices";
import { useSearchParams } from "react-router-dom";

function useServiceDetails() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const { isLoading, data, error } = useQuery({
    queryKey: ["serviceDetails", id],
    queryFn: () => getServiceDetails(id),
    retry: false,
  });
  return { isLoading, data, error };
}

export default useServiceDetails;
