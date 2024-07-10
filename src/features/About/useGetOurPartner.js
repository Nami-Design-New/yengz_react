import { useQuery } from "@tanstack/react-query";
import { getOurPartner } from "../../services/apiAbout";

export default function useGetOurPartner() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["getOurPartner"],
    queryFn: getOurPartner,
    retry: false,
  });

  return { isLoading, data, error };
}
