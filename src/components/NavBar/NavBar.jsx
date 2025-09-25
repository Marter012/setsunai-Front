import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../store/slice/cartSlice";
import ModalCart from "./ModalCart/ModalCart";
import IconCart from "./IconCart/IconCart";
import Overlay from "../ModalOverlay/ModalOverlay";
import {
  NavContainer,
  Title,
  Hamburger,
  CartIconContainer,
  LinksContainer,
} from "./NavBarStyled";

const NavBar = () => {
  const dispatch = useDispatch();
  const activeCart = useSelector((state) => state.cart.active);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      {activeCart && <Overlay />}
      <NavContainer>
        <Hamburger onClick={() => setMenuOpen(!menuOpen)}>☰</Hamburger>

        <Title>
          <Link to="/">SETSU</Link>
        </Title>

        <LinksContainer open={menuOpen}>
          <Link to="/" onClick={handleLinkClick}>Inicio</Link>
          <Link to="/Pieces" onClick={handleLinkClick}>Piezas</Link>
          <Link to="/PlaceOrder" onClick={handleLinkClick}>Hacer Pedido</Link>
        </LinksContainer>

        <CartIconContainer>
          <IconCart onClick={() => dispatch(toggleCart())} />
        </CartIconContainer>

        <ModalCart active={activeCart} />
      </NavContainer>
    </>
  );
};

export default NavBar;
