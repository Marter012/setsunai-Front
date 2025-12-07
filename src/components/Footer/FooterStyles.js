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
`;

export const ContainerIconFooter = styled.div`
  display: flex;
  flex-direction: column;
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
`;
