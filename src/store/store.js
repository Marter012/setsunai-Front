import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/cartSlice';
import piecesReducer from './slice/piecesSlice';
import combinedPiecesReducer from './slice/combinedPiecesSlice';
import overlayReducer from "./slice/overlaySlice";
import comboVariantsReducer from './slice/comboVariantsSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    overlay: overlayReducer,
    pieces: piecesReducer,
    combinedPieces: combinedPiecesReducer,
    comboVariants: comboVariantsReducer,
  },
});
