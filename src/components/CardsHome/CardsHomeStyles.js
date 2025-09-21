import styled from "styled-components";

export const ContainerCardsHome = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: ${(props) => props.$zIndex};
  background-color: ${(props) => props.$backgroundContainer};
  transition-duration: 1s;

  img {
    width: 30%;
  }
  .SUSHI {
    position: absolute;
    font-size: 30rem;
    font-family: Night in Tokyo;
    transition-duration: 1s;
    opacity: ${(props) => (props.$backgroundContainer == "transparent" ? 1 : 0)};
  }
`;

export const SectionCardsHome = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  transition-duration: 1s;
  gap: 30px;
  color: ${(props) =>
    props.$backgroundContainer == "#1d3e32" ? "white;" : "black;"};
  position: relative;
  z-index: +5;
  p {
    background-color: ${(props) => props.$backgroundContainer};
  }
`;

export const CardHome = styled.div`
  width: 200px;
  transition-duration: 1s;
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
  p {
    min-width: 300px;
    position: relative;
    text-align: center;
    z-index: +1;
    opacity: 0;
    transition-duration: 1s;
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
    top: 0%;
    left: 0px;
    transition-duration: 1s;
    z-index: 0;
  }

  &&:hover {
    width: 300px;
    height: 80vh;
    transition-duration: 1s;
    opacity: 1;
    border-radius: 30px;

    p {
      opacity: 1;
      text-align: center;
      justify-content: center;
      transition-duration: 1s;
    }
    img {
      transition-duration: 1s;
      background-color: rebeccapurple;
    }
  }
`;

export const CardRecomendation = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  transition-duration: 1s;
  opacity: ${(props) => (props.$backgroundContainer == "#bfa878" ? "1" : "0")};
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
  }
  .Tipe {
    font-size: 2.2rem;
  }
  .Title {
    font-size: 1.5rem;
    text-decoration: underline;
  }
  .NPieces {
    font-size: 1.2rem;
  }
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
`;

export const CardPromotion = styled(CardRecomendation)`
  opacity: ${(props) => (props.$backgroundContainer == "#1d3e32" ? "1" : "0")};
  div {
    background-color: #bfa878;
  }
`;
