import { useQuery } from "@tanstack/react-query";
import { getChats } from "../../services/apiChats";

export default function useGetChats() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["chats"],
    queryFn: getChats,
    retry: false
  });
  return { isLoading, data, error };
}
