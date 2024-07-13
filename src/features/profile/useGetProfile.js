import { useMutation } from "@tanstack/react-query";
import { getProfile } from "../../services/apiGetProfile";

function useGetProfile() {
  return useMutation({
    mutationFn: (id) => getProfile(id),
    retry: false,
  });
}

export default useGetProfile;
