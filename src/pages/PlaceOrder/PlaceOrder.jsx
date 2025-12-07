import React, { useState } from "react";
import { PrincipalContainer } from "../../Styles/GlobalStyles";
import {
  PlaceOrderContainer,
  PlaceOrderCart,
  PlaceOrderPieces,
  SelectButtonsMenu,
} from "./PlaceOrderStyles";
import CardOrderCombinedPieces from "../../components/CardsPlaceOrder/CardOrderCombinedPieces";
import CardsOrderPieces from "../../components/CardsPlaceOrder/CardsOrderPieces";

const PlaceOrder = () => {
  const [selectMenu, setSelectMenu] = useState(false);
console.log(selectMenu);
  return (
    <PrincipalContainer>
      <PlaceOrderContainer>
        <p>Que te gustaria probar hoy?</p>

        <SelectButtonsMenu>
          <button
            className={selectMenu === false ? "selected" : ""}
            onClick={() => setSelectMenu(false)}
          >
            Piezas
          </button>
          <button
            className={selectMenu === true ? "selected" : ""}
            onClick={() => setSelectMenu(true)}
          >
            Combinados
          </button>
        </SelectButtonsMenu>

        <PlaceOrderPieces>
          {selectMenu === "" && (
            <>
              <CardsOrderPieces />
              <CardOrderCombinedPieces />
            </>
          )}
          {selectMenu === false && <CardsOrderPieces />}
          {selectMenu === true && <CardOrderCombinedPieces />}
        </PlaceOrderPieces>
      </PlaceOrderContainer>
    </PrincipalContainer>
  );
};

export default PlaceOrder;
