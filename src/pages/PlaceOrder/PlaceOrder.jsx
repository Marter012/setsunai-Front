import React, { useState } from "react";
import { PrincipalContainer } from "../../Styles/GlobalStyles";
import {
  PlaceOrderContainer,
  PlaceOrderCart,
  PlaceOrderPieces,
  SelectButtonsMenu,
} from "./PlaceOrderStyles";
import CardsOrderPieces from "../../components/CardsPlaceOrder/CardsOrderPieces";
import CardsOrderCombinedPieces from "../../components/CardsPlaceOrder/CardsOrderCombinedPieces";

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
              <CardsOrderCombinedPieces/>
            </>
          )}
          {selectMenu === false && <CardsOrderPieces />}
          {selectMenu === true && <CardsOrderCombinedPieces />}
        </PlaceOrderPieces>
      </PlaceOrderContainer>
    </PrincipalContainer>
  );
};

export default PlaceOrder;
