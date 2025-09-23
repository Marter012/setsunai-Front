import React, { useState } from "react";
import { ContainerOrderSent } from "./OrderSentStyles";
import { useDispatch, useSelector } from "react-redux";
import { activeOrder, clearCart, toggleCart } from "../../../store/slice/cartSlice";

const OrderSent = () => {
  const [name, setName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const disptach = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !paymentMethod) {
      alert("Completa todos los campos");
      return;
    }
    alert(
      `Pedido confirmado!\nNombre: ${name}\nMétodo de pago: ${paymentMethod} ,${cartItems.map(
        (item) => `\n- ${item.name} x${item.quantity}`
      )}\nTotal: $${total.toFixed(2)}`
    );
    setName("");
    setPaymentMethod("");
    disptach(clearCart());
    disptach(toggleCart());
    disptach(activeOrder());
  };

  return (
    <ContainerOrderSent as="form" onSubmit={handleSubmit}>
      <h4>¡Tu pedido está en proceso! 🍣</h4>

      <input
        type="text"
        placeholder="Ingresa tu nombre y apellido"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Tienes {cartItems.length} productos en tu carrito.</p>
      <p className="total">Total: ${total.toFixed(2)}</p>

      <p>Puedes seleccionar entre:</p>

      <div className="payment-options">
        <span
          className={`payment-option ${
            paymentMethod === "EFECTIVO" ? "selected" : ""
          }`}
          onClick={() => setPaymentMethod("EFECTIVO")}
        >
          Efectivo 💵
        </span>
        <span
          className={`payment-option ${
            paymentMethod === "TRANSFERENCIA" ? "selected" : ""
          }`}
          onClick={() => setPaymentMethod("TRANSFERENCIA")}
        >
          Transferencia 🏦
        </span>
      </div>

      <p>
        Una vez que confirmes tu pedido, te enviaremos la información necesaria
        para completar tu pago y preparar tu comida. ¡Estamos ansiosos por que
        la disfrutes!
      </p>

      <button type="submit">Confirmar mi pedido ✅</button>
    </ContainerOrderSent>
  );
};

export default OrderSent;
