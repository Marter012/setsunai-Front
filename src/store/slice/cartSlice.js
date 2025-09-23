// src/store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: false,
  stateOrder: false,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.active = !state.active;
    },
    activeOrder: (state) => {
      state.stateOrder = !state.stateOrder;
    },
    addItem: (state, action) => {
      const item = action.payload;
      // Buscar si ya existe
      const existing = state.items.find((i) => i.code === item.code);

      if (existing) {
        existing.quantity += 1; // si existe, sumamos 1
      } else {
        state.items.push({ ...item, quantity: 1 }); // si no, lo agregamos con quantity=1
      }
    },
    removeItem: (state, action) => {
      const item = state.items.find((i) => i._id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.items = state.items.filter((i) => i._id !== action.payload);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { toggleCart, addItem, removeItem, clearCart,activeOrder } = cartSlice.actions;
export default cartSlice.reducer;
