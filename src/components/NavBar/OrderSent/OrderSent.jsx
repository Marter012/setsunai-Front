import React, { useState } from "react";
import { ContainerOrderSent } from "./OrderSentStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  activeOrder,
  clearCart,
  toggleCart,
} from "../../../store/slice/cartSlice";
import { toggleOverlay } from "../../../store/slice/overlaySlice";

const OrderSent = () => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({ name: false, paymentMethod: false });

  const [paymentMethod, setPaymentMethod] = useState("");
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (acc, item) => acc + item.finalPrice * item.quantity,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = { name: false, paymentMethod: false };

    if (!name.trim()) {
      newErrors.name = true;
      hasError = true;
    }

    if (!paymentMethod) {
      newErrors.paymentMethod = true;
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) return;
    if (!name || !paymentMethod) {
      alert("Completa todos los campos");
      return;
    }
    const phone = "543541544418";

    const msg = `*📦 Orden de pedido!*
👤 Nombre: *${name}*
💳 Método de pago: *${paymentMethod}*

🧾 *Detalle del pedido:*
${cartItems
  .map((item) => `- ${item.quantity} x *${item.name}* ${item.selectedSize} piezas — $${item.finalPrice}`)
  .join("\n")}

💰 *Total:* $${total}

🙏 ¡Gracias por tu compra!`;

    const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
    const baseUrl = isMobile
      ? "https://wa.me"
      : "https://web.whatsapp.com/send";
    const url = `${baseUrl}?phone=${phone}&text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener");
    setName("");
    setPaymentMethod("");
    dispatch(clearCart());
    dispatch(toggleCart());
    dispatch(toggleOverlay())
    dispatch(activeOrder());
  };

  return (
    <ContainerOrderSent as="form" onSubmit={handleSubmit}>
      <h4>¡Tu pedido está en proceso! 🍣</h4>

      <input
        type="text"
        placeholder="Ingresa tu nombre y apellido"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          if (e.target.value.trim() !== "") {
            setErrors((prev) => ({ ...prev, name: false }));
          }
        }}
        className={errors.name ? "error" : ""}
      />
      <p>Tienes {cartItems.length} productos en tu carrito.</p>
      <p className="total">Total: ${total.toFixed(2)}</p>

      <p>Puedes seleccionar entre:</p>

      <div className="payment-options">
        <span
          className={`payment-option ${
            paymentMethod === "EFECTIVO" ? "selected" : ""
          } ${errors.paymentMethod ? "error" : ""}`}
          onClick={() => {
            setPaymentMethod("EFECTIVO");
            setErrors((prev) => ({ ...prev, paymentMethod: false }));
          }}
        >
          Efectivo 💵
        </span>

        <span
          className={`payment-option ${
            paymentMethod === "TRANSFERENCIA" ? "selected" : ""
          } ${errors.paymentMethod ? "error" : ""}`}
          onClick={() => {
            setPaymentMethod("TRANSFERENCIA");
            setErrors((prev) => ({ ...prev, paymentMethod: false }));
          }}
        >
          Transferencia 🏦
        </span>
      </div>

      <p>
        Una vez que confirmes tu pedido, te enviaremos la información necesaria
        para completar tu pago y preparar tu comida. <br />
        ¡Estamos ansiosos para que la disfrutes!
      </p>

      <button type="submit">Confirmar mi pedido ✅</button>
    </ContainerOrderSent>
  );
};

export default OrderSent;
