import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/cartSlice';
import piecesReducer from './slice/piecesSlice';
import combinedPiecesReducer from './slice/combinedPiecesSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    pieces: piecesReducer,
    combinedPieces: combinedPiecesReducer,
  },
});
