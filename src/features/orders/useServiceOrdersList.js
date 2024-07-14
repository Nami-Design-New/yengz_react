import { useQuery } from "@tanstack/react-query";
import { getServiceOrders } from "../../services/apiOrders";
import { useSearchParams } from "react-router-dom";

function useServiceOrdersList() {
  const [searchParams] = useSearchParams();
  const status =
    searchParams.get("status") && searchParams.get("status").split("-");
  const page = Number(searchParams.get("page")) || 1;

  const { isLoading, data, error } = useQuery({
    queryKey: ["serviceOrdersList", status, page],
    queryFn: () => getServiceOrders({ page, status }),
    retry: false,
  });

  return { isLoading, data, error };
}

export default useServiceOrdersList;
