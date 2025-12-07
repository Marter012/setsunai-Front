import styled from "styled-components";

export const ContainerTypeRolls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: "Night in Tokyo", sans-serif;
  padding: 50px 20px;
  background-color: #f4e9d8; /* fondo claro */
  color: #1d3e32;

  .Title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 40px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

export const ContainerTypeRoll = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  width: 100%;
`;

export const CardTypeRoll = styled.div`
  background-color: #1d3e32; /* card verde oscuro */
  color: #f4e9d8; /* texto claro */
  width: 350px;
  border-radius: 15px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  .TypeRoll {
    font-size: 3rem;
    font-weight: 700;
    margin: 15px 0 10px;
    text-transform: uppercase;
  }

  .DescriptionRoll {
    font-size: 1.3rem;
    font-family: "Cormorant Garamond", serif;
    padding: 0 15px 20px;
    line-height: 1.5;
    color: #f4e9d8;

    span {
      font-style: italic;
      font-size: 0.85rem;
      display: block;
      margin-top: 10px;
      color: #c1d9c6; /* un verde más claro para subtexto */
    }
  }
`;
