import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { create_category_api, get_allcategory_api } from "../Api/Category_Api";

const initialState = {
  category: [],
  loading: true,
  error: null,
};
export const createCategory = createAsyncThunk(
  "category/createCategory",
  async (data) => {
    const response = await create_category_api(data);
    console.log(response);
    return response.data;
  }
);

export const getAllCategory = createAsyncThunk(
  "category/getAllCategory",
  async () => {
    const response = await get_allcategory_api();
    console.log(response);
    return response.data;
  }
);

export const categorySlice = createSlice({
  name: "Category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCategory.fulfilled, (state, action) => {
        state.category = action.payload;
        state.loading = false;
      })
      .addCase(createCategory.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.error = action.payload.error;
      })

      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.category = action.payload;
        state.loading = false;
      })
      .addCase(getAllCategory.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllCategory.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export default categorySlice.reducer;
