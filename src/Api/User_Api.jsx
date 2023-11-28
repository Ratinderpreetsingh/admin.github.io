import axios from "axios"
import { Base_Url } from "../Base_Url"

export const GetAll_user=async()=>{
    try {
        const response = await axios.get(`${Base_Url}api/user/getAll`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const create_user = async(data)=>{
    try {
        const response = axios.post(`${Base_Url}api/user/create`,data)
        return response
    } catch (error) {
        console.error(error);
    }
}

export const delete_user = async(id)=>{
    try {
        const response = axios.delete(`${Base_Url}api/user/delete/${id}`)
        return response

    } catch (error) {
        console.error({error:error.message});

    }
}