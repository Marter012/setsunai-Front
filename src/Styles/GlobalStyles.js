import { createGlobalStyle, styled } from "styled-components";

// PALETA DE COLORES
// Colores que usamos:
// 	•	Beige pálido (#f4e9d8)
// 	•	Verde oscuro (#1d3e32)
// 	•	Negro profundo (#191919)
// 	•	dorado opaco (#bfa878)

// Paleta suave y cálida — para un estilo elegante y acogedor
// Color	Código Hex	Uso recomendado
// Beige claro	#E7CFA9	Color base / fondo
// Marrón suave	#A67B5B	Detalles, texto, bordes
// Verde oliva	#7D8B6A	Acentos naturales, botones
// Crema oscuro	#D9C9A3	Fondo secundario, sombras
// Blanco roto	#F7F4EA	Fondos claros, espacios negativos

// Paleta contrastante — para un look vibrante y moderno
// Color	Código Hex	Uso recomendado
// Beige claro	#E7CFA9	Base
// Azul petróleo	#1F3B4D	Texto, botones, llamadas a la acción
// Naranja quemado	#D97F46	Acentos cálidos
// Gris claro	#CFCFCF	Fondos y detalles
// Blanco puro	#FFFFFF	Espacios, texto
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

    }


`;
export const PrincipalContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  overflow-x: hidden;
  padding-top: 10vh;
`;
