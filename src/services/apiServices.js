import axios from "../utils/axios";

export async function getServicesByFilter(
  search,
  page,
  rate,
  user_verification,
  user_available,
  categories,
  sub_categories
) {
  const requestBody = {};

  if (page) requestBody.page = page;
  if (search) requestBody.search = search;
  if (rate) requestBody.rate = rate;
  if (user_verification) requestBody.user_verification = user_verification;
  if (user_available) requestBody.user_available = user_available;
  if (categories) requestBody.categories = categories;
  if (sub_categories) requestBody.sub_categories = sub_categories;
  if (is_old) requestBody.is_old = is_old;

  try {
    const req = await axios.post("/get_services", requestBody);

    return req.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
