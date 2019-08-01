import React, { useState, useEffect } from "react";
import styled from "styled-components";

const MenuWrapper = styled.div`
  position: absolute;
  background: #222831;
  width: 100%;
  height: 84px;
  bottom: 0;
  padding: 8px 32px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
`;

const MainMenu = () => {
  const [menu, setMenu] = useState([]);
  return <MenuWrapper>MainMenu</MenuWrapper>;
};

export default MainMenu;
