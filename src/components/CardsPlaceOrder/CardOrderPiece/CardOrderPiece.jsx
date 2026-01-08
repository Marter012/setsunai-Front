import React, { useState } from "react";
import ButtonAddItem from "../../utils/Buttons/ButtonAddItem";
import SectionProductsAdd from "../../SectionProductsAdd/SectionProductsAdd";
import { CardOrderStyle, ContainerCardOrderStyle } from "./CardOrderPieceStyle";
import { useSelections } from "../../../hooks/useSelections";

const CardOrderPiece = ({ piece }) => {
  const [selectedSize, setSelectedSize] = useState(8);

  const finalPrice = selectedSize === 8 ? piece.price_8p : piece.price_16p;

  const { get, updateInclude } = useSelections();

  const selectionsForCart = piece ? get(piece._id) : null;

  const cartKey = piece
    ? `${piece._id}-${selectedSize}-${JSON.stringify(
        selectionsForCart
      )}`
    : null;
  return (
    <ContainerCardOrderStyle>
      <CardOrderStyle>
        <img src={piece.img} alt={piece.name} />

        <section>
          <div className="btnPieces">
            <h4>{piece.name}</h4>

            <span
              className={selectedSize === 8 ? "selected" : ""}
              onClick={() => setSelectedSize(8)}
            >
              8 p
            </span>

            <span
              className={selectedSize === 16 ? "selected" : ""}
              onClick={() => setSelectedSize(16)}
            >
              16 p
            </span>
          </div>

          <p className="description">{piece.description}</p>
        </section>

        <div className="buttons">
          <p>${finalPrice}</p>
          <ButtonAddItem
            item={{
              ...piece,
              selectedSize,
              finalPrice,
              selections: selectionsForCart,
              cartKey,
            }}
          />
          
        </div>
      </CardOrderStyle>

      <SectionProductsAdd
        ownerId={piece._id}
        data={get(piece._id).include}
        onChange={updateInclude}
      />
    </ContainerCardOrderStyle>
  );
};

export default CardOrderPiece;
