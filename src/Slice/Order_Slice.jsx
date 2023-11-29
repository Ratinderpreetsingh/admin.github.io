import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { delete_order, getAll_orderapi, getProduct_ById_api } from "../Api/Order_Api";

const initialState = {
  currentOrder: [],
  orders: [],
  loading: true,
  error: null,
};

export const GetAll_orders = createAsyncThunk(
  'order/GetAll_orders',
  async () => {
    try {
      const response = await getAll_orderapi();
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const Get_order_By_id = createAsyncThunk(
  'order/Get_order_By_id',
  async (id) => {
    try {
      const response = await getProduct_ById_api(id);
      return response;
    } catch (error) {
      throw error;
    }
  }
);
export const delete_order_By_id = createAsyncThunk(
  'order/delete_order_By_id',
  async (id) => {
    try {
      const response = await delete_order(id);
      console.log(response.data)
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);


export const Order_Slice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    // You can add any synchronous reducers here if needed
  },
  extraReducers: (builder) => {
    builder  
      .addCase(GetAll_orders.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetAll_orders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(GetAll_orders.rejected, (state, action) => {
        state.loading = false;
        state.error = "Fetching orders failed";
      })
      .addCase(Get_order_By_id.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(Get_order_By_id.fulfilled, (state, action) => {
        state.loading = false;
        state.currentOrder = action.payload; // Update currentOrder with the data returned by Get_order_By_id
      })
      .addCase(Get_order_By_id.rejected, (state, action) => {
        state.loading = false;
        state.error = "Fetching order by ID failed";
      })
      // delete
      .addCase(delete_order_By_id.fulfilled,(state,action)=>{
        const allOrders = state.orders.filter((items)=>items._id !==action.payload._id)
        state.orders = allOrders
        state.loading = false;
        state.error = null
      })
      .addCase(delete_order_By_id.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(delete_order_By_id.rejected, (state, action) => {
        state.loading = false;
        state.error = null
      })
  },
});

export default Order_Slice.reducer;
