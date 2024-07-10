import axios from "./../utils/axios";

export async function getProfile(id) {
  try {
    const req = await axios.get("/user/get_profile", { id });
    return req.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
