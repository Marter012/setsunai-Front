import { motion } from "framer-motion";
import styled from "styled-components";
import { CardOrderPieces } from "../CardsOrderStyles";

export const ModalContainerCP = styled(motion.div)`
  width: 80%;
  height: 80%;
  margin-top: 5vh;
  position: fixed;
  z-index: +100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h2 {
    font-size: 3rem;
    margin-top: 10px;
    margin-bottom: 0;
    color: #f4e9d8;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
    z-index: -1;
  }

  /* 📱 TABLET */
  @media (max-width: 900px) {
    width: 80%;
    height: 70%;
    h2 {
      font-size: 2.2rem;
    }
  }

  /* 📱 MOBILE */
  @media (max-width: 600px) {
    margin-top: 0;

    h2 {
      font-size: 1.8rem;
    }
  }
`;

export const ModalCardCombinedPieces = styled(CardOrderPieces)`
  width: 90%;
  min-height: 100px !important;
  padding: 0;
  flex-direction: column;
  &&:hover {
    filter: brightness(1.1);
  }
  border-bottom-left-radius: 10px;

  p,
  h4 {
    margin: 0;
    padding: 0;
  }
  h4 {
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
    border-bottom: 1px solid black;
  }
  .separatorDiv {
    display: flex;
    width: 100%;
    height: 100%;
  }
  .left {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p {
      font-size: 1.2rem;
    }
  }

  .right {
    width: 60%;
    display: flex;
    .dataSent {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    p {
      font-size: 1.8rem;
      font-weight: 800;
    }
    div {
      width: 50%;
      align-items: center;
      gap: 10px;
    }
  }

  /* 📱 TABLET */
  @media (max-width: 900px) {
    min-height: 90px;

    .left {
      h4 {
        font-size: 1.4rem;
      }

      div p {
        font-size: 0.9rem;
      }
    }

    .right p {
      font-size: 1.5rem;
    }
  }

  /* 📱 MOBILE */
  @media (max-width: 600px) {
    min-height: 200px !important;
    .separatorDiv {
      flex-direction: column;
    }
    h4 {
    padding: 20px;
      font-size: 1.2rem;
    }
    .left {
      width: 100%;
      height: 30%;
    }

    .right {
      width: 100%;
      height: 100%;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;
