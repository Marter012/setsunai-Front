import React from "react";
import { ContainerFooter, ContainerIconFooter } from "./FooterStyles";
import { FaWhatsapp } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  const handleSubmit = (e, context) => {
    e.preventDefault();
    let url;
    if (context == "whatsapp") {
      const msg = `Hola, me gustaría realizar un pedido!!`;
      const phone = "543516478584";
      const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
      const baseUrl = isMobile
        ? "https://wa.me"
        : "https://web.whatsapp.com/send";
      url = `${baseUrl}?phone=${phone}&text=${encodeURIComponent(msg)}`;
    }
    if (context == "instagram") {
      url = "https://www.instagram.com/sushisetsu";
    }

    window.open(url, "_blank", "noopener");
  };
  return (
    <ContainerFooter>
      <ContainerIconFooter>
        <p>Contactate con nosotros</p>
        <div>
          <FaWhatsapp
            className="backIcon whatsappIcon"
            onClick={(e) => handleSubmit(e, "whatsapp")}
          />
          <FaInstagram
            className="backIcon instagramIcon"
            onClick={(e) => handleSubmit(e, "instagram")}
          />
        </div>
      </ContainerIconFooter>
      <ContainerIconFooter>
        <p>❝Tomate un setsu, pedite un sushi❞</p>
      </ContainerIconFooter>
    </ContainerFooter>
  );
};

export default Footer;
