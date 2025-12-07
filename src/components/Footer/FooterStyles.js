import styled from "styled-components";

export const ContainerFooter = styled.div`
  width: 100vw;
  height: 100px;
  background-color: #1d3e32;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  overflow: hidden;
  color: white;
  gap: 20px;

  /* TABLETS */
  @media (max-width: 768px) {
    height: 90px;
    gap: 10px;
  }

  /* MÓVILES */
  @media (max-width: 480px) {
    height: auto;
    padding: 5px 0;
    gap: 5px;
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerIconFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 50%;
  height: 80%;
  color: white;
  
  svg {
    cursor: pointer;
    font-size: 2rem;
  }

  .backIcon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 12px;
  }

  .whatsappIcon {
    background: #56dd88;
  }

  .instagramIcon {
    background: linear-gradient(
      45deg,
      #feda75,
      #fa7e1e,
      #d62976,
      #962fbf,
      #4f5bd5
    );
  }

  /* Contenedor de iconos */
  div {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
  }

  p {
    text-decoration: none;
    font-size: 2rem;
    margin: 0;
    padding: 0;
  }

  /* TABLETS */
  @media (max-width: 768px) {
    svg {
      font-size: 1.7rem;
    }

    p {
      font-size: 1.6rem;
    }

    div {
      width: 70%;
    }
  }

  /* MÓVILES */
  @media (max-width: 480px) {
    svg {
      font-size: 1.4rem;
    }

    p {
      font-size: 1.2rem;
    }

    div {
      width: 85%;
    }

    .backIcon {
      padding: 6px;
      border-radius: 10px;
    }
  }
`;
