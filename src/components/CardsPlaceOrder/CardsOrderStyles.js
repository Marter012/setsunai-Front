import styled from "styled-components";

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
    display: block;
  }
  section {
    width: 70%;
    text-align: center;
    h4 {
      font-size: 1.8em;
      margin: 0;
    }
    p {
      font-size: 1.2rem;
      margin: 0;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    width: 20%;
    justify-content: space-evenly;
    align-items: center;

    p {
      font-size: 1.5rem;
    }
  }
  .stylesButton {
    width: 100%;
    min-height: 10% ;
    flex-direction: row;
  }
  .stylesPrice{
    width: 100%;
    min-height: auto;
    flex-direction: row;
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
