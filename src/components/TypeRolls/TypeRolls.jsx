import React from "react";
import {
  CardTypeRoll,
  ContainerTypeRoll,
  ContainerTypeRolls,
} from "./TypeRollsStyles";

const TypeRolls = () => {
  return (
    <ContainerTypeRolls>
      <p className="Title">Rolls en Setsu</p>

      <ContainerTypeRoll>
        <CardTypeRoll>
          <img
            src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754402988/SETSUNAI/fondo_hwriq6.png"
            alt=""
          />
          <p className="TypeRoll">Maki</p>
          <p className="DescriptionRoll">
            Sushi enrollado en alga nori por fuera, con un centro de arroz y un
            único ingrediente como protagonista.
            <br />
            <br />
            Suelen ser piezas pequeñas, delicadas y tradicionales, pensadas para
            destacar el sabor puro de su relleno.
          </p>
        </CardTypeRoll>
        <CardTypeRoll>
          <img
            src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754402988/SETSUNAI/fondo_hwriq6.png"
            alt=""
          />
          <p className="TypeRoll">Uramaki</p>
          <p className="DescriptionRoll">
            Sushi invertido donde el arroz envuelve al alga nori y al relleno.
            <br />
            <br />
            Se destacan por su tamaño y presentación, con toppings, salsas o
            semillas por fuera que aportan textura y sabor.
          </p>
        </CardTypeRoll>
        <CardTypeRoll>
          <img
            src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754402988/SETSUNAI/fondo_hwriq6.png"
            alt=""
          />
          <p className="TypeRoll">Tamago</p>
          <p className="DescriptionRoll">
            Delicado roll envuelto en una lámina de tamago —el tradicional
            omelette japonés— que realza un relleno fresco y cremoso en su
            interior. 
            <br />
            <br />
            Su textura es suave y su sabor es delicado. <br />{" "}
            <span>
              {" "}
              Debate al llamarlo "sushi" ya que no suele contener arroz ni alga
              nori.
            </span>
          </p>
        </CardTypeRoll>
      </ContainerTypeRoll>
    </ContainerTypeRolls>
  );
};

export default TypeRolls;
