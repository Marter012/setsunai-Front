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
  clearCart,
  closeCart,
} from "../../../store/slice/cartSlice";
import OrderSent from "../OrderSent/OrderSent";
import Overlay from "../../ModalOverlay/ModalOverlay";
import { closeOverlay } from "../../../store/slice/overlaySlice";
import ButtonAddItem from "../../utils/Buttons/ButtonAddItem";

const SALSAS_LABELS = {
  soja: "Salsa de Soja",
  teriyaki: "Salsa Teriyaki",
  buenosAires: "Salsa Buenos Aires",
};

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
                <h4>Tu orden</h4>
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
                    <p>Carrito vacío.</p>
                    <p>Elegí tus piezas o combinados favoritos.</p>
                  </p>
                ) : (
                  itemsCart.map((item) => {
                    const selections = item.selections || {};
                    const include = selections.include || {};
                    
                    const includeLabels = [];
                    
                    if (include.palitos) includeLabels.push("Palitos");
                    if (include.wasabi) includeLabels.push("Wasabi");
                    if (include.jengibreEncurtido)
                      includeLabels.push("Jengibre");
                    
                    const includeText = includeLabels.join(" || ");
                    
                    const salsaText =
                      include.salsa && SALSAS_LABELS[include.salsa];

                    const extrasText = selections.extras
                      ?.map((e) => e.name)
                      .join(" || ");

                    const drinksText = selections.drinks
                      ?.map((d) => d.name)
                      .join(" || ");

                    return (
                      <CardCart key={item._id}>
                        <img src={item.img} alt="" />

                        <ButtonAddItem item={item} />

                        <section className="dataProduct">
                          <h4>
                            {item.name?.split(" ").slice(0, 3).join(" ")} (
                            {item.selectedSize}p)
                          </h4>
                          {includeText && <p>Incluye: {includeText}</p>}
                          {salsaText && <p>Salsa: {salsaText}</p>}
                          {extrasText && <p>Extras: {extrasText}</p>}
                          {drinksText && <p>Bebidas: {drinksText}</p>}
                        </section>

                        <p>${item.finalPrice * item.quantity}</p>
                      </CardCart>
                    );
                  })
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
