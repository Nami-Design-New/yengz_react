import { useQuery } from "@tanstack/react-query";
import { getServiceOrders } from "../../services/apiOrders";

function useServiceOrdersList() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["serviceOrdersList"],
    queryFn: getServiceOrders,
    retry: false,
  });

  return { isLoading, data, error };
}

export default useServiceOrdersList;
