import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  height: 10vh;
  background-color: #1d3e32;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  .title {
    height: 100%;
    font-size: 2rem;
    padding-left: 50px;
    font-weight: bold;
    overflow: hidden;
    align-items: center;
    display: flex;
    position: relative;
    justify-content: center;
    text-decoration: none;
    cursor: auto;
    p {
      color: white;
      border: none;
    }
    img {
      width: 60px;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const Hamburger = styled.div`
  display: none;
  font-size: 2.5rem;
  cursor: pointer;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 30px;

  a {
    color: white;
    text-decoration: none;
    font-size: 1.4em;
  }

  @media (max-width: 768px) {
    padding-left: 0px;
    flex-direction: column;
    position: absolute;
    top: 100%; /* justo debajo del navbar */
    left: 0;
    width: 100%;
    background-color: #1d3e32;
    gap: 15px;
    overflow: hidden;
    max-height: ${(props) => (props.open ? "500px" : "0")};
    transition: max-height 0.5s ease;
    z-index: 200; /* encima de otros contenidos */
    text-align: center;
    font-weight: 800;
  }
`;

export const CartIconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    color: white;
    font-size: 2rem;
  }
`;
