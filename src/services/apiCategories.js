import axios from "./../utils/axios";

export async function getCategories() {
  try {
    const req = await axios.get("/get_categories");
    return req.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getSpecificCategoriesById(id) {
  try {
    const req = await axios.post("/get_sub_categories", id);

    return req.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
