import axios from "../utils/axios";

export async function getCountries() {
  try {
    const req = await axios.get("/get_countries");
    return req.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
