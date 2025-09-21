import styled from "styled-components";

export const ContainerTypeRolls = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  .Title {
    height: 20vh;
    margin: 0;
    background-image: url("https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754258745/SETSUNAI/ChatGPT_Image_1_jul_2025_11_23_14_a.m._wqv2k3.png");
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const ContainerTypeRoll = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  
`;
export const CardTypeRoll = styled.div`
  width: 30%;
  height: 90%;
  display: flex;
    background-image: url("https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754258745/SETSUNAI/ChatGPT_Image_1_jul_2025_11_23_14_a.m._wqv2k3.png");
  flex-direction: column;
  justify-content: space-between;
  border-bottom-right-radius: 50px;
  p {
    margin: 0;
  }
  .TypeRoll {
    font-size: 2.5rem;
  }
  .DescriptionRoll {
    font-size: 1.5rem;
  }
`;
