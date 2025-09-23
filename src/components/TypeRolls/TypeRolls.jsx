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
          <p className="TypeRoll">Maki</p>
          <p className="DescriptionRoll">
            Sushi enrollado en alga nori por fuera, con arroz y relleno adentro.
            Generalmente los rollos son más pequeños y simples.
          </p>
        </CardTypeRoll>
        <CardTypeRoll>
          <img
            src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754402988/SETSUNAI/fondo_hwriq6.png"
            alt=""
          />
          <p className="TypeRoll">Uramaki</p>
          <p className="DescriptionRoll">
            Es un sushi donde el arroz queda por fuera y el alga nori por
            dentro, envolviendo el relleno. Suelen ser un poco más grandes y
            vistosos, muchas veces con salsas o semillas por fuera.
          </p>
        </CardTypeRoll>
        <CardTypeRoll>
          <img
            src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754402988/SETSUNAI/fondo_hwriq6.png"
            alt=""
          />
          <p className="TypeRoll">Tamago</p>
          <p className="DescriptionRoll">
            Sushi de huevo, generalmente dulce, que se cocina en una sartén
            especial y se enrolla en el sushi. Su textura es suave y su sabor es
            delicado. <br /> Debate al llamarlo "sushi" ya que no suele contener
            arroz ni alga nori.
          </p>
        </CardTypeRoll>
      </ContainerTypeRoll>
    </ContainerTypeRolls>
  );
};

export default TypeRolls;
