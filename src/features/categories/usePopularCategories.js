
import { useQuery } from '@tanstack/react-query';
import { getPopularCategories } from '../../services/apiCategories';

function usePopularCategories() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["popularCategoriesList"],
    queryFn: getPopularCategories,
    retry: false,
  });

  return { isLoading, data, error };
}

export default usePopularCategories