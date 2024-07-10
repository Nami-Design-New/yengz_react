import axios from "./../utils/axios";

// get About
export async function getAbout() {
  try {
    const req = await axios.get("/get_about_app");
    // console.log(req.data, "1");

    return req.data.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

//get About category app
export async function getAboutCategory(id) {
  try {
    const req = await axios.post("/get_about_app_categories", { id });
    // console.log(req.data, "2");

    return req.data.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

//get About app data
export async function getAboutData(id) {
  try {
    const req = await axios.post("/get_about_app_data", { id });
    // console.log(req.data, "3");

    return req.data.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

//get partner

export async function getOurPartner() {
  try {
    const req = await axios.get("/get_partners");

    // console.log(req.data, "4");

    return req.data.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
