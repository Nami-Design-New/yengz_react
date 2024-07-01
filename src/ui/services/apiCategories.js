import axios from "axios";

export async function getCategories() {
  try {
    const req = await axios.get("/get_categories");

    return req.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
