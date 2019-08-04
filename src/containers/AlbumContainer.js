import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { BtnBack } from "../components/Button";
import {
  taylor,
  gem,
  Cosmospeople,
  no6,
  canwe,
  relax,
  nature,
  JFla,
  taylorBg
} from "../media/index.js";

const AlbumWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
`;

const AlbumBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url(${taylorBg});
  background-repeat: no-repeat;
  background-position: center top;
  opacity: 0;
  transition: 0.5s;
  z-index: -1;
  ${props => (props.open ? `opacity: 1;` : null)}
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, #22283188, #222831 50%);
  }
  &::after {
    position: absolute;
    content: "";
    width: 20px;
    height: 100%;
    top: 48px;
    left: 0;
    background: #393e46;
    border-radius: 0 16px 0 0;
  }
`;

const MainArea = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding-top: 52px;
  display: flex;
  justify-content: center;
  align-items: cneter;
  flex-direction: column;
  transition: 0.5s;
  z-index: 10;
  ${props => (props.open ? null : `left: 100%;`)}
`;

const NavTOP = styled.div`
  width: 100%;
  height: 36px;
`;
const MainInfoBox = styled.div`
  width: 100%;
  height: 166px;
  padding: 16px;
`;
const MusicList = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
`;

const Box = styled.div`
  width: 166px;
  text-align: left;
  margin-left: 10px;
  ${props => (props.showAll ? `margin-bottom: 18px;` : null)}
`;

const AlbumName = styled.div`
  display: block;
  width: 100%;
  font-size: 12px;
  margin: 4px 0 1px 0;
`;

const AlbumImg = styled.div`
  width: 166px;
  height: 166px;
  border-radius: 4px;
  background: url(${props => IMG[props.img]});
  background-size: cover;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.36);
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 9px;
`;

const Singer = styled.div``;
const Songs = styled.div`
  color: #e5e5e5;
  font-size: 8px;
`;

const IMG = {
  taylor: taylor,
  gem: gem,
  Cosmospeople: Cosmospeople,
  no6: no6,
  canwe: canwe,
  relax: relax,
  nature: nature,
  JFla: JFla
};

const AlbumContainer = props => {
  const [menu, setMenu] = useState([]);
  const { open, data, onClose } = props;
  return (
    <AlbumWrapper open={open}>
      {open ? <BtnBack onClick={onClose} /> : null}
      <AlbumBg open={open} />
      <MainArea open={open}>
        <NavTOP />
        <MainInfoBox>
          <AlbumImg img={data.img}/>
        </MainInfoBox>
        <MusicList />
      </MainArea>
    </AlbumWrapper>
  );
};

export default AlbumContainer;
