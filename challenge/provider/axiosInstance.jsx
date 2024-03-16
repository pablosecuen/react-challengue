import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://react-challengue-production.up.railway.app",
});

export default axiosInstance;
