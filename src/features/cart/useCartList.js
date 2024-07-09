import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apiCart";
import { useDispatch, useSelector } from "react-redux";

function useCartList() {
  const loader = useSelector((state) => state.appLoader.appLoader);
  const dipatch = useDispatch();
  console.log(loader);
  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ["cartList", loader],
    queryFn: () => getCart(),
    enabled: !loader,
  });

  return { isLoading, data, error, refetch };
}

export default useCartList;
