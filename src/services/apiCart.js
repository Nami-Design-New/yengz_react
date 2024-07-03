import axios from "../utils/axios";

export async function getCart() {
  try {
    const req = await axios.get("/get_cart");
    return req.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
