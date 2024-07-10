import { useQueryClient } from "@tanstack/react-query";
import { decreaseQuantity  as decreaseQuantityApi } from "../../services/apiCart";

function useDEcreaseQuantity() {
  const queryClient = useQueryClient();
  const { mutate: decreaseQuantity, isLoading } = useMutation({
    mutationFn: ({id, quantity}) =>
      decreaseQuantityApi({id, quantity}),

    onSuccess: () => {
      queryClient.invalidateQueries(["cartList"]);
    },
  });
  return { decreaseQuantity, isLoading };
}

export default useDEcreaseQuantity;
