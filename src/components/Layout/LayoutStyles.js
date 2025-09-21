import styled from "styled-components";

export const LayoutWrapper = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-items: start;

  .backgroundBody {
    width: 200px;
    display: flex;
    position: fixed;
    background-color: beige;
    background: no-repeat;
    z-index: -1;
    opacity: 0.5;
  }

  .img1 {
    top: 40%;
  }
  .img2 {
    top: 10%;
    left: 50%;
  }
  .img3 {
    bottom: 0%;
    left: 85%;
  }
`;
