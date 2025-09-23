import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../store/slice/cartSlice";
import { CardOrderPieces, ContainerCardPieces } from "./CardsOrderStyles";

const CardsOrderPieces = () => {
  const dispatch = useDispatch();

  const piecesState = useSelector((state) => state.pieces);
  const piecesCart = useSelector((state) => state.cart.items);

  const {
    items: piecesItems,
    loading: piecesLoading,
    error: piecesError,
  } = piecesState;
  return (
    <ContainerCardPieces>
      {piecesLoading && <p>Cargando piezas...</p>}
      {piecesError && <p>Error al cargar piezas: {piecesError}</p>}

      {!piecesLoading &&
        !piecesError &&
        piecesItems.map((piece) => {
          const cartItem = piecesCart.find((item) => item._id === piece._id);

          return (
            <CardOrderPieces key={piece._id}>
              <img src={piece.img} alt={piece.name} />
              <section>
                <h4>{piece.name} 8p</h4>
                <p>{piece.description}</p>
              </section>
              <div>
                <p>${piece.price}</p>
                {cartItem && cartItem.quantity > 0 ? (
                  <div className="stylesButton">
                    <button onClick={() => dispatch(removeItem(piece._id))}>
                      -
                    </button>
                    <p>{cartItem.quantity}</p>
                    <button onClick={() => dispatch(addItem(piece))}>+</button>
                  </div>
                ) : (
                  <button onClick={() => dispatch(addItem(piece))}>
                    Agregar
                  </button>
                )}
              </div>
            </CardOrderPieces>
          );
        })}
    </ContainerCardPieces>
  );
};

export default CardsOrderPieces;
