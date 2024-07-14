import axios from "./../utils/axios";

export default async function getSettings() {
  try {
    const response = await axios.get("/get_settings");
    return response.data; 
  } catch (error) {
    throw new Error(error.message);
  }
}
