import { useQuery } from "@tanstack/react-query";
import axios from "./../../utils/axios";

export default function useGetBestFreelancers() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["bestFreelancers"],
    queryFn: async () => {
      const res = await axios.post("/get_freelancers");
      return {
        data: res.data.data,
        count: res.data.count
      };
    },
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false
  });
  return { isLoading, data, error };
}
