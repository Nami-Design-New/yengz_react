import axios from "../utils/axios";

export async function getPaymentMethods() {
  try {
    const req = await axios.get("/get_payments");
    return req.data.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
