import React, { useState } from "react";
import {
  CardHome,
  CardPromotion,
  CardRecomendation,
  ContainerCardsHome,
  SectionCardsHome,
} from "./CardsHomeStyles";

const CardsHome = () => {
  const [backgroundContainer, setbackgroundContainer] = useState("#f4e9d8");
  // 	•	Negro profundo (#191919)
  return (
    <ContainerCardsHome $backgroundContainer={backgroundContainer} $zIndex={1}>
      <p className="SUSHI">SUSHI</p>
      <SectionCardsHome
        $stWidht="50vw"
        $backgroundContainer={backgroundContainer}
        onClick={() => setbackgroundContainer("transparent")}
      >
        <CardHome onClick={(e) =>  {e.stopPropagation(); setbackgroundContainer("#bfa878")}}>
          <p className="Title">Veggis</p>
          <img
            src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754402988/SETSUNAI/fondo_hwriq6.png"
            alt=""
          />
          <p className="Text">
            Arroz avinagrado con verduras frescas o encurtidas (como pepino,
            palta, zanahoria), envuelto en alga u otras en finas láminas de
            vegetales, con un sabor fresco y ligero.
          </p>
        </CardHome>
        <CardHome onClick={(e) =>  {e.stopPropagation(); setbackgroundContainer("#1d3e32")}}>
          <p className="Title">Tradicionales</p>
          <img
            src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754402988/SETSUNAI/fondo_hwriq6.png"
            alt=""
          />
          <p className="Text">
            Arroz aderezado con vinagre, combinado con pescado fresco o
            mariscos, envuelto en alga o tamago , todo con un sabor delicado y
            equilibrado.
          </p>
        </CardHome>
      </SectionCardsHome>
      <CardRecomendation $backgroundContainer={backgroundContainer}>
        <div className="Left">
          <p className="Tipe">Recomendacion</p>
          <p className="Title">Combo Boom</p>
          <p className="NPieces">15p</p>
          <p className="Pieces">CaliFell,Futurama,Shripm, kapa maki</p>
          <img
            src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754402988/SETSUNAI/fondo_hwriq6.png"
            alt=""
          />
        </div>
        <div className="Right">
          <p>Promocion </p>
          <p className="Title">Combo Boom</p>
          <p className="NPieces">15p</p>
          <p className="Pieces">CaliFell,Futurama,Shripm, kapa maki</p>
          <img
            src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754402988/SETSUNAI/fondo_hwriq6.png"
            alt=""
          />
        </div>
      </CardRecomendation>
      <CardPromotion $backgroundContainer={backgroundContainer}>
        <div className="Right">
          <p className="Tipe">Recomendacion</p>
          <p className="Title">Combo Boom</p>
          <p className="NPieces">15p</p>
          <p className="Pieces">CaliFell,Futurama,Shripm, kapa maki</p>
          <img
            src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754402988/SETSUNAI/fondo_hwriq6.png"
            alt=""
          />
        </div>
        <div className="Left">
          <p>Promocion </p>
          <p className="Title">Combo Boom</p>
          <p className="NPieces">15p</p>
          <p className="Pieces">CaliFell,Futurama,Shripm, kapa maki</p>
          <img
            src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754402988/SETSUNAI/fondo_hwriq6.png"
            alt=""
          />
        </div>
      </CardPromotion>
    </ContainerCardsHome>
  );
};

export default CardsHome;
