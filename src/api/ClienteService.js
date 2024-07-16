import axios from "axios";

export const Api = axios.create({
  baseURL: "https://aluraflix.azurewebsites.net/",
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
  },
});

