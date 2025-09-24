import React from "react";
import { ContainerFooter, ContainerIconFooter } from "./FooterStyles";
import { FaWhatsapp } from "react-icons/fa6";
const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hola, me gustaría realizar un pedido!!`;
    const phone = "543516478584";
    const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
    const baseUrl = isMobile
      ? "https://wa.me"
      : "https://web.whatsapp.com/send";
    const url = `${baseUrl}?phone=${phone}&text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener");
  };
  return (
    <ContainerFooter>
      <ContainerIconFooter onClick={handleSubmit}>
        <p>Contactate con nosotros</p>
        <FaWhatsapp />
      </ContainerIconFooter>
      <p>❝Tomate un setsu, pedite un sushi❞</p>
    </ContainerFooter>
  );
};

export default Footer;
