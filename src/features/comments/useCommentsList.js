import { useQuery } from "@tanstack/react-query";
import { getComments } from "../../services/apiComments";
import { useParams } from "react-router-dom";

function useCommentsList() {
  const id = Number(useParams().id);
  const { isLoading, data, error } = useQuery({
    queryKey: ["commentsList"],
    queryFn: () => getComments(id),
    retry: false,
  });

  return { isLoading, data, error };
}

export default useCommentsList;
