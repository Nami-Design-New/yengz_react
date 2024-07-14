import axios from "../utils/axios";

export async function getPurchasesOrders(requestBody) {
  try {
    const req = await axios.post(
      "/user/get_my_purchase_service_orders",
      requestBody
    );
    return req.data.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
