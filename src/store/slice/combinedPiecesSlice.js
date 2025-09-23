import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fecthCombinedPieces = createAsyncThunk(
  "combinedPieces/fetchCombinedPieces",
  async () => {
    const res = await axios.get(
      "https://setsunai-api.onrender.com/authCombinedPieces/combinedPieces"
    );
    return res.data;
  }
);

const combinedPiecesSlice = createSlice({
  name: "combinedPieces",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fecthCombinedPieces.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fecthCombinedPieces.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fecthCombinedPieces.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default combinedPiecesSlice.reducer;
