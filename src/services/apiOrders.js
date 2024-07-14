import axios from "../utils/axios";

export async function getServiceOrders(requestBody) {
  try {
    const req = await axios.post("/user/get_my_service_orders", requestBody);
    return req.data.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function createOrder(queryClient) {
  try {
    const req = await axios.post("user/create_service_order");
    queryClient.invalidateQueries("cartList");
  } catch (err) {
    throw new Error(err.message);
  }
}
