import { useQuery } from "@tanstack/react-query";
import { getServiceDetails } from "../../services/apiServices";
import { useParams } from "react-router-dom";

function useServiceDetails() {
  const { id } = useParams();

  const { isLoading, data, error } = useQuery({
    queryKey: ["serviceDetails", id],
    queryFn: () => getServiceDetails(id),
    retry: false,
  });
  return { isLoading, data, error };
}

export default useServiceDetails;
