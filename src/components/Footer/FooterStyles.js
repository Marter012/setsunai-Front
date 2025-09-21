import styled from "styled-components";

export const ContainerFooter = styled.div`
  width: 100vw;
  min-height: 100px;
  background-color: #1d3e32;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  color: white;
  p {
    font-size: 2rem;
    margin: 0;
  }
`;
// 	•	Verde oscuro (#1d3e32)
// 	•	Negro profundo (#191919)

export const ContainerIconFooter = styled.div`
  display: flex;
  align-items: center;
  transition-duration: 1s;
  gap: 50px;
  cursor: pointer;
  color: white;
  svg {
    font-size: 2rem;
    color: #56dd88;
    text-decoration: none;
  }
  p {
    text-decoration: none;
  }
  &&:hover {
    scale: 1.1;
    transition-duration: 1s;
  }
`;
