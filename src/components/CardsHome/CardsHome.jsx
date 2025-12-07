import React from "react";
import {
  HomeSection,
  HomeMainCard,
  HomeBadgeRow,
  HomeTitle,
  HomeLead,
  HomeInfoGrid,
  HomeInfoCard,
  HomeCTAGroup,
  HomeRightColumn,
  HomeSmallCardRow,
  HomeSmallCard,
  HomeNotes,
  HomeDescriptionTitle,
  HomeBtn,
} from "./CardsHomeStyles";
import ButtonAddItem from "../utils/Buttons/ButtonAddItem";
import { useSelector } from "react-redux";

export default function CardsHome() {
  const itemPromotion = useSelector((state) => state.pieces.items[0]);
  const itemRecomendation = useSelector((state) => state.pieces.items[2]);
  const CardsUnikey = [
    { ...itemPromotion, title: "Promoción" },
    { ...itemRecomendation, title: "Recomendación" },
  ];
  return (
    <HomeSection>
      <HomeMainCard>
        <HomeDescriptionTitle>
          <HomeBadgeRow>
            <span>Sushi casero • Tanti</span>
          </HomeBadgeRow>

          <HomeTitle>
            {" "}
            — Sabor artesanal — <br />
            Sushi casero hecho a mano
          </HomeTitle>
          <HomeLead>
            Trabajo únicamente por pedidos. Cada pieza se prepara con
            ingredientes frescos y técnicas tanto simples como complejas, el
            resultado es un sushi honesto y sabroso.
          </HomeLead>

          <HomeInfoGrid>
            <HomeInfoCard>
              <h4>Modalidad</h4>
              <p>Solo por pedido</p>
              <span>VIERNES || SÁBADOS || DOMINGOS.</span>
            </HomeInfoCard>

            <HomeInfoCard>
              <h4>Ubicación</h4>
              <p>Tanti, Córdoba</p>
              <span>
                Retiro y coordinación de delivery local al confirmar pedido.
              </span>
            </HomeInfoCard>
          </HomeInfoGrid>

          <HomeCTAGroup>
            <HomeBtn to="/PlaceOrder">Hacer pedido</HomeBtn>
            <HomeBtn to="/Pieces">Ver Piezas</HomeBtn>
          </HomeCTAGroup>
        </HomeDescriptionTitle>

        <HomeRightColumn>
          <HomeSmallCardRow>
            {CardsUnikey.map((item) => {
              console.log(item);
              return (
                <HomeSmallCard>
                  <img src={item.img} alt="combo" />
                  <div className="divContainer">
                    <span>{item.title}</span>
                    <p>{item?.name}</p>
                    <p>{item?.description}</p>
                    <p className="price">${item?.price_8p}</p>
                    <div>
                      <ButtonAddItem item={{...item,selectedSize : 8,finalPrice : item.price_8p}} />
                    </div>
                  </div>
                </HomeSmallCard>
              );
            })}
          </HomeSmallCardRow>

          <HomeNotes>
            <p>Notas importantes</p>
            <ul>
              <li>Pedidos con 24-48 hs de anticipación según temporada.</li>
              <li>Elaboración artesanal en Tanti — sin producción en masa.</li>
              <li>Opciones vegetarianas disponibles (consultar).</li>
            </ul>
          </HomeNotes>
        </HomeRightColumn>
      </HomeMainCard>
    </HomeSection>
  );
}
