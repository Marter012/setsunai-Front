import styled from "styled-components";

export const ContainerCardOrderStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 200px;
  padding: 5px;
  background-color: rgb(232, 209, 170);
  overflow: hidden;
  border-top-right-radius: 40px;
  align-items: center;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  @media (max-width: 900px) {
    width: 90%;
    height: auto;
  }
`;

export const CardOrderStyle = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
  align-items: center;
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
    justify-content: center;
    align-items: center;
    h4 {
      width: 70%;
    }

    span {
      min-width: 40px;
      min-height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #bfa878;
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
      font-size: 2rem;
      margin: 0;
    }
  }

  /* 📱 TABLET */
  @media (max-width: 900px) {
    width: 90%;

    section h4 {
      font-size: 1.6rem;
    }
    section p {
      font-size: 1rem;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: stretch;

    img {
      width: 100%;
      height: 160px;
      order: 1;
    }

    section {
      width: 100%;
      order: 2;
    }

    .buttons {
      width: 100%;
      order: 3;               /* 🔥 se va al final */
      margin-top: 10px;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;