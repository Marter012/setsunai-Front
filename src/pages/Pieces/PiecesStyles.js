import styled from "styled-components";

export const PiecesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Night in Tokyo", sans-serif;
  overflow: hidden;
  width: 100%;

  p {
    font-size: 3rem;
    margin-bottom: 0;
    font-weight: bold;

    @media (max-width: 1024px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;

export const CardsContainerPieces = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  padding: 30px;
  margin: 30px;
  background-color: rgba(29, 62, 50, 0.9);
  border-radius: 50px;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 90%;
    gap: 40px;
    padding: 20px;
    margin: 20px;
  }

  @media (max-width: 480px) {
    width: 95%;
    gap: 20px;
    padding: 10px;
    margin: 10px;
  }
`;

export const CardPieces = styled.div`
  width: 200px;
  height: 300px;
  background-color: #f4e9d8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  border: 5px solid #bfa878;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  p,
  h4 {
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 1rem;
    font-family: "Cormorant Garamond", serif;

    @media (max-width: 1024px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }

  h4 {
    font-weight: 800;
    font-size: 1.5rem;

    @media (max-width: 1024px) {
      font-size: 1.3rem;
    }

    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }

  img {
    width: 90%;
    height: 50%;
    object-fit: cover;

    @media (max-width: 1024px) {
      height: 45%;
    }

    @media (max-width: 480px) {
      height: 40%;
    }
  }
`;
