import styled from "styled-components";

export const ContainerIcon = styled.div`
  position: relative;
    cursor: pointer;

  img {
    height: 100%;
    width: 100px;
    object-fit: cover;
  }
  p {
    display: flex;
    position: absolute;
    top: 34%;
    left: 10%;
    background-color: #234337;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    margin: 0;
    color: red;
    font-weight: 800;
  }
`;
