import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apiCart";
import { useDispatch } from "react-redux";

function useCartList() {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useQuery({
    queryKey: ["cartList"],
    queryFn: getCart,
    retry: false
  });

  return { isLoading, data, error };
}

export default useCartList;
