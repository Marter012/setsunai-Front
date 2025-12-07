import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../../store/slice/cartSlice";
import { ButtonAddStyled, ContainerQuantity } from "./ButtonStyles";

const ButtonAddItem = ({
  item,
  label = "Agregar", // Texto por defecto
  disabled = false,
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items) || [];
  if (!item) return null;
  const cartItem = cartItems.find((producto) => producto._id === item._id && producto.selectedSize === item.selectedSize);

  return (
    <ButtonAddStyled>
      {cartItem !==undefined && cartItem.quantity > 0 ? (
        <ContainerQuantity>
          <button onClick={() => dispatch(removeItem({ item }))}>-</button>

          <p>{cartItem.quantity}</p>

          <button onClick={() => dispatch(addItem({ item }))}>+</button>
        </ContainerQuantity>
      ) : (
        <button
          disabled={disabled}
          className={disabled ? "disabled" : ""}
          onClick={() => dispatch(addItem({ item }))}
        >
          {label}
        </button>
      )}
    </ButtonAddStyled>
  );
};

export default ButtonAddItem;
