import { styled } from "styled-components";
import { MdDeleteSweep } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

export const ContainerModalCart = styled.div`
  width: 400px;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Cormorant Garamond", serif;
  border: 3px solid #bfa878;
  box-shadow: 15px 15px 50px 5px;
  position: absolute;
  top: 10vh;
  right: ${(props) => (props.$activeCart ? "0px" : "-100vw")};
  z-index: +110;
  background-color: #1d3e32;
  transition: all 0.5s ease;
  position: fixed;
  h4 {
    width: 100%;
    font-size: 3rem;
    margin: 0;
    text-align: center;
  }

  p {
    font-size: 1.5rem;
    margin: 0;
  }

  /* MEDIA QUERIES */
  @media (max-width: 768px) {
    /* tablets */
    width: 400px;

    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    /* móviles */
    width: 90%;
    h4 {
      font-size: 2.5rem;
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
  overflow: hidden;
  .title {
    width: 100%;
    height: 10%;
    border-bottom: 3px solid black;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    position: absolute;
    font-size: 2.3rem;
    top: 10%;
  }
  img {
    width: 100% !important;
  }
  i {
    font-size: 2rem;
  }
`;

export const CartDeleteIcon = styled(MdDeleteSweep)`
  color: rgb(191, 168, 120);
  position: absolute;
  top: 15px;
  left: 15px;
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

export const CartCloseIcon = styled(IoMdCloseCircle)`
  right: 15px;
  color: rgb(191, 168, 120);
  position: absolute;
  top: 15px;
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
  position: relative;
  .empty-cart {
    position: absolute;
    width: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    p {
      font-size: 2rem;
      font-weight: 700;
    }
  }
`;

export const CardCart = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    position: absolute;
    object-fit: cover;
    opacity: 0.2;
  }

  h4,
  p,
  div {
    z-index: 1;
    opacity: 1;
  }
  h4 {
    font-size: 1.2rem;
  }

  p {
    width: 20%;

    font-weight: 800;
  }

  .dataProduct {
    width: 55%;
    display: flex;
    flex-direction: column;
    h4 {
      font-size: 1.2rem;
    }
    p {
      width: 100%;
      text-align: start;
      justify-content: start;
      font-size: 0.8rem;
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

  @media (max-width: 900px) {
    p{
      font-size: 1.5rem;
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
  font-weight: 800;
  p {
    font-size: 1.5rem;
  }
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
    gap: 10px;

    button {
      padding: 10px;
      font-size: 0.9rem;
    }
  }
`;
