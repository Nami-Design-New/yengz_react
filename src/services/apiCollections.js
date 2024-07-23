import axios from "../utils/axios";

export async function getCollections() {
  try {
    const req = await axios.post("/user/get_collections");

    return req.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function addToCollection(requestBody) {
  try {
    const req = await axios.post("/user/add_to_collection", requestBody);

    return req.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
