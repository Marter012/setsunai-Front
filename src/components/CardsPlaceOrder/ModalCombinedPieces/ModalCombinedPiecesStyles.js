import { motion } from "framer-motion";
import styled from "styled-components";
import { CardOrderPieces } from "../CardsOrderStyles";

export const ModalContainerCP = styled(motion.div)`
  width: 80%;
  height: 80%;
  margin-top: 5vh;
  position: fixed;
  background: ${({ img }) => `url(${img})`};
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
    font-size: 2.8rem;
    margin-top: 10px;
    margin-bottom: 0;
    color: #f4e9d8;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4;
    z-index: -1;
  }

  /* 📱 TABLET */
  @media (max-width: 900px) {
    width: 80%;
    height: 80%;
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
  min-height: 80px;
  padding-top: 0;
  padding-bottom: 0;
  cursor: pointer;

  &&:hover {
    filter: brightness(1.1);
  }

  p,
  h4 {
    margin: 0;
    padding: 0;
  }

  .left {
    border-left: 3px solid black;
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    h4 {
      font-size: 1.2rem;
      text-align: start;
    }

    div {
      display: flex;
      justify-content: space-evenly;

      p {
        font-size: 1rem;
      }
    }
  }

  .right {
    width: 30%;
    display: flex;
    flex-direction: column;

    p {
      font-size: 1.8rem;
      font-weight: 800;
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
    min-height: 100px;

    .left {
      width: 70%;

      h4 {
        font-size: 1.2rem;
      }

      div p {
        font-size: 0.85rem;
      }
    }

    .right {
      width: 20%;

      p {
        font-size: 1.3rem;
      }
    }
  }
`;
