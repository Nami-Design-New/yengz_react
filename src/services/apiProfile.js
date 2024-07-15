import axios from "./../utils/axios";
export default async function getProfile(id) {
  try {
    const res = await axios.get(`/user/get_profile?id=${id}`);
    if (res.data.code === 200) {
      return res.data.data;
    }
  } catch (error) {
    console.error("Error fetching profile:", error.message);
  }
}
