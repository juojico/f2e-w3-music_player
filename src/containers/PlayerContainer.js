import React, {useState} from "react";
import styled from "styled-components";
import PlayBar from "../components/PlayBar";
import play from "../media/slice/btn_play.svg";
import pause from "../media/slice/btn_pause.svg";
import last from "../media/slice/btn_last.svg";
import next from "../media/slice/btn_next.svg";
import down from "../media/slice/btn_down.svg";
import shuffle from "../media/slice/btn_shuffle.svg";
import shuffleOn from "../media/slice/btn_shuffle_on.svg";
import repeat from "../media/slice/btn_repeat.svg";
import repeat1 from "../media/slice/btn_repeat1.svg";
import like from "../media/slice/btn_like.svg";
import likeOn from "../media/slice/btn_like_on.svg";

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

const PlayerWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  height: 66px;
  bottom: 76px;
  width: 100%;
  max-width: 750px;
  border-top: 1px solid rgba(255, 255, 255, 0.7);
  overflow: hidden;
  transition: 0.5s;
  z-index: 30;
  ${props =>
    props.open
      ? `height: 100%;
    bottom: 0;
    flex-direction: column;
    border-top: none;`
      : null}
`;

const PlayerArea = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 6px 16px;
  ${props =>
    props.type
      ? `
      background: rgba(34, 40, 49, 0.7);
      flex-grow: 1;`
      : `
      min-height: 270px;
      margin-top: 24px;
      justify-content: center;
      overflow: hidden;
      border-radius: 20px 20px 0 0;
      box-shadow: 0 -20px 0 -8px #222831;
      &::before {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        left: 0;
        background: url(${taylorBg});
        background-size: cover;
        background-position: center;
        filter: blur(10px) contrast(0.5);
        opacity: .5;
        z-index: -1;
      }
      `}
  ${props =>
    props.open
      ? `
    flex-direction: column;`
      : null}
`;

const AlbumImg = styled.div`
  width: 44px;
  height: 44px;
  margin-right: 10px;
  border-radius: 3px;
  background: url(${props => IMG[props.img]});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  filter: drop-shadow(0 0px 5px rgba(0, 0, 0, 0.16));
  transition: 0.5s;
  ${props =>
    props.open
      ? `width: 100%;
      height: 100%;
      max-width: 276px;
      max-height: 276px;
      margin: auto;
      margin-top: -138px;
      filter: drop-shadow(0 3px 12px rgba(0, 0, 0, 0.36));`
      : null}
`;

const Info = styled.div`
  flex-grow: 1;
  font-size: 9px;
  ${props =>
    props.open
      ? `
      padding-top: 18px;
      text-align: center;`
      : null}
`;

const Songs = styled.div`
  ${props =>
    props.open ? `font-size: 24px;` : `font-size: 16px;line-height: 44px;`}
`;
const Details = styled.div`
  color: #a8a8a8;
  font-size: 12px;
`;

const Controller = styled.div`
  display: flex;
  justify-content: space-around;
  width: 132px;

  ${props =>
    props.open ? `width: 100%;padding: 0 20%;margin: 36px 0;` : null}
`;

const ControllerSong = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 27px;
`;

const Volume = styled.div``;

const PlayerIcon = styled.div`
  position: relative;
  width: 44px;
  height: 44px;
  background: url('${props => props.img}');
  background-repeat: no-repeat;
  background-size: ${props => (props.size ? props.size : "contain")};
  background-position: center;
  cursor: pointer;
`;

const CloseIcon = styled.div`
  position: relative;
  width: 76px;
  height: 76px;
  background: url('${down}');
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 12px;
  cursor: pointer;
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

const PlayerContainer = props => {
  const [iconStatus, setIconStatus] = useState([0,1,0]);
  const { open, data, song, onOpen, onClose } = props;
  return (
    <PlayerWrapper open={open}>
      {open ? (
        <PlayerArea type={0}>
          <CloseIcon onClick={onClose} />
        </PlayerArea>
      ) : null}
      <PlayerArea type={1} open={open} onClick={onOpen}>
        <AlbumImg img={data.img} open={open} />
        <Info open={open}>
          <Songs open={open}>{data.songs[song]}</Songs>
          {open ? (
            <Details>
              {data.singer},{data.name},{data.year}
            </Details>
          ) : null}
        </Info>
        <PlayBar open={open} />
        {open ? (
          <ControllerSong>
            <PlayerIcon img={shuffle} open={open} size="100%" />
            <PlayerIcon img={likeOn} open={open} size="150%" />
            <PlayerIcon img={repeat} open={open} size="100%" />
          </ControllerSong>
        ) : null}
        <Controller open={open}>
          <PlayerIcon img={last} size={open ? "150%" : null} />
          <PlayerIcon img={pause} size={open ? "150%" : null} />
          <PlayerIcon img={next} size={open ? "150%" : null} />
        </Controller>
        {open ? <Volume /> : null}
      </PlayerArea>
    </PlayerWrapper>
  );
};

export default PlayerContainer;
