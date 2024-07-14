import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getProjectsByFilter } from "../../services/apiProjects";

function useProjectsList() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const page = Number(searchParams.get("page")) || 1;
  const rate = Number(searchParams.get("rate"));
  const user_verification = Number(searchParams.get("user_verification"));
  const user_available = Number(searchParams.get("user_available"));
  const categories =
    searchParams.get("categories") &&
    searchParams
      .get("categories")
      .split("-")
      .map((category) => Number(category));
  const sub_categories =
    searchParams.get("sub_categories") &&
    searchParams
      .get("sub_categories")
      .split("-")
      .map((subcategory) => Number(subcategory));
  const is_old = Number(searchParams.get("is_old"));

  const { isLoading, data, error } = useQuery({
    queryKey: [
      "projectsList",
      search,
      page,
      rate,
      user_verification,
      user_available,
      categories,
      sub_categories,
      is_old,
    ],
    queryFn: () =>
      getProjectsByFilter({
        search,
        page,
        rate,
        user_verification,
        user_available,
        categories,
        sub_categories,
        is_old,
      }),
    retry: false,
  });

  return { isLoading, data, error };
}

export default useProjectsList;
