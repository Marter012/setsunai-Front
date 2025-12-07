import styled from "styled-components";

export const ButtonAddStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin: 0;
    font-size: 1.5rem !important;
    color: #111;
  }

  button {
    padding: 5px 12px;
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
