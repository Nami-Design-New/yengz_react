import { useQuery } from "@tanstack/react-query";
import { getServiceOrders } from "../../services/apiOrders";
import { useSearchParams } from "react-router-dom";

function useServiceOrdersList() {
  const [searchParams] = useSearchParams();
  const status =
    searchParams.get("status") && searchParams.get("status").split("-");

  const { isLoading, data, error } = useQuery({
    queryKey: ["serviceOrdersList", status],
    queryFn: () => getServiceOrders(status),
    retry: false,
  });

  return { isLoading, data, error };
}

export default useServiceOrdersList;
