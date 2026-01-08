import { motion } from "framer-motion";
import styled from "styled-components";

/* =========================
   CONTENEDOR MODAL
========================= */
export const ModalContainerCP = styled(motion.div)`
  width: 80%;
  min-height: 80vh;
  max-height: 80vh;
  margin-top: 5vh;

  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  overflow-y: auto;

  display: flex;
  flex-wrap: wrap;
  gap: 12px;  
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  border: 2px solid #f4e9d8;
  
  h2 {
    color: rgb(232, 209, 170);
    font-size: 3rem;
    margin: 0;
    text-align: center;
  }

  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 2.2rem;
    }
  }
`;

/* =========================
   CARD GENERAL
========================= */
export const ModalCardCombinedPieces = styled.div`
  width: 92%;
  flex-shrink: 0;
  padding: 12px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: 12px;
  
  background-color: rgb(232, 209, 170);
  border-radius: 14px;
  p,
  h4 {
    margin: 0;
  }

  /* ===== BLOQUE PRECIOS ===== */
  /* ===== BLOQUE PRECIOS ===== */
  .discount {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
  }

  .priceRow {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .finalPrice {
    font-size: 2rem;
    font-weight: 900;
    color: #1d3e32;
  }

  .discountPercent {
    font-size: 0.9rem;
    font-weight: 800;
    color: #c0392b;
    border: 1px solid #c0392b;
    padding: 2px 6px;
    border-radius: 6px;
  }

  .basePrice {
    font-size: 1.1rem;
    font-weight: 600;
    opacity: 0.6;
    text-decoration: line-through;
  }
  @media (max-width: 900px) {
    width: 90%;
  }
`;

/* =========================
   SUBCOMBOS
========================= */
export const ComboWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;

  input {
    transform: scale(1.2);
    cursor: pointer;
  }

  label {
    width: 100%;
    padding: 10px 12px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.25);

    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;

    span {
      font-size: 1.1rem;
      font-weight: 700;
      max-width: 70%;
    }
  }
  @media (max-width: 900px) {
    label {
      display: flex;
      flex-direction: column;
    }
    .discount {
      display: flex;
      flex-direction: row;
    }
  }
`;

/* =========================
   BOTÓN STICKY FINAL
========================= */
export const SectionButton = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: #1d3e32;
  padding: 14px 18px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  z-index: 10;
  color: #fff;

  .sectionAdds {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      margin: 0;
      font-size: 2rem;
      font-weight: 700;
    }
  }
  .selectedOptions {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: start;
    span {
      font-size: 1.1rem;
      font-weight: 600;
      opacity: 0.9;
    }
  }

  .dataOrder {
    display: flex;
    align-items: center;
    gap: 14px;
    p {
      font-size: 2.2rem;
      font-weight: 900;
      margin: 0;
      color: white;
      white-space: nowrap;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    .dataOrder,.sectionAdds,.selectedOptions {
      width: 100%;
      justify-content: space-between;
    }
  }
`;
