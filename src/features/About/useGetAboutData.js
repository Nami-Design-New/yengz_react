import { useQuery } from "@tanstack/react-query";
import { getAboutData } from "../../services/apiAbout";
import { useParams } from "react-router-dom";
function useGetAboutData() {
  const { id } = useParams();

  const { isLoading, data, error } = useQuery({
    queryKey: ["getAboutData"],
    queryFn: getAboutData(id),
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false
  });

  return { isLoading, data, error };
}

export default useGetAboutData;
