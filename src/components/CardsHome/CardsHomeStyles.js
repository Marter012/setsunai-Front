import styled from "styled-components";

export const ContainerCardsHome = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: ${(props) => props.$zIndex};
  background-color: ${(props) => props.$backgroundContainer};
  transition: 1s;

  img {
    width: 30%;
  }

  .SUSHI {
    position: absolute;
    font-size: 30rem;
    font-family: "Night in Tokyo", sans-serif;
    transition: 1s;
    opacity: ${(props) =>
      props.$backgroundContainer === "transparent" ? 1 : 0};

    @media (max-width: 768px) {
      font-size: 15rem;
    }
    @media (max-width: 480px) {
      font-size: 10rem;
    }
  }
`;

export const SectionCardsHome = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  color: ${(props) =>
    props.$backgroundContainer === "#1d3e32" ? "white" : "black"};
  position: relative;
  z-index: 5;
  transition: 1s;

  p {
    background-color: ${(props) =>
      props.$backgroundContainer === "transparent"
        ? "#bfa878"
        : props.$backgroundContainer};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    height: auto;
    padding: 20px 0;
  }

  @media (max-width: 480px) {
    gap: 15px;
    padding: 10px 0;
  }
`;

export const CardHome = styled.div`
  width: 200px;
  height: 70%;
  background-color: beige;
  position: relative;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0px 0px 30px 0.1px black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  opacity: 0.7;
  cursor: pointer;
  transition: 1s;

  p {
    min-width: 300px;
    position: relative;
    text-align: center;
    z-index: 1;
    opacity: 0;
    transition: 1s;
  }

  .Title {
    font-size: 2rem;
    font-weight: 700;
  }
  .Text {
    font-size: 1.2rem;
    font-weight: 700;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    transition: 1s;
  }

  &:hover {
    width: 300px;
    height: 80vh;
    opacity: 1;
    border-radius: 30px;

    p {
      opacity: 1;
      text-align: center;
      justify-content: center;
    }

    img {
      background-color: rebeccapurple;
    }
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 50vh;

    &:hover {
      width: 250px;
      height: 55vh;
    }

    p {
      min-width: 200px;
    }
  }

  @media (max-width: 480px) {
    width: 90%;
    height: 40vh;

    &:hover {
      width: 90%;
      height: 45vh;
    }

    p {
      min-width: auto;
      font-size: 0.9rem;
    }

    .Title {
      font-size: 1.5rem;
    }

    .Text {
      font-size: 0.9rem;
    }
  }
`;

// Solo visible en escritorio
export const CardRecomendation = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  transition: 1s;
  opacity: ${(props) => (props.$backgroundContainer === "#bfa878" ? 1 : 0)};
  text-align: center;

  div {
    width: 20%;
    height: 70%;
    background-color: #1d3e32;
    color: white;
    box-shadow: 10px 10px 20px 1px black;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    overflow: hidden;
    transition: 1s;
  }

  .Tipe {
    font-size: 2.2rem;
  }

  .Title {
    font-size: 1.5rem;
    text-decoration: underline;
  }

  .NPieces,
  .Pieces {
    font-size: 1.2rem;
  }

  img {
    width: 100%;
  }

  .Left {
    left: 5%;
  }
  .Right {
    right: 5%;
  }

  /* Ocultar en tablets y móviles */
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const CardPromotion = styled(CardRecomendation)`
  opacity: ${(props) => (props.$backgroundContainer === "#1d3e32" ? 1 : 0)};
  div {
    background-color: #bfa878;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
