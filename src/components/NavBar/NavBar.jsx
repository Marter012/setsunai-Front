import React from "react";
import {
  ContainerLinks,
  ContainerNavBar,
  ContainerTitle,
} from "./NavBarStyled";
import { Link } from "react-router-dom";
import ModalCart from "./ModalCart/ModalCart";
import IconCart from "./IconCart/IconCart";
import Overlay from "../ModalOverlay/ModalOverlay";
import { useSelector } from "react-redux";

const NavBar = () => {

   const active = useSelector(state => state.cart.active);
  
  return (
    <>
      {active && <Overlay />}
      <ContainerNavBar>
        <ModalCart active={active} />
        <ContainerTitle>
          <Link to="/">SETSU</Link>
        </ContainerTitle>
        <ContainerLinks>
          <Link to="/">Inicio</Link>
          <Link to="/Pieces">Piezas</Link>
          <Link to="/PlaceOrder">Hacer Pedido</Link>
          <IconCart
          />
        </ContainerLinks>
      </ContainerNavBar>
    </>
  );
};

export default NavBar;
