import axiosInstance from "./AxiosInstance";

export const login = async (credentials) => {
    try {
        const res = await axiosInstance.post("api/auth/login", credentials);
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("userData", JSON.stringify(res.data.user));
        localStorage.setItem("isLoggedIn", true);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const register = async (credentials) => {
    try {
        const res = await axiosInstance.post("api/auth/register", credentials);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
