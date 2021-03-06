import React from "react";
import styled from "styled-components";
import { ALL_ALBUM } from "../../MockData";
import {
  taylor,
  gem,
  Cosmospeople,
  no6,
  canwe,
  relax,
  nature,
  JFla
} from "../../media/index.js";

const BrowseBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: -12px;
  margin-right: -12px;
  overflow-x: auto;
  ${props =>
    props.showAll ? `flex-wrap: wrap;padding-bottom: 150px;height:auto;` : null}
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
  cursor: pointer;
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

const BrowseBox = props => {
  const { data, showAll,onPick } = props;
  return (
    <BrowseBoxWrapper className={"myScroll"} showAll={showAll}>
      {data.map(item => {
        return (
          <Box key={`Box${item}`} showAll={showAll}>
            <AlbumImg img={ALL_ALBUM[item].img} onClick={()=>onPick(item)} />
            <AlbumName>{ALL_ALBUM[item].name}</AlbumName>
            <Info>
              <Singer>{ALL_ALBUM[item].singer}</Singer>
              <Songs>共{ALL_ALBUM[item].songs.length}首歌曲</Songs>
            </Info>
          </Box>
        );
      })}
    </BrowseBoxWrapper>
  );
};

export default BrowseBox;
