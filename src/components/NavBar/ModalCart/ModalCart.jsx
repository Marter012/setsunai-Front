import React, { useEffect, useRef } from "react";
import {
  CardCart,
  CardsCart,
  ContainerModalCart,
  SectionModalCart,
  TotalCart,
  CartDeleteIcon,
  CartCloseIcon,
} from "./ModalCartStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  activeOrder,
  addItem,
  clearCart,
  closeCart,
  removeItem,
} from "../../../store/slice/cartSlice";
import OrderSent from "../OrderSent/OrderSent";
import Overlay from "../../ModalOverlay/ModalOverlay";
import { closeOverlay } from "../../../store/slice/overlaySlice";

const ModalCart = ({ iconRef }) => {
  const itemsCart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.cart.stateOrder);
  const activeCart = useSelector((state) => state.cart.active);

  const cartRef = useRef(null);

  useEffect(() => {
    if (!activeCart) return;

    const handleClickOutside = (event) => {
      const clickedInsideCart = cartRef.current?.contains(event.target);
      const clickedIcon = iconRef.current?.contains(event.target);

      if (!clickedInsideCart && !clickedIcon) {
        dispatch(closeCart());
        dispatch(closeOverlay());
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeCart, dispatch, iconRef]);

  return (
    <>
      <Overlay onClose={() => dispatch(closeOverlay())} />
      <ContainerModalCart $activeCart={activeCart}>
        <SectionModalCart ref={cartRef}>
          {orderState ? (
            <OrderSent />
          ) : (
            <>
              <div className="title">
                <h4>Vas a pedir</h4>
                <CartDeleteIcon onClick={() => dispatch(clearCart())} />
                <CartCloseIcon
                  onClick={() => {
                    dispatch(closeCart());
                    dispatch(closeOverlay());
                  }}
                />
              </div>
              <CardsCart>
                {itemsCart.length === 0 ? (
                  <p className="empty-cart">
                    <p>Carrito Vacio.</p>
                    <p>Elije tus piezas o combinados favoritos.</p>
                  </p>
                ) : (
                  itemsCart.map((item) => (
                    <CardCart key={item._id}>
                      <div>
                        <button onClick={() => dispatch(removeItem({ item }))}>
                          -
                        </button>
                        <p>{item.quantity}</p>
                        <button onClick={() => dispatch(addItem({ item }))}>
                          +
                        </button>
                      </div>
                      <img src={item.img} alt="" />
                      <h4>{item.name} </h4>
                      <p>{item.selectedSize}p</p>
                      <p>${item.finalPrice * item.quantity}</p>
                    </CardCart>
                  ))
                )}
              </CardsCart>
              <TotalCart $itemsCart={itemsCart.length}>
                <p>Total</p>
                <p>
                  $
                  {itemsCart.reduce(
                    (acc, item) => acc + item.finalPrice * item.quantity,
                    0
                  )}
                </p>
                <button
                  disabled={itemsCart.length === 0}
                  className={itemsCart.length === 0 ? "disabled" : ""}
                  onClick={() => dispatch(activeOrder())}
                >
                  Realizar Pedido
                </button>
              </TotalCart>
            </>
          )}
        </SectionModalCart>
      </ContainerModalCart>
    </>
  );
};

export default ModalCart;
