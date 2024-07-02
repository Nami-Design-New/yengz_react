import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/apiGetProfile";

function useGetProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    retry: false
  });
}

export default useGetProfile;
