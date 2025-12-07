import styled from "styled-components";

export const PlaceOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  p {
    font-size: 3rem;
    margin: 20px;
    font-weight : 800;
  }
`;

export const SelectButtonsMenu = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  margin: 10px;

  button {
    width: 100%;
    background-color: rgba(30, 61, 50, 0.3);
    padding: 10px 15px;
    border: none;
    font-size: 1.2rem;
    font-weight: 900;
    cursor: pointer;
    transition-duration: 0.5s;
  }

  button:hover {
    background-color: rgba(30, 61, 50, 0.7);
  }

  .selected {
    background-color: rgba(30, 61, 50, 0.7);
    color: white;
  }
`;

export const PlaceOrderPieces = styled.div`
  width: 100%;
  min-height: 85vh;
  display: flex;
  flex-direction: column; /* apila verticalmente CardsOrderPieces y Combined */
  gap: 12px;
  text-align: center;
  align-items: center;
  @media (max-width: 1024px) {
    width: 90%;
    min-height: auto;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

export const PlaceOrderCart = styled.div`
  width: 30%;
  height: 85vh;
  text-align: center;

  p {
    font-size: 2.5rem;
    margin: 0 0 10px 0;

    @media (max-width: 1024px) {
      font-size: 2rem;
    }
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  div {
    box-shadow: none;

    div {
      min-height: 150px;
      border-radius: 0%;
    }
  }

  @media (max-width: 1024px) {
    width: 90%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;
