import axios from "axios";
const baseUrl = "http://localhost:5000";
axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
export default axios;
