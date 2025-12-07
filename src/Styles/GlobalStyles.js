import { createGlobalStyle, styled } from "styled-components";

// PALETA DE COLORES
// Colores que usamos:
// 	•	Beige pálido (#f4e9d8)
// 	•	Verde oscuro (#1d3e32)
// 	•	Negro profundo (#191919)
// 	•	dorado opaco (#bfa878)

export const GlobalStyles = createGlobalStyle`
    :root {
    }

    html{
      scroll-behavior: smooth;
    }

    body {
      width: 100vw;
      margin: 0;
      padding: 0;
      background-image: linear-gradient(white, #1d3e32);
      -webkit-tap-highlight-color: transparent;
      font-family: "Cormorant Garamond", serif;
      overflow-x: hidden;
      cursor: default;
    }
`;

export const PrincipalContainer = styled.div`
  width: 100%;
  margin-top: 10vh;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  /* Tablets */
  @media (max-width: 768px) {
    gap: 15px;
  }

  /* Móviles */
  @media (max-width: 480px) {
    gap: 10px;
  }
`;
