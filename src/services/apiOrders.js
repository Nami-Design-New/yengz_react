import axios from "../utils/axios";

export async function getServiceOrders() {
  try {
    const req = await axios.post("/user/get_service_orders");
    return req.data.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
