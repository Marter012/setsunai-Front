import React from "react";
import { ContainerFooter, ContainerIconFooter } from "./FooterStyles";
import { FaWhatsapp } from "react-icons/fa6";
const Footer = () => {
  const text = "Hola, me gustaria realizar un pedido!";
  return (
    <ContainerFooter>
      <ContainerIconFooter target="_blank" href={`https://wa.me/3516478584?text=${text}`}>
        <p>Contactate con nosotros</p>
        <FaWhatsapp />
      </ContainerIconFooter>
      <p>❝Tomate un setsu, pedite un sushi❞</p>
    </ContainerFooter>
  );
};

export default Footer;
