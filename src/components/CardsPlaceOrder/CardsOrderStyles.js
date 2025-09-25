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
  /* --- ESCRITORIO --- */
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
  box-shadow: 0 19px 38px rgba(0,0,0,0.3), 0 15px 12px rgba(0,0,0,0.22);

  img {
    height: 100%;
    width: 30%;
    object-fit: cover;
    display: block;
  }

  section {
    width: 70%;
    text-align: center;
    h4 { font-size: 1.8em; margin: 0; }
    p { font-size: 1.2rem; margin: 0; }
  }

  div {
    display: flex;
    flex-direction: column;
    width: 20%;
    justify-content: space-evenly;
    align-items: center;

    p { font-size: 1.5rem; }
  }

  .stylesButton {
    width: 100%;
    min-height: 10%;
    flex-direction: row;
  }

  .stylesPrice {
    width: 100%;
    min-height: auto;
    flex-direction: row;
  }

  button {
    background-color: rgba(30,61,50,0.5);
    padding: 10px 15px;
    border-radius: 20px;
    border: none;
    font-size: 1.2rem;
    font-weight: 900;
    cursor: pointer;
  }
.price-and-buttons {
  display: flex;
  flex-direction: row; /* escritorio: precio a la izquierda, botones a la derecha */
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (max-width: 480px) {
    flex-direction: column; /* mobile: precio arriba, botones debajo */
    gap: 5px;
    align-items: center;
  }
}
  /* --- MOBILE --- */
  @media (max-width: 480px) {
    flex-direction: column; /* Imagen arriba, resto abajo */
    align-items: center;
    min-height: auto;
    section {
      width: 100%;
      order: 1;
      text-align: center;
      padding: 10px;
      .stylesPrice, .stylesButton {
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 5px;
      }
    }
    img {
      width: 100%;
      height: auto;
      order: 0;
      border-top-right-radius: 40px;
    }
  }
`;
