import React from "react";
import { ModalOverlayStyled } from "./ModalOverlayStyles";
import { useSelector } from "react-redux";

const Overlay = ({ onClose }) => {
  const isActive = useSelector((state) => state.overlay.active);
  const handleClick = () => {
    if (onClose) onClose(); // Ejecuta la función extra si existe
  };

  return (
    isActive && (
      <ModalOverlayStyled
        onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    )
  );
};

export default Overlay;
