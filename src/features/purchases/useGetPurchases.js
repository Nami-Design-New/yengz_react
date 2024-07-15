import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getPurchasesOrders } from "../../services/apiPurchases";

function useGetPurchases() {
  const [searchParams] = useSearchParams();
  const status =
    searchParams.get("status") && searchParams.get("status").split("-");
  const page = Number(searchParams.get("page")) || 1;

  const { isLoading, data, error } = useQuery({
    queryKey: ["purchacesList", status, page],
    queryFn: () => getPurchasesOrders({ page, status }),
    retry: false
  });

  return { isLoading, data, error };
}

export default useGetPurchases;
