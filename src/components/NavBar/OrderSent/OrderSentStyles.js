import styled from "styled-components";

export const ContainerOrderSent = styled.div`
  width: 90%;
  max-width: 400px;
  height: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  text-align: center;

  h4 {
    font-size: 1.5rem;
    color: #8b5e3c;
    border-bottom: 2px solid #bfa878;
    margin-bottom: 15px;
  }

  input {
    background-color: #f3e0c3;
    width: 100%;
    height: 40px;
    border-radius: 25px;
    border: 1px solid #d1b887;
    text-align: center;
    font-size: 1.2rem;
    transition: all 0.3s ease;
  }

  input:focus {
    outline: none;
    border-color: #8b5e3c;
    box-shadow: 0 0 8px rgba(139, 94, 60, 0.4);
  }

  input::placeholder {
    color: #8b5e3c;
    opacity: 0.8;
    font-style: italic;
  }

  p {
    font-size: 1rem;
    color: #5a4632;
    margin: 5px 0;
  }

  .payment-options {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 10px 0;
  }

  .payment-option {
    background-color: #f3e0c3;
    padding: 10px 20px;
    border-radius: 25px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid transparent;
  }

  .payment-option:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .payment-option.selected {
    background-color: #bfa878;
    color: white;
    border: 1px solid #8b5e3c;
    transform: scale(1.1);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
  .error {
    border: 2px solid red;
    border-radius: 6px;
  }

  .payment-option.error {
    border: 2px solid red;
    border-radius: 6px;
  }

  button {
    background-color: #bfa878;
    border: none;
    padding: 15px;
    border-radius: 25px;
    font-weight: 800;
    border: 1px solid #8b5e3c;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;
  }

  button:hover {
    transform: scale(1.05);
    background-color: #d1b887;
  }
  .total {
    font-weight: 700;
    font-size: 1.2rem;
  }
`;
