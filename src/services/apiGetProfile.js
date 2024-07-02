import axios from "./../utils/axios";

export async function getProfile() {
  try {
    const req = await axios.get("/user/get_profile");
    return req.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
