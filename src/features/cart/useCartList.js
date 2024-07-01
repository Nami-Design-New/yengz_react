import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apiCart";
import { useDispatch } from "react-redux";
import { updateWholeCart } from "../../redux/slices/cartSlice";

function useCartList() {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useQuery({
    queryKey: ["cartList"],
    queryFn: getCart,
    retry: false,

    onSuccess: () => {
      dispatch(updateWholeCart(data.data));
    },
  });

  return { isLoading, data, error };
}

export default useCartList;
