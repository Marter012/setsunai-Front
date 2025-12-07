import React from "react";
import { ContainerIcon } from "./IconCartStyles";
import { useDispatch, useSelector } from "react-redux";
import { closeCart, openCart } from "../../../store/slice/cartSlice";
import { closeOverlay, openOverlay } from "../../../store/slice/overlaySlice";
import { closeModalCombined } from "../../../store/slice/combinedPiecesSlice";

const IconCart = ({ iconRef }) => {
  const itemsCart = useSelector((state) => state.cart.items);
  const activeCart = useSelector((state) => state.cart.active);
  const dispatch = useDispatch();

  return (
    <ContainerIcon
      ref={iconRef}
      onClick={() => {
        if (activeCart) {
          dispatch(closeOverlay());
          dispatch(closeCart());
        } else {
          dispatch(openCart());
          dispatch(openOverlay());
          dispatch(closeModalCombined());
        }
      }}
    >
      <img
        src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754400009/SETSUNAI/6fcc6c3136b6ecab607c651c6a37802b_iydsyy.png"
        alt=""
      />
      <p>{itemsCart.reduce((acc, item) => acc + item.quantity, 0)}</p>
    </ContainerIcon>
  );
};

export default IconCart;
