import axios from "./../utils/axios";

export async function getProjectsByFilter({
  search,
  page,
  rate,
  user_verification,
  user_available,
  categories,
  sub_categories,
  is_old
}) {
  const requestBody = {};

  if (page) requestBody.page = page;
  if (search) requestBody.search = search;
  if (rate !== undefined && rate !== null && rate !== "")
    requestBody.rate = rate;
  if (
    user_verification !== undefined &&
    user_verification !== null &&
    user_verification !== ""
  )
    requestBody.user_verification = user_verification;
  if (
    user_available !== undefined &&
    user_available !== null &&
    user_available !== ""
  )
    requestBody.user_available = user_available;
  if (categories?.length > 0) requestBody.categories = categories;
  if (sub_categories?.length > 0) requestBody.sub_categories = sub_categories;
  if (is_old !== undefined && is_old !== null && is_old !== "")
    requestBody.is_old = is_old;

  try {
    const req = await axios.post("/get_projects", requestBody);
    return {
      data: req.data.data,
      total: req.data.total
    };
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getUserProjects(id) {
  try {
    const req = await axios.post("/user/get_my_projects", {
      user_id: id
    });
    return req.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const createProject = async (data, queryClient) => {
  try {
    await axios.post("/user/create_project", data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    queryClient.invalidateQueries(["userProjects"]);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const editProject = async (data, queryClient) => {
  try {
    await axios.post("/user/update_project", data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    queryClient.invalidateQueries(["userProjects"]);
  } catch (error) {
    throw new Error(error.message);
  }
};

export async function deleteProject(id, queryClient) {
  try {
    await axios.post("/user/delete_project", {
      id
    });
    queryClient.invalidateQueries(["userProjects"]);
  } catch (error) {
    throw new Error(error.message);
  }
}

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

export async function getProjectById(id) {
  try {
    const req = await axios.post("/get_project_details", {
      id
    });
    return req.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getProjectRequests(id, type) {
  try {
    const req = await axios.post(
      `${type === "global" ? "" : "/user"}/get_project_request`,
      {
        id
      }
    );
    return req.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function addProjectRequest(data, querClinet) {
  try {
    await axios.post("/user/create_request", data);
    querClinet.invalidateQueries(["projectRequests"]);
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function editProjectRequest(data, querClinet) {
  try {
    await axios.post("/user/update_request", data);
    querClinet.invalidateQueries(["projectRequests"]);
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateRequestStatus(id, status, querClinet) {
  try {
    await axios.post("/user/change_request_status", {
      id,
      status
    });
    querClinet.invalidateQueries(["projectRequests"]);
  } catch (error) {
    throw new Error(error.message);
  }
}
