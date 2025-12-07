import styled from "styled-components";

export const PiecesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100%;
  padding: 50px 20px;
  p {
    font-size: 3rem;
    font-weight: 800;
  }
  @media (max-width: 900px) {
    p {
      font-size: 3rem;
    }
  }

  @media (max-width: 600px) {
    p {
      font-size: 2rem;
    }
  }
`;

export const CardsContainerPieces = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px; /* separación entre categorías */

  .categoryBlock {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 25px 30px;
    border-radius: 40px;
    /* Fondo semitransparente distinto según categoría usando nth-child */
    &:nth-child(1) {
      background-color: rgba(29, 62, 50, 0.85); /* verde oscuro */
    }
    &:nth-child(2) {
      background-color: rgba(62, 29, 50, 0.85); /* púrpura oscuro */
    }
    &:nth-child(3) {
      background-color: rgba(50, 50, 62, 0.85); /* azul oscuro */
    }
    &:nth-child(4) {
      background-color: rgba(62, 50, 29, 0.85); /* marrón oscuro */
    }
  }

  h3 {
    width: 100%;
    text-align: center;
    margin-bottom: 25px;
    color: #f4e9d8;
    font-size: 3rem;
    text-shadow: -1px -1px 0 #bfa878, 1px -1px 0 #bfa878, -1px 1px 0 #bfa878,
      1px 1px 0 #bfa878;
  }

  .cardsCategory {
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* espacio entre cards */
    justify-content: center;
  }
`;

export const CardPieces = styled.div`
  width: 250px;
  height: 350px;
  background-color: #f4e9d8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  border: 5px solid #bfa878;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 90%;
    height: 30%;
    object-fit: cover;
    border-radius: 5px;
  }

  p,
  h4 {
    margin: 0;
    padding: 0;
  }
  h4 {
    font-size: 2rem;
  }
  .protein {
    font-size: 0.85rem;
    font-style: italic;
  }
  .description {
    font-size: 1.3rem;
  }
`;
