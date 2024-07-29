import { useQuery } from "@tanstack/react-query";
import { getCertificates } from "../../services/apiCertificate";

export default function useGetCertificates(id) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["userCertificates", id],
    queryFn: () => getCertificates(id),
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false
  });
  return { isLoading, data, error };
}
