import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mass from "../mass";

export const fetchProduct = createAsyncThunk(
  "array/fetchProduct",
  async (nameProd) => {
    const response = await mass.find((item) => item[nameProd]);

    const val = Object.values(response)[0];
    const key = Object.keys(response)[0];
    return [key, val];
  }
);

const arrayGoods = createSlice({
  name: "array",
  initialState: {
    products: [],
    nameProduct: "Бургеры",
    bascetBox: [],
    totalPrice: 0,
    loading: false,
    error: null,
  },
  reducers: {
    addName(state, action) {
      state.nameProduct = action.payload;
    },
    addBascet(state, action) {
      state.bascetBox.push(action.payload);
    },
    delBascetItem(state, action) {
      state.bascetBox.filter((item) => item !== action.payload);
    },
    addTotalPrice(state, action) {
      state.totalPrice += action.payload;
    },
    minusTotalPrice(state, action) {
      state.totalPrice -= action.payload;
    },
    zeroTotalPrice(state, action) {
      state.totalPrice = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload[1] || [];
        state.nameProduct = action.payload[0];
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  addName,
  addBascet,
  addTotalPrice,
  minusTotalPrice,
  zeroTotalPrice,
  delBascetItem,
} = arrayGoods.actions;
export default arrayGoods.reducer;
