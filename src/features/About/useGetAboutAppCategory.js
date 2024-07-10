import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAboutCategory } from "../../services/apiAbout";

function useGetAboutAppCategory() {
  const { id } = useParams();
  const { isLoading, data, error } = useQuery({
    queryKey: ["useGetAboutAppCategory"],
    queryFn: () => getAboutCategory(id),
    retry: false,
  });

  return { isLoading, data, error };
}

export default useGetAboutAppCategory;
