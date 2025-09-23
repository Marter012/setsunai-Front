import React from "react";
import { ContainerIcon } from "./IconCartStyles";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../../store/slice/cartSlice";

const IconCart = () => {
  const dispatch = useDispatch();
  const itemsCart = useSelector((state) => state.cart.items);
  return (
    <ContainerIcon
        onClick={() => dispatch(toggleCart())}
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
