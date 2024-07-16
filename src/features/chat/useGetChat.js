import { useQuery } from "@tanstack/react-query";
import { getTargetChat } from "../../services/apiChats";

export default function useGetChat(target) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["chat-object", target],
    queryFn: () => getTargetChat(target),
    retry: false
  });
  return { isLoading, data, error };
}
