import styled from "styled-components";

export const PlaceOrderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
export const PlaceOrderPieces = styled.div`
  width: 60%;
  height: 85vh;
  text-align: center;

  p {
    font-size: 2.5rem;
    margin: 0;
    margin-bottom: 10px;
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
  }
  div {
    box-shadow: none;

    div {
      min-height: 150px;
      border-radius: 0%;
    }
  }
`;
