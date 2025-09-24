import React from "react";
import { PrincipalContainer } from "../../Styles/GlobalStyles";
import CardsHome from "../../components/CardsHome/CardsHome";
import TypeRolls from "../../components/TypeRolls/TypeRolls";
import Promotion from "../../components/Promotion/Promotion";

const Home = () => {
  return (
    <PrincipalContainer>
      <CardsHome />
      <TypeRolls />
      {/* <Promotion/> */}
    </PrincipalContainer>
  );
};

export default Home;
