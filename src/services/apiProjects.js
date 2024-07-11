import axios from "./../utils/axios";
export async function getLatestProjects() {
  try {
    const req = await axios.post("/get_projects", {
      page: 1
    });
    return req.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
