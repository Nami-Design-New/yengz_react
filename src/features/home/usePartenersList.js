import { useQuery } from "@tanstack/react-query";
import { getParteners } from "../../services/apiParteners";

function usePartenersList() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["partenersList"],
    queryFn: getParteners,
    retry: false,
  });
  return { isLoading, data, error };
}

export default usePartenersList;
