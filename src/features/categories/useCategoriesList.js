import { getCategories } from "../../ui/services/apiCategories";
import { useQuery } from "@tanstack/react-query";

function useCategoriesList() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["categoryList"],
    queryFn: getCategories,
    retry: false,
  });

  return { isLoading, data, error };
}

export default useCategoriesList;
