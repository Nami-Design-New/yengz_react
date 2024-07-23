import axios from "./../utils/axios";

export async function getCategories() {
  try {
    const req = await axios.get("/get_categories");
    return req.data.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getGategoriesWithSubcategories() {
  try {
    const req = await axios.get("/get_categories_with_subcategory");

    return req.data.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getPopularCategories() {
  try {
    const req = await axios.get("/get_popular_categories");
    return req.data.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
export async function getSubCategories(categoryId) {
  try {
    const req = await axios.get(`/get_sub_categories/${categoryId}`);
    return req.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
