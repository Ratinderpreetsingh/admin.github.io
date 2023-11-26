import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {Login} from '../Api/Login_api'
const initialState ={
    isAuth:true,
    loading: true,
    error: null,
}

export const LoginCreate = createAsyncThunk(
    'login/LoginSlice',
    async (data)=>{
        const response = await Login(data)
        return response.data
    }
)
export const LoginSlice = createSlice({
    name:'Login',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder  
          .addCase(LoginCreate.fulfilled,(state,action)=>{
            state.isAuth  = true
          })
          .addCase(LoginCreate.pending,(state,action)=>{
        
          })
          .addCase(LoginCreate.rejected,(state,action)=>{
            state.isAuth  = false,
            state.error = "Login failed"
          })
    }
})

export default LoginSlice.reducer;
