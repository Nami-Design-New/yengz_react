import { useQuery } from "@tanstack/react-query";
import { getParteners } from "../../services/apiParteners";

function usePartenersList() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["partenersList"],
    queryFn: getParteners,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false
  });
  return { isLoading, data, error };
}

export default usePartenersList;
