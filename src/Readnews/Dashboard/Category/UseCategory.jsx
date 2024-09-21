import { useQuery } from "react-query";
import axiosInstance from "../../../Helper/axiosInstance";

function fetched(useparam) {
  return axiosInstance.get(`/news/${useparam}`);
}
const UseCategory = (useparam) => {
  return useQuery(["/read-category", useparam], () => fetched(useparam));
};
export default UseCategory;
