import axios from "axios";

const instanse = axios.create({
    baseURL: "http://92.255.109.124:4010/",
});

// когда любой запрос происходит,
instanse.interceptors.request.use((config) => {
    // то, что есть в localStorage записать в headers
    config.headers.Authorization = window.localStorage.getItem("token");

    // возращаем измененный config
    return config;
});

export default instanse;
