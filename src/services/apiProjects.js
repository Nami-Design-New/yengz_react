import axios from "./../utils/axios";

export async function getProjectsByFilter({
  search,
  page,
  rate,
  user_verification,
  user_available,
  categories,
  sub_categories,
  is_old,
}) {
  const requestBody = {};

  if (page) requestBody.page = page;
  if (search) requestBody.search = search;
  if (rate !== undefined && rate !== null && rate !== "")
    requestBody.rate = rate;
  if (
    user_verification !== undefined &&
    user_verification !== null &&
    user_verification !== ""
  )
    requestBody.user_verification = user_verification;
  if (
    user_available !== undefined &&
    user_available !== null &&
    user_available !== ""
  )
    requestBody.user_available = user_available;
  if (categories?.length > 0) requestBody.categories = categories;
  if (sub_categories?.length > 0) requestBody.sub_categories = sub_categories;
  if (is_old !== undefined && is_old !== null && is_old !== "")
    requestBody.is_old = is_old;

  try {
    const req = await axios.post("/get_projects", requestBody);

    return req.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getLatestProjects() {
  try {
    const req = await axios.post("/get_projects", {
      page: 1,
    });
    return req.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
