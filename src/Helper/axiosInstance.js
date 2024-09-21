import axios from "axios";

const Base_url= "http://localhost:5172/api/vi";

const axiosInstance= axios.create();

axiosInstance.defaults.baseURL= Base_url;
axiosInstance.defaults.withCredentials= false;

export default axiosInstance;