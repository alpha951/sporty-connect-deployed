const { default: axiosInstance } = require(".");

export const registerUser = async (payload) => {
  try {
    console.log(payload);
    const response = await axiosInstance.post("/auth/register", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const loginUser = async (payload) => {
  try {
    console.log(payload);
    const response = await axiosInstance.post("/auth/login", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const edituser = async (payload) => {
  try {
    console.log(payload);
    const response = await axiosInstance.patch("/play/editprofile", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getpeers = async () => {
  try {
    const response = await axiosInstance.get("/play/getplayers");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getPreviousData = async () => {
  try {
    const response = await axiosInstance.get("/play/getplayerdata");
    // console.log("hii");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
