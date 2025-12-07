import styled from "styled-components";

// CONTENEDORES PRINCIPALES
export const HomeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 90vh;

  /* 📱 MOBILE */
  @media (max-width: 600px) {
    height: auto;
    padding: 20px 0;
  }
`;

/* Renombrado a HomeMainCard para coincidir con el import en tu componente */
export const HomeMainCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 80%;
  height: 80%;
  padding: 20px;
  background-color: rgba(191, 168, 120, 0.25);
  border: 2px solid #86692aff;
  border-radius: 24px;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
  }

  /* 📱 Tablet */
  @media (max-width: 900px) {
    max-width: 95%;
    height: auto;
    margin-top: 5vh;
    padding: 15px;
    gap: 1.5rem;
  }

  /* 📱 Mobile */
  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
    padding: 15px;
  }
`;

export const HomeDescriptionTitle = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 600px) {
    justify-content: flex-start;
    gap: 1rem;
  }
`;

export const HomeBadgeRow = styled.div`
  display: flex;
  align-items: center;
`;

export const HomeBadge = styled.span`
  background-color: #1d3e32;
  border-radius: 12px;
`;

export const HomeTitle = styled.h4`
  text-align: center;
  font-size: 2rem;
  margin: 0px;
`;

export const HomeLead = styled.p`
  text-align: center;
  font-size: 1.3rem;
`;

export const HomeInfoGrid = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

export const HomeInfoCard = styled.div`
  background-color: #f4e9d8;
  width: 40%;
  border-radius: 16px;
  padding: 15px;
  text-align: center;

  h4,
  p,
  span {
    margin: 0.3rem 0;
  }
  h4 {
    font-size: 1.3rem;
  }
  p {
    font-size: 1.1rem;
  }
  span {
    color: gray;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

/* Renombrado a HomeCTAGroup para coincidir con el import en tu componente */
export const HomeCTAGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 1.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const HomeBtn = styled.a`
  background-color: #1d3e32;
  color: #f4e9d8;
  padding: 0.8rem 1.6rem;
  border-radius: 12px;
  text-decoration: none;

  transition: all 0.2s ease;
  &:hover {
    background-color: #152e25;
  }
`;

// COLUMNA DERECHA
export const HomeRightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  height: 100%;
  gap: 15px;
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    gap: 1.5rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    gap: 1.5rem;
  }
`;

// MINI CARDS
export const HomeSmallCardRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 900px) {
    justify-content: center;
    gap: 1rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const HomeSmallCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  min-height: 250px;
  align-items: center;
  background-color: #f4e9d8;
  border-radius: 16px;
  overflow: hidden;
  text-align: center;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .divContainer {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(29, 62, 50, 0.5);
    color: white;
    font-weight: 800;
    p {
      color: white !important;
    }
  }
  .price{
    font-size: 1.5rem;
    margin: 0;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 2rem;
    background-color: rgb(29, 62, 50, 0.8);
  }

  p:nth-child(2) {
    font-size: 2rem;
    margin: 1rem 0;
  }

  p:nth-child(3) {
    font-size: 1.1rem;
  }

  @media (max-width: 900px) {
    width: 45%;
    height: 200px;
  }

  @media (max-width: 600px) {
    width: 90%;
    height: 220px;
  }
`;

// NOTAS
export const HomeNotes = styled.div`
  background-color: #fffbea;
  border-left: 4px solid #bfa878;
  padding: 1rem 1.25rem;
  border-radius: 12px;

  p {
    font-size: 1.3rem;
    margin: 5px;
  }

  ul {
    padding-left: 1.2rem;
    margin: 0;
  }

  li {
    font-size: 1.1rem;
    color: #333;
  }

  @media (max-width: 600px) {
    p {
      text-align: center;
    }
    li {
      font-size: 1rem;
    }
  }
`;
