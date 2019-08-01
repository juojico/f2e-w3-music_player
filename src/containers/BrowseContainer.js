import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../media/slice/logo_music.svg";
import BrowseArea from "../components/BrowseArea";

const BrowseWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Header = styled.div`
  width: 100%;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: cneter;
`;

const BrowseContainer = () => {
  const [menu, setMenu] = useState([]);
  return (
    <BrowseWrapper>
      <Header>
        <img src={Logo} alt="LOGO-MUSIC" width='80px' />
      </Header>
      <BrowseArea>BrowseContainer</BrowseArea>
    </BrowseWrapper>
  );
};

export default BrowseContainer;
