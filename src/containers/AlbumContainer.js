import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import like from "../media/slice/btn_like.svg";
import likeOn from "../media/slice/btn_like_on.svg";
import play from "../media/slice/btn_play_lg.svg";
import playOn from "../media/slice/btn_play_on.svg";
import shuffleOn from "../media/slice/btn_shuffle_on.svg";
import more from "../media/slice/btn_more.svg";
import motion from "../media/slice/motion.svg";
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
    width: 50px;
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
  padding: 0 16px;
  text-align: right;
`;

const Icon = styled.div`
display: inline-block;
  width: 44px;
  height: 44px;
  background: url('${props => props.img}');
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const MainInfoBox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 166px;
  margin: 16px;
`;

const MusicList = styled.div`
  width: 100%;
  flex-grow: 1;
  padding-left: 50px;
  padding-bottom: 150px;
  overflow-y: auto;
`;

const AlbumImg = styled.div`
  width: 166px;
  height: 166px;
  margin-right: 10px;
  border-radius: 4px;
  background: url(${props => IMG[props.img]});
  background-size: cover;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.36);
`;

const Info = styled.div`
  height: 100%;
`;

const AlbumName = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-top: -8px;
`;

const Singer = styled.div`
  font-size: 16px;
  color: #29dde0;
`;
const Year = styled.div`
  margin-top: 3px;
  font-size: 10px;
`;

const Songs = styled.div`
  margin-top: 3px;
  color: #e5e5e5;
  font-size: 8px;
`;

const InfoControl = styled.div`
  position: absolute;
  width: 110px;
  left: 100%;
  margin-left: -142px;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const ListItem = styled.div`
  position: relative;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  &:hover {
    background: #70707011;
    &::before {
      position: absolute;
      content: "";
      width: 48px;
      height: 48px;
      background: url(${play});
      background-size: 50%;
      background-repeat: no-repeat;
      background-position: center;
      pointer-events: none;
    }
    & > div:first-child {
      opacity: 0;
    }
  }
`;

const ItemHead = styled.div`
  width: 48px;
  line-height: 45px;
  text-align: center;
  color: #c9c6ce;
  cursor: pointer;
`;

const ItemBody = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #393e46;
`;

const MotionAni = keyframes`
  0% {
    box-shadow: -14px 19px 0 #29DDE032,-7px 16px 0 #29DDE064,0 21px 0 #29DDE096,7px 24px 0 #29DDE0C8,14px 21px 0 #29DDE0FF;
  }
  20% {
    box-shadow: -14px 16px 0 #29DDE032,-7px 21px 0 #29DDE064,0 24px 0 #29DDE096,7px 21px 0 #29DDE0C8,14px 19px 0 #29DDE0FF;
  }
  40% {
    box-shadow: -14px 21px 0 #29DDE032,-7px 24px 0 #29DDE064,0 21px 0 #29DDE096,7px 19px 0 #29DDE0C8,14px 16px 0 #29DDE0FF;
  }
  60% {
    box-shadow: -14px 24px 0 #29DDE032,-7px 21px 0 #29DDE064,0 19px 0 #29DDE096,7px 16px 0 #29DDE0C8,14px 21px 0 #29DDE0FF;
  }
  80% {
    box-shadow: -14px 21px 0 #29DDE032,-7px 19px 0 #29DDE064,0 16px 0 #29DDE096,7px 21px 0 #29DDE0C8,14px 24px 0 #29DDE0FF;
  }
  100% {
    box-shadow: -14px 19px 0 #29DDE032,-7px 16px 0 #29DDE064,0 21px 0 #29DDE096,7px 24px 0 #29DDE0C8,14px 21px 0 #29DDE0FF;
  }

`;

const Motion = styled.div`
  position: relative;
  display: contents;
  width: 100%;
  height: 100%;
  &::before {
    position: absolute;
    content: "";
    width: 4px;
    height: 4px;
    top: 0;
    border-radius: 100%;
    box-shadow: -14px 19px 0 #29DDE032,-7px 16px 0 #29DDE064,0 21px 0 #29DDE096,7px 24px 0 #29DDE0C8,14px 21px 0 #29DDE0FF;
    animation: ${MotionAni} .5s linear infinite;
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
  const [islike, setLike] = useState({ main: false });
  const {
    open,
    data,
    pickAlbum,
    onClose,
    onPlay,
    nowPlaySong,
    isPlaying,
    openSinger
  } = props;
  return (
    <AlbumWrapper open={open}>
      {open ? <BtnBack onClick={onClose} /> : null}
      <AlbumBg open={open} />
      <MainArea open={open}>
        <NavTOP>
          {islike.main ? (
            <Icon
              img={likeOn}
              onClick={() => setLike({ ...islike, main: false })}
            />
          ) : (
            <Icon
              img={like}
              onClick={() => setLike({ ...islike, main: true })}
            />
          )}
          <Icon img={more} />
        </NavTOP>
        <MainInfoBox>
          <AlbumImg img={data.img} />
          <Info>
            <AlbumName>{data.name}</AlbumName>
            <Singer onClick={openSinger}>{data.singer}</Singer>
            <Year>{data.year}</Year>
            <Songs>
              共{data.songs.length}首歌曲, {data.songs.length * 3}分鐘
            </Songs>
            <InfoControl>
              <Icon img={playOn} />
              <Icon img={shuffleOn} />
            </InfoControl>
          </Info>
        </MainInfoBox>
        <MusicList className={"myScroll"}>
          {data.songs.map((item, index) => {
            return (
              <ListItem key={`songs${item}`}>
                <ItemHead onClick={() => onPlay(pickAlbum, item)}>
                  {nowPlaySong === item ? (
                    isPlaying ? (
                      <Motion />
                    ) : (
                      <img src={motion} alt={"motion"} />
                    )
                  ) : (
                    index + 1
                  )}
                </ItemHead>
                <ItemBody>
                  {item}
                  {islike[data.name + item] ? (
                    <Icon
                      img={likeOn}
                      onClick={() =>
                        setLike({ ...islike, [data.name + item]: false })
                      }
                    />
                  ) : (
                    <Icon
                      img={like}
                      onClick={() =>
                        setLike({ ...islike, [data.name + item]: true })
                      }
                    />
                  )}
                </ItemBody>
              </ListItem>
            );
          })}
        </MusicList>
      </MainArea>
    </AlbumWrapper>
  );
};

export default AlbumContainer;
