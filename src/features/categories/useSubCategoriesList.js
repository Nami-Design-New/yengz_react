import { getSubCategories } from "../../services/apiCategories";
import { useQuery } from "@tanstack/react-query";

function useSubCategoriesList(id) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["categoryList"],
    queryFn: () => getSubCategories(id),
    retry: false
  });

  return { isLoading, data, error };
}

export default useSubCategoriesList;
