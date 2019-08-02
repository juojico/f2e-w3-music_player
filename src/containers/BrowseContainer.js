import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BrowseArea from "../components/BrowseArea";
import BROWSE_DATA from "../MockData";

const BrowseWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: cneter;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: cneter;
`;

const BrowseContainer = props => {
  const [menu, setMenu] = useState([]);
  const { open } = props;
  return (
    <>
      {open ? (
        <BrowseWrapper>
          <Header>
            <img
              src={require("../media/slice/logo_music.svg")}
              alt='LOGO-MUSIC'
              width='80px'
            />
          </Header>
          <BrowseArea data={BROWSE_DATA}>BrowseContainer</BrowseArea>
        </BrowseWrapper>
      ) : (
        console.log("browse close")
      )}
    </>
  );
};

export default BrowseContainer;
