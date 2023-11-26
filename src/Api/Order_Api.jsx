import axios from "axios"
import { Base_Url } from "../Base_Url"


export const getAll_orderapi =async()=>{
  try {
    const response = await axios.get(`${Base_Url}api/order/getAll`)
    return response.data
  } catch (error) {
    console.error(error);
    
  }
}

export const getProduct_ById_api = async(id)=>{
  try {
    const response = await axios.get(`${Base_Url}api/order/get/${id}`)
    return response.data
  } catch (error) {
    console.error(error);

  }
}