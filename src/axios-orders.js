import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-800a0.firebaseio.com/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  },
});

export default instance;
