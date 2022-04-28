import axios from "axios";
import { Endpoints } from "./Endpoints";

const { REACT_APP_JSONPLACEHOLDER } = process.env;

const instance = axios.create({
    baseURL: REACT_APP_JSONPLACEHOLDER,
    headers: {
        "Content-Type": "application/json",
    },
});

// const tokenInstance = (token) => axios.create({
//     baseURL: REACT_APP_JSONPLACEHOLDER,
//     headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${token}`
//     },
// });


export const JSONPlaceholder = {
    getUsers(){
        return instance.get(Endpoints.POSTS)
    },
    getPhotos() {
        return instance.get(Endpoints.PHOTOS);
    },
    getComments(){
        return instance.get(Endpoints.COMMENTS)
    },
    // getUsersToken(token){
    //     return tokenInstance(token).get(Endpoints.POSTS)
    // }
}