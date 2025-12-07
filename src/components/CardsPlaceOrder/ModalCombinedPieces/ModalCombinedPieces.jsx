import {
  ModalCardCombinedPieces,
  ModalContainerCP,
} from "./ModalCombinedPiecesStyles";
import ButtonAddItem from "../../utils/Buttons/ButtonAddItem";
import { useSelector } from "react-redux";

const ModalCombinedPieces = ({ combinedSelected }) => {
  const comboVariants = useSelector((state) => state.comboVariants.items) || [];
  const comboWithSelectedId = comboVariants.filter(
    (combo) => combo.comboCode === combinedSelected.code
  );
  return (
    <ModalContainerCP
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      img={combinedSelected.img}
    >
      <h2>{combinedSelected?.name}</h2>
      <img src={combinedSelected.img} alt={combinedSelected.name} />
      {comboWithSelectedId.map((pieces) => {
        return (
          <ModalCardCombinedPieces key={pieces._id}>
            <h4>{pieces.pieces.map((piece) => piece.pieceName).join(" • ")}</h4>
            <div className="separatorDiv">
              <div className="left">
                  <p>Rolls distintos : {pieces.take}</p>
                  <p>Cantidad de piezas por roll : {pieces.perRoll}</p>
              </div>
              <div className="right">
                <div className="dataSent">
                  <p>{pieces.totalPieces} piezas</p>
                  <p>${pieces.finalPrice}</p>
                </div>

                <ButtonAddItem
                  item={{
                    ...pieces,
                    code: pieces.comboCode,
                    selectedSize: pieces.totalPieces,
                    name: combinedSelected.name,
                    img: combinedSelected.img,
                  }}
                />
              </div>
            </div>
          </ModalCardCombinedPieces>
        );
      })}
    </ModalContainerCP>
  );
};

export default ModalCombinedPieces;
