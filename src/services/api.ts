import axios, { type AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: '/api/v1/',
    timeout: 5000
})

export default api