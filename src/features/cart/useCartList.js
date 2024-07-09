import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apiCart";
import { useDispatch, useSelector } from "react-redux";
import { updateEntireCart } from "../../redux/slices/cart";

function useCartList() {
  const loader = useSelector((state) => state.appLoader.appLoader);
  const dipatch = useDispatch();
  console.log(loader);
  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ["cartList", loader],
    queryFn: () => getCart(),
    enabled: !loader,
    onSuccess: (res) => console.log(res)
  });

  return { isLoading, data, error, refetch };
}

export default useCartList;
