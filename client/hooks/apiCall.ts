import axios from "axios";

const url = "https://kyixnu-5000.preview.csb.app/api/";
export const instance = axios.create({
  baseURL: url,
  withCredentials: true,
});
export const test = async () => {
  return await instance.get("https://kyixnu-5000.preview.csb.app");
};

export const register = async (data) => {
  return await instance.post("auth/register", data);
};

export const getUser = async () => {
  return await instance.get("auth/me");
};
