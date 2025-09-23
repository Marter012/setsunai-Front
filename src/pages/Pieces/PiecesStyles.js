import styled from "styled-components";

export const PiecesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  font-family: Night in Tokyo;
  overflow: hidden;

  p {
    font-size: 3rem;
    margin-bottom: 0;
    font-weight: bold;
  }
`;

export const CardsContainerPieces = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  padding: 30px;
  margin: 30px;
  background-color: rgb(29, 62, 50, 0.9);
  border-radius: 50px;
  justify-content: center;
`;

export const CardPieces = styled.div`
  width: 200px;
  height: 300px;
  overflow: hidden;
  background-color: #f4e9d8;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  border: 5px solid #bfa878;
  border-radius: 5px;
  p,
  h4 {
    margin: 0;
    padding: 0;
  }
  p {
    font-size: 1rem;
    font-family: "Cormorant Garamond", serif;
  }
  img {
    width: 90%;
    height: 50%;
    object-fit: cover;
  }
  h4 {
    font-weight: 800;
    font-size: 1.5rem;
  }
`;
