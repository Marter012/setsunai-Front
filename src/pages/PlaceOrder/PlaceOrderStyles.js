import styled from "styled-components";

export const PlaceOrderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PlaceOrderPieces = styled.div`
  width: 60%;
  height: 85vh;
  text-align: center;

  p {
    font-size: 2.5rem;
    margin: 0;
    margin-bottom: 10px;

    @media (max-width: 1024px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 1024px) {
    width: 90%;
    height: auto;
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
    margin: 0;
    margin-bottom: 10px;

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
