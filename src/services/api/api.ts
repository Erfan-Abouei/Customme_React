import axios, { type AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    timeout: 5000
})

export default api