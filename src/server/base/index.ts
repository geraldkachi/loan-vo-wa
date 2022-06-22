import axios from "axios";

export const env = "stagging";
const BACKEND_URL = "http://localhost:2022/v1"
//const BASE_URL = "http://localhost:2022/v1";

export const instance = () =>
  axios.create({
    baseURL: BACKEND_URL,
    timeout: 50000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("@authorization")}`,
    },
  });

export const next = (e: any) => {
  throw new Error(
    e.response
      ? e.response.data.message
      : "Poor internet, unable to retrieve rounds"
  );
};
