import axios from "axios";

const apiUrl = axios.create({
  baseURL: "https://aicaptiongenerator-yjzl.onrender.com/api/auth",
  withCredentials: true,
});

export const registerApi = (data) => apiUrl.post("/register", data);
export const loginApi = (data) => apiUrl.post("/login", data);
