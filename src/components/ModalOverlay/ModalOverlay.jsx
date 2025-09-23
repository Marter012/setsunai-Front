import React from "react";
import { ModalOverlayStyled } from "./ModalOverlayStyles";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../store/slice/cartSlice";
// Ejemplo en React
const Overlay = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart.active);
  return (
    <ModalOverlayStyled
      onClick={() => dispatch(toggleCart())}
      state={state}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
  );
};

export default Overlay;
