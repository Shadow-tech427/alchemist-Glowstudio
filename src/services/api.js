import axios from "axios";

const API_URL = window.location.hostname === "localhost" ? "http://localhost:5000/api" : "https://alchemistglowstudiobackend.onrender.com/api";

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type' : 'application/json',
    },
});

// Add token to requests if available
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("adminToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;