import axios from "axios";
import {auth} from "./auth.js";


export const clientAxios = axios.create({
    baseURL: "https://api-services-bikes.yuhmak.com/api/v1",
});

//http://localhost:3013/api/v1


clientAxios.interceptors.request.use((config) => {
    if (auth.isAuthenticated()) {
        config.headers.Authorization = document.cookie;
        console.log("Interceptors-->",auth.isAuthenticated());
  }
  return config;
});