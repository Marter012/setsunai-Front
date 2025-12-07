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
  const uniqueCategories = [
    ...new Set(pieces.map((item) => item.category.toUpperCase())),
  ];
  return (
    <PrincipalContainer>
      <PiecesContainer>
        <p>! Conoce nuestras piezas !</p>
        <CardsContainerPieces>
          {uniqueCategories.map((category) => (
            <>
              <h3>{category.toUpperCase()}</h3>
              <div className="cardsCategory " key={category}>
                {pieces
                  .filter((piece) => piece.category.toUpperCase() === category)
                  .map((piece) => (
                    <CardPieces key={piece.id}>
                      <h4>{piece.name}</h4>
                      <img src={piece.img} alt={piece.name} />
                      <p className="description">{piece.description}</p>
                      <p className="protein">
                        Ingrediente Principal : <br /> {piece.protein}
                      </p>
                    </CardPieces>
                  ))}
              </div>
            </>
          ))}
          {/* {pieces.map((piece) => (
            <CardPieces key={piece.id}>
              <img src={piece.img} alt={piece.name} />
              <h4>{piece.name}</h4>
              <p>{piece.description}</p>
              <p className="protein">Ingrediente Principal : <br /> {piece.protein}</p>
            </CardPieces>
          ))} */}
        </CardsContainerPieces>
      </PiecesContainer>
    </PrincipalContainer>
  );
};

export default Pieces;
