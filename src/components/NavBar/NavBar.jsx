import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ModalCart from "./ModalCart/ModalCart";
import IconCart from "./IconCart/IconCart";
import {
  NavContainer,
  Hamburger,
  CartIconContainer,
  LinksContainer,
} from "./NavBarStyled";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const iconRef = useRef(null);
  const handleLinkClick = () => setMenuOpen(false);
  return (
    <>
      <NavContainer>
        <Hamburger onClick={() => setMenuOpen(!menuOpen)}>☰</Hamburger>

        <Link to="/" onClick={handleLinkClick} className="title">
          <img src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1765149464/SETSUNAI/Visual%20Items/logo_en_dorado_unqwwb.png" alt="" />
          <p >SETSU</p>
        </Link>

        <LinksContainer open={menuOpen}>
          <Link to="/" onClick={handleLinkClick}>
            Inicio
          </Link>
          <Link to="/Pieces" onClick={handleLinkClick}>
            Piezas
          </Link>
          <Link to="/PlaceOrder" onClick={handleLinkClick}>
            Hacer Pedido
          </Link>
        </LinksContainer>

        <CartIconContainer>
          <IconCart iconRef={iconRef} />
        </CartIconContainer>
      </NavContainer>
      <ModalCart iconRef={iconRef} />
    </>
  );
};

export default NavBar;
