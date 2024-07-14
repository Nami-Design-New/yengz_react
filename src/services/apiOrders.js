import axios from "../utils/axios";

export async function getServiceOrders({ page, status }) {
  const requestBody = {};

  if (page) requestBody.page = page;
  if (status) requestBody.status = status;

  try {
    const req = await axios.post("/user/get_service_orders", requestBody);

    return req.data.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

