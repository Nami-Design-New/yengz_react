import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment as createCommentAPi } from "../../services/apiComments";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function useCreateComment() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { mutate: createComment, isLoading } = useMutation({
    mutationFn: ({ service_id, comment }) =>
      createCommentAPi({ service_id, comment }),

    onSuccess: () => {
      queryClient.invalidateQueries(["commentsList"]);
      toast.success(t("comments.createSuccess"));
    },
  });
  return { createComment, isLoading };
}

export default useCreateComment;
