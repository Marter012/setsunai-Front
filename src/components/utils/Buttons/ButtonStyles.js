import styled from "styled-components";

export const ButtonAddStyled = styled.div`
  min-width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin: 0;
    font-size: 1.5rem !important;
    color: #111;
  }
    .paddingAct {
    padding: 5px 15px;
  }

  button {
    min-height: 30px !important;
    min-width: 30px !important;
    border-radius: 24px;
    border: none;
    font-size: 1.2rem;
    font-weight: 900;
    cursor: pointer;
    background-color: rgba(30, 61, 50, 0.7);
    color: #f4e9d8;
    transition: all 0.2s ease;

    align-self: center; /* <-- hace que solo ocupe el ancho de su contenido */
  }
  button:hover {
    background-color: rgba(30, 61, 50, 1);
  }

  .disabled {
    display: none;
  }
`;

export const ContainerQuantity = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center; /* centra verticalmente */
`;
