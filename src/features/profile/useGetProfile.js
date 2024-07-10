import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/apiGetProfile";

function useGetProfile(id) {
  return useQuery({
    queryKey: ["profile", id],
    queryFn: () => getProfile(id),
    retry: false,
  });
}

export default useGetProfile;
