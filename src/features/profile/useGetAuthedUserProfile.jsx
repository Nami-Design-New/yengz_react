import { useQuery } from "@tanstack/react-query";

export default function useGetAuthedUserProfile() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["userProfile"],
    queryFn: () => getAuthedUserProfile(),
    retry: false
  });
  return { isLoading, data, error };
}
