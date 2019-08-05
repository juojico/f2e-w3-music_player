import React from "react";
import styled from "styled-components";
import playAlbum from "../media/slice/btn_play_album.svg";
import { BtnBack } from "../components/Button";
import { taylor, taylorBg, reputation } from "../media/index.js";

const SingerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
`;
const SingerBg = styled.div`
  position: absolute;
  width: 100%;
  height: 430px;
  top: 0;
  left: 0;
  border-radius: 0 0 0 60px;
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
    background: linear-gradient(to bottom, #22283100 50%, #222831 100%);
  }
`;

const MainInfoBox = styled.div`
  position: relative;
  width: 100%;
  height: 430px;
  font-size: 10px;
  padding: 0 18px 50px 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  & > h1 {
    font-size: 32px;
  }
`;

const AlbumArea = styled.div`
  padding: 0 16px;
  & > h4 {
    margin: 8px 0;
  }
`;

const AlbumBox = styled.div`
  position: relative;
  width: 166px;
  margin-right: 10px;
  float: left;
`;

const AlbumImg = styled.div`
  width: 166px;
  height: 166px;
  margin-right: 10px;
  border-radius: 4px;
  background: url(${props => props.img});
  background-size: cover;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.36);
`;

const Details = styled.div`
  width: 100%;
  font-size: 8px;
  color: #e5e5e5;
  display: flex;
  justify-content: space-between;
  & > span {
    font-size: 12px;
    color: white;
  }
`;

const PlayerIcon = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  right: 36px;
  top: 100%;
  margin-top: -30px;
  background: url('${playAlbum}');
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const SingerContainer = props => {
  const { open, onClose } = props;
  return (
    <>
      {open ? (
        <SingerWrapper>
          {open ? <BtnBack onClick={onClose} /> : null}
          <SingerBg open={open} />
          <MainInfoBox>
            <h1>Taylor Swift</h1>
            《Lover》是美國創作歌手泰勒絲即將發行的第七張錄音室專輯，於2019年8月23日由聯眾唱片及泰勒絲音樂製作公司發行。
            <PlayerIcon />
          </MainInfoBox>
          <AlbumArea>
            <h4>專輯</h4>
            <AlbumBox>
              <AlbumImg img={taylor} />
              <Details>
                <span>Lover</span>2019年
              </Details>
            </AlbumBox>
            <AlbumBox>
              <AlbumImg img={reputation} />
              <Details>
                <span>Reputation</span>2017年
              </Details>
            </AlbumBox>
          </AlbumArea>
        </SingerWrapper>
      ) : null}
    </>
  );
};

export default SingerContainer;
