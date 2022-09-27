import axios from "axios";
import successHandler from "./successHandler";
import errorHandler from "./errorHandler";

export const NetworkConfig = () => {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  axios.defaults.timeout = 10000;
  axios.defaults.headers.get["Accept"] = "application/json";
  axios.defaults.headers.post["Accept"] = "application/json";
  const delay = (duration) => {
    return new Promise((resolve) => setTimeout(resolve, duration));
  };
  axios.interceptors.request.use(async (config) => {
    const delayInMs = 250;
    await delay(delayInMs);
    const accessToken = JSON.parse(localStorage.getItem("token"));
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  });
  axios.interceptors.response.use(successHandler, errorHandler);
};
