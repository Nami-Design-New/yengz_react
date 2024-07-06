import axios from "./../utils/axios";

export async function getCertificates(userId) {
  try {
    const req = await axios.post("/get_certificates", {
      id: userId
    });
    return req.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function addCertificate(data, queryClient) {
  try {
    await axios.post("/user/create_certificate", data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    queryClient.invalidateQueries(["userCertificates"]);
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateCertificate(data, queryClient) {
  try {
    await axios.post("/user/update_certificate", data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    queryClient.invalidateQueries(["userCertificates"]);
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteCertificate(id, queryClient) {
  try {
    await axios.post("/user/delete_certificate", {
      id
    });
    queryClient.invalidateQueries(["userCertificates"]);
  } catch (error) {
    throw new Error(error.message);
  }
}
