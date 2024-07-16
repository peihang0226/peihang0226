import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import { useEnv } from "@/hooks";
const { VITE_APP_API_BASE_URL } = useEnv();
const service = axios.create({
    baseURL: VITE_APP_API_BASE_URL,
    timeout: 10 * 1000, // 请求超时时间
    headers: { "Content-Type": "application/json;charset=UTF-8" }
});

// # 请求
service.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        // ...auth.headers(), // 你的自定义headers，如token等
    };
    return config;
},(err) => {
    return Promise.reject(err.response);
});

// # 响应
service.interceptors.response.use((response) => {
        const data = response.data;
        if (data.code === 200) {
            return data;
        } else {
            return Promise.reject(data);
        }
    },
    (err) => {
        return Promise.reject(err.response);
    }
);

export default service;