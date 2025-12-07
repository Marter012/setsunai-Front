import React from "react";
import { useSelector } from "react-redux";
import { CardOrderPieces, ContainerCardPieces } from "./CardsOrderStyles";
import ButtonAddItem from "../utils/Buttons/ButtonAddItem";

const CardsOrderPieces = () => {
  const piecesState = useSelector((state) => state.pieces);

  const {
    items: piecesItems,
    loading: piecesLoading,
    error: piecesError,
  } = piecesState;

  return (
    <ContainerCardPieces>
      {piecesLoading && <p>Cargando piezas...</p>}
      {piecesError && <p>Error al cargar piezas: {piecesError}</p>}

      {!piecesLoading &&
        !piecesError &&
        piecesItems.map((piece) => <CardPiece key={piece._id} piece={piece} />)}
    </ContainerCardPieces>
  );
};

const CardPiece = ({ piece }) => {
  const [selectedSize, setSelectedSize] = React.useState(8);

  const finalPrice =
    selectedSize === 8 ? piece.price_8p : piece.price_16p;

  return (
    <CardOrderPieces>
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
        <ButtonAddItem item={{ ...piece, selectedSize, finalPrice }} />
      </div>
    </CardOrderPieces>
  );
};

export default CardsOrderPieces;
