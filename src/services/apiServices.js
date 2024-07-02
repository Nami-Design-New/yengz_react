import axios from "axios";

export async function getServicesByFilter(
  search,
  page,
  rate,
  user_verification,
  user_available,
  categories,
  sub_categories
) {
  try {
    const req = await axios.post("/get_services", {
      ...(!search && { search }),
      ...(!page && { page }),
      ...(!rate && { rate }),
      ...(!user_verification && { user_verification }),
      ...(!user_available && { user_available }),
      ...(!categories && { categories }),
      ...(!sub_categories && { sub_categories }),
      ...(!is_old && { is_old }),
    });

    return req.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getServicesByCategoryId(id, page) {
  try {
    const req = await axios.post("/get_sub_category_services", {
      id: [id],
      page,
    });

    return req.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
