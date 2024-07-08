import axios from "../utils/axios";

export async function getComments(id) {
  try {
    const req = await axios.post("/get_comments", {
      id,
    });
    return req.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createComment(requestBody) {
  try {
    const req = await axios.post("/user/create_comment", requestBody);
    return req.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
