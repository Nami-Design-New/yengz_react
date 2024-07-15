import { useQuery } from "@tanstack/react-query";
import getProfile from './../../services/apiProfile';

export default function useGetProfile(id) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["profile", id],
    queryFn: () => getProfile(id),
    staleTime: 1000
  });
  return { isLoading, data, error };
}
