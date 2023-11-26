import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateProduct, addProductImages, deleteProduct_api, getAllProduct_api } from "../Api/Product_Api";

export const createProduct = createAsyncThunk(
    'product/createProduct',
    async (data) => {
        
       const response = await CreateProduct(data);
       console.log(response.status)
       console.log(response.data._id)

       if( response.status===201){
       await addProductImages(data.images,response.data._id)       }
       return response.data; // Assuming response contains data property
    }
);

export const getAllProducts = createAsyncThunk(
    'product/getAllProducts',
    async ()=>{
        const response = await getAllProduct_api()
        console.log(response)
        return response
    }
)

export const deleteProduct = createAsyncThunk(
    'product/deleteProduct',
    async (productId) => { // Assuming you need to pass a product ID to delete
        const response = await deleteProduct_api(productId);
        return response.data;
    }
);

const initialState = {
    Products: [],
    loading:false,
    error:null
};

export const productSlice = createSlice({
    name: 'Product',
    initialState,
    reducers: {

    },
    // extraReducers: (builder) => {
    //     builder.addCase(createProduct.fulfilled, (state, action) => {
    //         // state.Products.push(action.payload);
    //     });
    //     builder.addCase(getAllProducts.fulfilled, (state, action) => {
    //         state.Products= action.payload
    //         state.loading= false
    //     });
    //     builder.addCase(deleteProduct.fulfilled, (state, action) => {
    //         state.Products= action.payload
    //         state.loading= false
    //     });
    // },
    extraReducers:{
        [createProduct.fulfilled]:(state,action)=>{
        //    state.Products = action.payload
           state.loading= false
        },
        [getAllProducts.fulfilled]:(state,action)=>{
            state.Products = action.payload
           state.loading= false
        },
        [deleteProduct.fulfilled]:(state,action)=>{
            // state.Products = action.payload
           state.loading= false
        },

    }
});

export default productSlice.reducer;
