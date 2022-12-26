import axios from "axios";

const api = axios.create({
  baseURL: "https://63a1c51eba35b96522e7a1b1.mockapi.io/vdm/Users",
});

export default api;
