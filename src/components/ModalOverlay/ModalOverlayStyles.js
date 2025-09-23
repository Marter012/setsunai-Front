import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.4);
`;