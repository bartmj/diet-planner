import axios from "axios";
import authHeader from "./authHeader";

// const API_URL = "http://localhost:5000/api/test/";

const API_URL = 'http://dietplannerrds-env.eba-s2nrkgap.eu-north-1.elasticbeanstalk.com/api/test/';


const getPublicContent = () => {
    return axios.get(API_URL + "all");
}

const getUserBoard = () => {
    return axios.get(API_URL + "user", {headers: authHeader()});
}

const getModeratorBoard = () => {
    return axios.get(API_URL + "mod", {headers: authHeader()});
}

const getAdminBoard = () => {
    return axios.get(API_URL + "admin", {headers: authHeader()});
}

const userService = {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard
}

export default userService;