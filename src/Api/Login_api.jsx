import axios from "axios";

export const Login =(data)=>{
    try {
        const response = axios.post("http://localhost:8080/api/userAuth/login",data)
        return response
    } catch (error) {
        console.error(error);

    }
}