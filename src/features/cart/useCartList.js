import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apiCart";

function useCartList() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["cartList"],
    queryFn: getCart,
    retry: false,
    onSuccess: (res) => console.log(res)
  });

  return { isLoading, data, error };
}

export default useCartList;
