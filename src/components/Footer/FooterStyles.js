import styled from "styled-components";

export const ContainerFooter = styled.div`
  width: 100vw;
  min-height: 100px;
  background-color: #1d3e32;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px 0;
  overflow: hidden;
  color: white;
  gap: 20px;

  p {
    font-size: 2rem;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
      text-align: center;
    }
  }
`;

export const ContainerIconFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  cursor: pointer;
  color: white;
  transition: 0.3s;

  svg {
    font-size: 2rem;
    color: #56dd88;
  }

  p {
    text-decoration: none;
  }

  &:hover {
    scale: 1.1;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;

    svg {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
