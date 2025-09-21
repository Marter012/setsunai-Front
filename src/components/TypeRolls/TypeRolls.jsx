import React from "react";
import {
  CardTypeRoll,
  ContainerTypeRoll,
  ContainerTypeRolls,
} from "./TypeRollsStyles";

const TypeRolls = () => {
  return (
    <ContainerTypeRolls>
      <p className="Title">Tipos de Rolls</p>

      <ContainerTypeRoll>
        <CardTypeRoll>
             <img
            src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754402988/SETSUNAI/fondo_hwriq6.png"
            alt=""
          />
          <p className="TypeRoll">Title</p>
          <p className="DescriptionRoll">
            dkn dnaslkd na aklsdn alkdn asklndksalnd klasnd klasnlkd la
          </p>
        </CardTypeRoll>
        <CardTypeRoll>
             <img
            src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754402988/SETSUNAI/fondo_hwriq6.png"
            alt=""
          />
          <p className="TypeRoll">Title</p>
          <p className="DescriptionRoll">
            dkn dnaslkd na aklsdn alkdn asklndksalnd klasnd klasnlkd la
          </p>
        </CardTypeRoll>
        <CardTypeRoll>
             <img
            src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754402988/SETSUNAI/fondo_hwriq6.png"
            alt=""
          />
          <p className="TypeRoll">Title</p>
          <p className="DescriptionRoll">
            dkn dnaslkd na aklsdn alkdn asklndksalnd klasnd klasnlkd la
          </p>
        </CardTypeRoll>
      </ContainerTypeRoll>
    </ContainerTypeRolls>
  );
};

export default TypeRolls;
