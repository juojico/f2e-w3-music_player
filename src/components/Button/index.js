import React from "react";
import styled, { keyframes } from "styled-components";
import back from "../../media/slice/btn_back.svg";

const BtnEnter = keyframes`
  to {
    left: 0;
  }
`;

const Back = styled.div`
  position: absolute;
  width: 44px;
  height: 44px;
  top: 0;
  left: -30px;
  background: url(${back});
  cursor: pointer;
  animation: ${BtnEnter} 0.5s forwards;
  z-index: 50;
`;

const BtnBack = props => {
  return <Back {...props} />;
};
export { BtnBack };
