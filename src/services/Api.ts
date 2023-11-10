import axios from "axios";

export var Api = axios.create({
    baseURL: 'https://api.github.com'
})