import { useSearchParams } from "react-router-dom";
import { getProjectsOrders } from "../../services/apiProjects";
import { useQuery } from "@tanstack/react-query";


function useProjectsOrdersList() {
  const [searchParams] = useSearchParams();
  const status =
    searchParams.get("status") && searchParams.get("status").split("-");
  const page = Number(searchParams.get("page")) || 1;

  const { isLoading, data, error } = useQuery({
    queryKey: ["serviceOrdersList", status, page],
    queryFn: () => getProjectsOrders({ page, status }),
    retry: false
  });

  return { isLoading, data, error };
}

export default useProjectsOrdersList