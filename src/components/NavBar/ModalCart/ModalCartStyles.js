import { styled } from "styled-components";
import { MdDeleteSweep } from "react-icons/md";

export const ContainerModalCart = styled.div`
  width: 400px;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Cormorant Garamond", serif;
  border: 3px solid #bfa878;
  box-shadow: 15px 15px 50px 5px;
  position: absolute;
  top: 10vh;
  right: ${(props) => (props.$active ? "15px" : "-500px")};
  z-index: 99;
  background-color: #1d3e32;
  transition: all 0.5s ease;

  h4 {
    width: 100%;
    font-size: 2rem;
    margin: 0;
    height: 10%;
    text-align: center;
    border-bottom: 3px solid black;
  }

  p {
    font-size: 1.5rem;
    margin: 0;
  }

  /* MEDIA QUERIES */
  @media (max-width: 768px) { /* tablets */
    width: 300px;
    height: 70vh;

    h4 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) { /* móviles */
    width: 90%;
    height: 60vh;
    right: ${(props) => (props.$active ? "5%" : "-500px")};

    h4 {
      font-size: 1.2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const SectionModalCart = styled.div`
  width: 95%;
  height: 95%;
  background-color: #f4e9d8;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    h4 {
      border: none;
    }
  }

  i {
    background-color: red;
    font-size: 2rem;
  }
`;

export const CartDeleteIcon = styled(MdDeleteSweep)`
  color: rgb(191, 168, 120);
  font-size: 2rem;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
    scale: 1.2;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    top: 10px;
    right: 10px;
  }
`;

export const CardsCart = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
  scrollbar-width: none;
  text-align: center;
`;

export const CardCart = styled.div`
  width: 100%;
  min-height: 50px;
  max-height: 50px;
  background-color: #bfa878;
  display: flex;
  overflow: hidden;

  img {
    width: 15%;
    object-fit: cover;
  }

  h4 {
    font-size: 1.2rem;
    width: 40%;
  }

  p {
    font-size: 1rem;
    width: 20%;
  }

  div {
    width: 25%;
    min-height: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    button {
      background-color: rgba(30, 61, 50, 0.5);
      width: 30%;
      height: 60%;
      border-radius: 20px;
      border: none;
      font-size: 1.2rem;
      font-weight: 900;
      cursor: pointer;
    }

    p {
      font-size: 1.7rem;
    }
  }

  img,
  p,
  h4,
  span {
    height: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 480px) {
    img {
      width: 20%;
    }

    h4 {
      font-size: 1rem;
      width: 35%;
    }

    p {
      font-size: 0.8rem;
      width: 15%;
    }

    div button {
      width: 25%;
      font-size: 1rem;
    }

    div p {
      font-size: 1.2rem;
    }
  }
`;

export const TotalCart = styled.div`
  width: 100%;
  height: 15%;
  background-color: rgba(191, 168, 120, 0.5);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 3px solid black;

  button {
    background-color: #bfa878;
    border: none;
    padding: 15px;
    border-radius: 10px;
    font-weight: 800;
    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }
  }

  .disabled {
    background-color: #ccc;
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;

    button {
      padding: 10px;
      font-size: 0.9rem;
    }
  }
`;
