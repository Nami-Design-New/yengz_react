import { useQuery } from "@tanstack/react-query";
import { getPaymentMethods } from "../../services/paymentMethods";

function usePaymentMethodsList() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["paymentMethodsList"],
    queryFn: getPaymentMethods,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false
  });

  return { isLoading, data, error };
}

export default usePaymentMethodsList;
