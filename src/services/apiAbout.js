import axios from "./../utils/axios";

// get About
export async function getAbout() {
  try {
    const req = await axios.get("/get_about_app");

    return req.data.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

//get About category app
export async function getAboutCategory(id) {
  try {
    const req = await axios.post("/get_about_app_categories", { id });

    return req.data.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

//get About app data
export async function getAboutData(id) {
  try {
    const req = await axios.post("/get_about_app_data", { id });

    return req.data.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

//get partner

export async function getOurPartner() {
  try {
    const req = await axios.get("/get_partners");

    return req.data.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
