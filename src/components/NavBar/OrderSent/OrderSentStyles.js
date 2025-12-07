import styled from "styled-components";

export const ContainerOrderSent = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Cormorant Garamond", serif;
  align-items: center;
  gap: 10px;
  text-align: center;

  h4 {
    margin-top: 15px;
    font-size: 1.6rem;
  }

  input {
    width: 80%;
    height: 30px;
    font-size: 1.2rem;
    text-align: center;
    border-radius: 10px;
    border: 2px solid #bfa878;
    &.error {
      border-color: red;
    }
  }

  p {
    font-size: 1.2rem;
    margin: 0;
    &.total {
      font-weight: bold;
      font-size: 1.5rem;
    }
  }

  .payment-options {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;

    .payment-option {
      padding: 10px 15px;
      border-radius: 10px;
      border: 2px solid #bfa878;
      cursor: pointer;
      font-weight: bold;
      transition: 0.3s;
      user-select: none;

      &.selected {
        background-color: #1d3e32;
        color: white;
      }

      &.error {
        border-color: red;
      }

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  .cart-info {
    flex: 1; /* ocupa todo el espacio disponible */
    overflow-y: auto; /* scroll solo para la lista */
    margin: 10px 0;
    border-top: 1px solid #bfa878;
    border-bottom: 1px solid #bfa878;
    padding: 10px 0;
  }

  button {
    margin-top: 10px;
    padding: 15px;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    border-radius: 15px;
    background-color: #1d3e32;
    color: white;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      filter: brightness(1.1);
    }
  }

  /* --- MOBILE --- */
  @media (max-width: 480px) {
    width: 90%;
    padding: 20px;
    max-height: 90vh;

    h4 {
      font-size: 1.5rem;
    }

    input {
      font-size: 1rem;
    }

    p,
    .payment-options {
      font-size: 1rem;
    }

    .payment-options {
      flex-direction: column;
      gap: 10px;

      .payment-option {
        width: 100%;
        text-align: center;
      }
    }

    button {
      width: 100%;
      padding: 12px;
      font-size: 1.1rem;
    }
  }
`;
