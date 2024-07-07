import { useQuery } from "@tanstack/react-query";
import { getGategoriesWithSubcategories } from "../../services/apiCategories";

function useCategorieListWithSub() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["categoryListWithSub"],
    queryFn: getGategoriesWithSubcategories,
    retry: false,
  });

  return { isLoading, data, error };
}

export default useCategorieListWithSub;