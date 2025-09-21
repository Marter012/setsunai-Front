import { styled } from "styled-components";

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
  right: 0;
  z-index: +99;
  background-color: #1d3e32;

  h4 {
    font-size: 2rem;
    margin: 0;
    height: 10%;
  }
  p {
    font-size: 1.5rem;
    margin: 0;
  }
`;

export const SectionModalCart = styled.div`
  width: 95%;
  height: 95%;
  background-color: #f4e9d8;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CardsCart = styled.div`
  width: 90%;
  height: 75%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  scrollbar-width: none;
`;

export const CardCart = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #bfa878;
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
  align-items: center;
  img {
    width: 20%;
    object-fit: cover;
  }
`;

export const TotalCart = styled.div`
  width: 100%;
  height: 15%;
  background-color: rgb(191, 168, 120, 0.5);
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
`;
