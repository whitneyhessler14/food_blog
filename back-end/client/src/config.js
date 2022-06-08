import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://beets-me.herokuapp.com/back-end'
});