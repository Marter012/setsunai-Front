import styled from "styled-components";

export const ContainerTypeRolls = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  overflow: hidden;

  .Title {
    height: 15vh;
    margin: 0;
    background-image: url("https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754258745/SETSUNAI/ChatGPT_Image_1_jul_2025_11_23_14_a.m._wqv2k3.png");
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      font-size: 2rem;
      height: 12vh;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
      height: 10vh;
    }
  }
`;

export const ContainerTypeRoll = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    height: auto;
    justify-content: center;
    gap: 20px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

export const CardTypeRoll = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url("https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754258745/SETSUNAI/ChatGPT_Image_1_jul_2025_11_23_14_a.m._wqv2k3.png");
  border-bottom-right-radius: 50px;
  padding: 10px;

  p {
    margin: 0;
  }

  .TypeRoll {
    font-size: 2.5rem;
    margin-top: 10px;
  }

  .DescriptionRoll {
    font-size: 1.2rem;
    margin-top: 5px;
  }

  @media (max-width: 1024px) {
    width: 45%;
    height: auto;

    .TypeRoll {
      font-size: 2rem;
    }

    .DescriptionRoll {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    width: 90%;
    height: auto;

    .TypeRoll {
      font-size: 1.5rem;
    }

    .DescriptionRoll {
      font-size: 0.9rem;
    }
  }
`;
