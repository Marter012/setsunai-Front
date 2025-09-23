import React from "react";
import { PrincipalContainer } from "../../Styles/GlobalStyles";
import {
  CardPieces,
  CardsContainerPieces,
  PiecesContainer,
} from "./PiecesStyles";
import { useSelector } from "react-redux";
const Pieces = () => {
  const pieces = useSelector((state) => state.pieces.items);

  return (
    <PrincipalContainer>
      <PiecesContainer>
        <p>! Conoce nuestras piezas !</p>
        <CardsContainerPieces>
          {pieces.map((piece) => (
            <CardPieces key={piece.id}>
              <img src={piece.img} alt={piece.name} />
              <h4>{piece.name}</h4>
              <p>{piece.description}</p>
            </CardPieces>
          ))}
        </CardsContainerPieces>
      </PiecesContainer>
    </PrincipalContainer>
  );
};

export default Pieces;
