import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../store/slice/cartSlice";
import { CardOrderPieces, ContainerCardPieces } from "./CardsOrderStyles";

const CardOrderCombinedPieces = () => {
  const dispatch = useDispatch();

  const combinedState = useSelector((state) => state.combinedPieces);
  const piecesCart = useSelector((state) => state.cart.items);

  const {
    items: combinedItems,
    loading: combinedLoading,
    error: combinedError,
  } = combinedState;

  return (
    <ContainerCardPieces>
      {combinedLoading && <p>Cargando combinados...</p>}
      {combinedError && <p>Error al cargar combinados: {combinedError}</p>}

      {!combinedLoading &&
        !combinedError &&
        combinedItems.map((combinedPiece) => {
          const cartItem = piecesCart.find(
            (item) => item._id === combinedPiece._id
          );

          return (
            <CardOrderPieces key={combinedPiece._id}>
              <img src={combinedPiece.img} alt={combinedPiece.name} />
              <section>
                <h4>{combinedPiece.name}</h4>
                <p>{combinedPiece.typePieces}</p>
                {cartItem && cartItem.quantity > 0 ? (
                  <div className="stylesButton">
                    <button
                      onClick={() => dispatch(removeItem(combinedPiece._id))}
                    >
                      -
                    </button>
                    <p>{cartItem.quantity}</p>
                    <button onClick={() => dispatch(addItem(combinedPiece))}>
                      +
                    </button>
                  </div>
                ) : (
                  <div className="stylesPrice">
                    <p>${combinedPiece.price}</p>
                    <button onClick={() => dispatch(addItem(combinedPiece))}>
                    Agregar
                  </button>
                  </div>

                )}
              </section>
            </CardOrderPieces>
          );
        })}
    </ContainerCardPieces>
  );
};

export default CardOrderCombinedPieces;
