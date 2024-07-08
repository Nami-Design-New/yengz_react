
import { useQuery } from "@tanstack/react-query";
import { getRates } from "../../services/apiServices";
import { useParams } from "react-router-dom";

function useGetRates() {
  const { id } = useParams();
  const { isLoading, data, error } = useQuery({
    queryKey: ["serviceRates", id],
    queryFn: () => getRates(id),
    retry: false
  });
  return { isLoading, data, error };
}

export default useGetRates;
