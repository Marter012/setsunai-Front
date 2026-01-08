import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBonusProducts = createAsyncThunk(
  "bonusProduct/fetchBonusProducts",
  async () => {
    const res = await axios.get(
      "https://decent-aurora-setsunai-cc7a0add.koyeb.app/authBonusProduct/bonusProduct"
    );
    console.log(res.data)
    return res.data;
  }
);

const bonusProductSlice = createSlice({
  name: "bonusProduct",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBonusProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBonusProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchBonusProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default bonusProductSlice.reducer;
