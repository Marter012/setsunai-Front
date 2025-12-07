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

export const CardOrderPieces = styled.div`
  background-image: url("https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754258745/SETSUNAI/ChatGPT_Image_1_jul_2025_11_23_14_a.m._wqv2k3.png");
  background-size: auto;
  color: black;
  width: 60%;
  height: 80px !important;
  padding: 5px;
  display: flex;
  overflow: hidden;
  border-top-right-radius: 40px;
  align-items: center;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  img {
    width: 20%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  section {
    width: 60%;
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

  .btnPieces {
    width: 100%;
    display: flex;

    h4 {
      width: 70%;
    }

    span {
      background-color: #bfa878;
      padding: 5px 10px;
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
    }
  }

  .buttons {
    width: 20%;
    p {
      margin: 0;
    }
  }

  /* 📱 TABLET */
  @media (max-width: 900px) {
    width: 80%;
    height: 100px !important;

    section h4 {
      font-size: 1.6rem;
    }
    section p {
      font-size: 1rem;
    }
  }

  /* 📱 MOBILE (acá se unen section + buttons) */
  @media (max-width: 600px) {
    width: 95%;
    height: auto !important;
    padding: 10px;

    /* 🔥 LA CLAVE: cambia la dirección del card */
    flex-direction: column;
    gap: 5px;

    img {
      width: 100%;
      height: 120px;
      border-radius: 10px;
      object-fit: cover;
    }

    section {
      width: 100%;
      order: 1;

      h4 {
        font-size: 1.3rem;
      }
    }

    /* 🔥 Buttons se une debajo de section */
    .buttons {
      width: 100%;
      order: 2;
      display: flex;
      justify-content: center;
      margin-top: 5px;
    }
  }
`;

export const ContainerCombinedPieces = styled(ContainerCardPieces)`
  width: 100%;
  height: 100%;
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

export const CardCombinedPieces = styled(CardOrderPieces)`
  width: 500px;
  min-height: 150px;
  border-radius: 0px;
  background: none;
  position: relative;
  overflow: hidden;
  padding: 0;
  border-left: 5px solid #bfa878;
  border-right: 5px solid #bfa878;
  background-color: rgb(191, 168, 120, 0.7);
  cursor: pointer;

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

  section {
    width: 100%;
    text-align: center;
    justify-content: center;

    h4 {
      font-size: 3rem;
    }

    .infoPrice {
      font-weight: bold;
      margin-top: 10px;
    }
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
