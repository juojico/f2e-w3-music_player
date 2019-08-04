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
  transition: 0.5s;
  z-index: 10;
  ${props => (props.open ? null : `left: -100%; width: 0;opacity: 0;`)}
`;

const Header = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: cneter;
  img {
    width: 80px;
  }
`;

const BrowseContainer = props => {
  const { open, onPick } = props;
  return (
    <BrowseWrapper open={open}>
      <Header>
        <img src={require("../media/slice/logo_music.svg")} alt="LOGO-MUSIC" />
      </Header>
      <BrowseArea onPick={onPick} open={open} />
    </BrowseWrapper>
  );
};

export default BrowseContainer;
