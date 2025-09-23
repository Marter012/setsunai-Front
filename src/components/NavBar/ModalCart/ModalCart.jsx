import React from "react";
import {
  CardCart,
  CardsCart,
  ContainerModalCart,
  SectionModalCart,
  TotalCart,
  CartDeleteIcon,
} from "./ModalCartStyles";
import { useDispatch, useSelector } from "react-redux";
import { activeOrder, addItem, clearCart, removeItem } from "../../../store/slice/cartSlice";
import OrderSent from "../OrderSent/OrderSent";

const ModalCart = ({ active }) => {
  const itemsCart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.cart.stateOrder);
  return (
    <ContainerModalCart $active={active}>
      <SectionModalCart>
        {orderState ? (
          <OrderSent />
        ) : (
          <>
            <h4>Vas a pedir</h4>
            <CartDeleteIcon onClick={() => dispatch(clearCart())} />
            <CardsCart>
              {itemsCart.length === 0 ? (
                <>
                  <p>Carrito Vacio.</p>
                  <p>Elije tus piezas o combinados favoritos.</p>
                </>
              ) : (
                itemsCart.map((item) => (
                  <CardCart key={item._id}>
                    <div>
                      <button onClick={() => dispatch(removeItem(item._id))}>
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button onClick={() => dispatch(addItem(item))}>+</button>
                    </div>
                    <img src={item.img} alt="" />
                    <h4>{item.name}</h4>
                    <p>${item.price * item.quantity}</p>
                  </CardCart>
                ))
              )}
            </CardsCart>
            <TotalCart $itemsCart={itemsCart.length}>
              <p>Total</p>
              <p>
                $
                {itemsCart.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )}
              </p>
              <button disabled={itemsCart.length === 0} className={itemsCart.length === 0 ? "disabled" : ""} onClick={() => dispatch(activeOrder())}>
                Realizar Pedido
              </button>
            </TotalCart>
          </>
        )}
      </SectionModalCart>
    </ContainerModalCart>
  );
};

export default ModalCart;
