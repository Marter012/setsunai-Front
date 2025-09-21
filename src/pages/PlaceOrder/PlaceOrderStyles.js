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

export const ContainerCardPieces = styled.div`
  height: 90%;
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  scrollbar-width: none;
`;

export const CardOrderPieces = styled.div`
  background-image: url("https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754258745/SETSUNAI/ChatGPT_Image_1_jul_2025_11_23_14_a.m._wqv2k3.png");
  background-size: auto;
  color: black;
  width: 90%;
  min-height: 80px;
  padding: 5px;
  display: flex;
  overflow: hidden;
  border-top-right-radius: 40px;
  align-items: center;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  img {
    height: 100%;
    width: 30%;
    object-fit: cover;
  }
  section {
    text-align: center;
    p {
      font-size: 1.6em;
      margin: 0;
    }
    text {
      font-size: 1rem;
    }
  }
  div {
    display: flex;
    width: 20%;
    justify-content: space-evenly;
    align-items: center;
  }
  button {
    background-color: rgb(30, 61, 50, 0.5);
    padding: 10px 15px 10px 15px;
    border-radius: 20px;
    border: none;
    font-size: 1.2rem;
    font-weight: 900;
    cursor: pointer;
  }
`;
