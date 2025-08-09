import axios from "axios";

const BASE_URL = "http://localhost:5000";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    Headers: {
        "Content-type": "application/json",
    }
})
export default axiosInstance;

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {}
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

