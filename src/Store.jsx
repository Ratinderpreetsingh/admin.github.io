import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slice/Product_Slice"; 
import Category_Slice from "./Slice/Category_Slice";
import  Login  from "./Slice/Login_Slice";
import Order_Slice from "./Slice/Order_Slice";

export const store = configureStore({

    reducer: {
        login: Login,
        product: productReducer,
        category: Category_Slice,
        order: Order_Slice
    },

})