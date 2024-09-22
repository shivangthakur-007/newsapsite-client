import axios from "axios";

const Base_url = "https://newsapsite-server.onrender.com/api/vi";

const axiosInstance= axios.create();

axiosInstance.defaults.baseURL= Base_url;
axiosInstance.defaults.withCredentials= false;

export default axiosInstance;