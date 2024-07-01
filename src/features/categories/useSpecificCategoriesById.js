import { useSearchParams } from "react-router-dom";
import { getSpecificCategoriesById } from "../../services/apiCategories";

function useSpecificCategoriesById() {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));

  const { isLoading, data, error } = useQuery({
    queryKey: ["categoryById", id],
    queryFn: () => getSpecificCategoriesById(id),
  });

  return { isLoading, data, error };
}

export default useSpecificCategoriesById;
