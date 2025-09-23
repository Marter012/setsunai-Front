import React from "react";
import { PrincipalContainer } from "../../Styles/GlobalStyles";
import {
  PlaceOrderContainer,
  PlaceOrderCart,
  PlaceOrderPieces,
} from "./PlaceOrderStyles";
import CardOrderCombinedPieces from "../../components/CardsPlaceOrder/CardOrderCombinedPieces";
import CardsOrderPieces from "../../components/CardsPlaceOrder/CardsOrderPieces";

const PlaceOrder = () => {
  
  return (
    <PrincipalContainer>
      <PlaceOrderContainer>
        <PlaceOrderPieces>
          <p className="title">Que piezas te gustaria probar hoy?</p>
          <CardsOrderPieces />
        </PlaceOrderPieces>

        <PlaceOrderCart>
          <p className="title">Combinados listos </p>
          <CardOrderCombinedPieces />
        </PlaceOrderCart>
      </PlaceOrderContainer>
    </PrincipalContainer>
  );
};

export default PlaceOrder;
