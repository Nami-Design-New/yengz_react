import axios from "../utils/axios";

export async function getCart() {
  try {
    const req = await axios.post("/user/get_cart");
    return req.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || err.message);
  }
}

export async function addToCart(data, querClient) {
  try {
    await axios.post("/user/add_to_cart", data);
    querClient.invalidateQueries("cartList");
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}

export async function deleteCart(querClient) {
  try {
    await axios.post("/user/delete_cart");
    querClient.invalidateQueries("cartList");
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}

export async function increaseCartQuantity(id, queryClient) {
  try {
    await axios.post("/user/increase_cart", { id });
    queryClient.invalidateQueries("cartList");
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}
