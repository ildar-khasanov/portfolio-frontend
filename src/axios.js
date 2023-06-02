import axios from "axios";

const instanse = axios.create({
    baseURL: "http://localhost:8000/",
});

// когда любой запрос происходит,
instanse.interceptors.request.use((config) => {
    // то, что есть в localStorage записать в headers
    config.headers.Authorization = window.localStorage.getItem("token");

    // возращаем измененный config
    return config;
});

export default instanse;
