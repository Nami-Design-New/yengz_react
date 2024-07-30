import axios from "./../utils/axios";

export async function getNotifications() {
  try {
    const req = await axios.post("/get_notifications");
    return req?.data?.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
