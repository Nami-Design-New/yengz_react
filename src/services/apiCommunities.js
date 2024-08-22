import axios from "../utils/axios";

export async function getCommunities() {
  try {
    const req = await axios.get("/get_community_categories");
    return req.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getCommunityPosts(name) {
  try {
    const req = await axios.post("/get_community_posts_category_name", {
      name: name,
    });
    return req.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getCommunityPostDetails(id) {
  try {
    const req = await axios.post("/get_community_post_details", {
      id: id,
    });
    return req.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function addSubject(requestBody, querClinet) {
  try {
    const req = await axios.post("/user/create_community_post", requestBody);
    querClinet.invalidateQueries(["communityPosts"]);
    return req.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function addComment(requestBody, querClinet) {
  try {
    const req = await axios.post(
      "/user/create_community_post_comment",
      requestBody
    );
    querClinet.invalidateQueries(["communityPostDetails"]);
    return req.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
