import styled from "styled-components";

export const ContainerNavBar = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  position: fixed;
  font-family: Cinzel Decorative;
  background-color: white;
  z-index: 100;
  a {
    width: 100%;
    height: 100%;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: 0.5s;
  }
  a:hover {
    background-color: #1d3e32;
    color: white;
  }
`;

export const ContainerTitle = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-size: 2rem;
  }
`;

export const ContainerLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  a {
    font-size: 1rem;
  }
`;
