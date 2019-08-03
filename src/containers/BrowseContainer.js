import React from "react";
import styled from "styled-components";
import BrowseArea from "../components/BrowseArea";

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
  img {
    width: 80px;
  }
`;

const BrowseContainer = props => {
  const { open, data } = props;
  return (
    <>
      {open ? (
        <BrowseWrapper>
          <Header>
            <img
              src={require("../media/slice/logo_music.svg")}
              alt='LOGO-MUSIC'
            />
          </Header>
          <BrowseArea data={data}>BrowseContainer</BrowseArea>
        </BrowseWrapper>
      ) : (
        console.log("browse close")
      )}
    </>
  );
};

export default BrowseContainer;
