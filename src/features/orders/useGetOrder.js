import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../../services/apiOrders";

export default function useGetOrder(id) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["order", id],
    queryFn: () => getOrder(id),
    retry: false
  });
  return { isLoading, data, error };
}