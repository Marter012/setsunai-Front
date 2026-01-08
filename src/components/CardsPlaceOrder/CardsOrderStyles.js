import styled from "styled-components";

export const ContainerCardPieces = styled.div`
  width: 100%;
  height: 100%;
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 📱 Mobile */
  @media (max-width: 600px) {
    gap: 20px;
  }
`;

export const ContainerCombinedPieces = styled.div`
  width: 100%;
  height: 100%;
  gap: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  place-items: center;

  /* 📱 TABLET */
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  /* 📱 MOBILE */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const CardCombinedPieces = styled.div`
  width: 500px;
  height: 150px;
  position: relative;
  overflow: hidden;
  padding: 0;
  border-left: 5px solid #bfa878;
  border-right: 5px solid #bfa878;
  background-color: rgb(191, 168, 120, 0.7);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  span {
    font-size: 1rem;
    position: absolute;
    bottom: 5px;
    right: 5px;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(${(props) => props.backImg});
    background-size: cover;
    background-position: center;
    opacity: 0.3;
    z-index: -1;
  }

  &&:hover {
    filter: brightness(1.1);
    box-shadow: 0 22px 45px rgba(0, 0, 0, 0.4), 0 18px 15px rgba(0, 0, 0, 0.32);
  }

  img {
    width: 40%;
    border-right: 5px solid #bfa878;
    height: 100%;
  }
  p,
  h4 {
    margin: 0;
  }
  p {
    font-size: 1.2rem;
  }
  h4 {
    font-size: 3rem;
  }
  /* 📱 TABLET */
  @media (max-width: 900px) {
    width: 380px;

    section h4 {
      font-size: 2.2rem;
    }
  }

  /* 📱 MOBILE */
  @media (max-width: 600px) {
    width: 90%;
    min-height: 130px;

    img {
      width: 35%;
    }

    section h4 {
      font-size: 1.8rem;
    }

    span {
      font-size: 0.9rem;
    }
  }
`;
