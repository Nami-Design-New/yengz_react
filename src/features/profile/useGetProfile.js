import { useMutation } from "@tanstack/react-query";
import { getProfile } from "../../services/apiGetProfile";

function useGetProfile() {
  return useMutation({
    mutationFn: (id) => getProfile(id),
    retry: false,
    onSuccess: (data) => {
      console.log(data);
    },
  });
}

export default useGetProfile;
