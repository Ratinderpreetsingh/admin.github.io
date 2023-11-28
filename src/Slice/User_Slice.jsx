import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetAll_user, create_user, delete_user } from "../Api/User_Api";

const initialState = {
  user: [],
  loading: true,
  error: null,
};
export const createUser = createAsyncThunk(
  "user/createUser",
  async (data) => {
    const response = await create_user(data);
    console.log(response);
    return response.data;
  }
);

export const getAll_User = createAsyncThunk(
  "user/getAll_User",
  async () => {
    const response = await GetAll_user();
    console.log(response);
    return response;
  }
);

export const Delete_User = createAsyncThunk(
    "user/Delete_User",
    async (id) => {
      const response = await delete_user(id);
      console.log(response);
      return response.data;
    }
  );
  

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAll_User.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(getAll_User.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAll_User.rejected, (state, action) => {
        state.error = "error";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user.push(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.rejected, (state) => {
        state.loading = false;
        state.error = "Error creating user";
      })
      //   delete
      
      .addCase(Delete_User.fulfilled, (state, action) => {
        const data =  state.user.filter((items)=>items._id!==action.payload._id)
        state.user= data;
        state.loading = false;
        state.error = null;
      })
      .addCase(Delete_User.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(Delete_User.rejected, (state) => {
        state.loading = false;
        state.error = "Error creating user";
      })
  },
});

export default userSlice.reducer;
