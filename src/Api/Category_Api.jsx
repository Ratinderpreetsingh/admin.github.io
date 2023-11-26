import axios from "axios";
import { Base_Url } from "../Base_Url";


export const create_category_api = async(data)=>{
    try {
        const response = axios.post(`${Base_Url}api/categories/create`,data)
        return response
    } catch (error) {
        console.error(error);
    }
}

export const get_allcategory_api = async()=>{
    try {
       const response = axios.get(`${Base_Url}api/categories/getall`) 
       return response
    } catch (error) {
        console.error(error);
    }
}