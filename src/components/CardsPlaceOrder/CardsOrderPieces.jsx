import React from "react";
import { useSelector } from "react-redux";
import { ContainerCardPieces } from "./CardsOrderStyles";
import CardOrderPiece from "./CardOrderPiece/CardOrderPiece";

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
        piecesItems.map((piece) => (
          <>
            <CardOrderPiece key={piece._id} piece={piece} />
      
          </>
        ))}
    </ContainerCardPieces>
  );
};


export default CardsOrderPieces;
