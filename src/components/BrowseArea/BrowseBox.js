import React from "react";
import styled from "styled-components";
import {
  taylor,
  gem,
  Cosmospeople,
  no6,
  canwe,
  relax,
  nature
} from "../../media/index.js";

const BrowseBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  hight: 206px;
  margin-left: -12px;
  margin-right: -12px;
  overflow-x: auto;
`;

const Box = styled.div`
  width: 166px;
  text-align: left;
  margin-left: 10px;
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
  nature: nature
};

const BrowseBox = props => {
  const { data, onClickAlbum } = props;
  const items = Object.keys(data);
  return (
    <BrowseBoxWrapper className={"myScroll"}>
      {items.map(item => {
        return (
          <Box key={`Box${item}`}>
            <AlbumImg img={data[item].img} />
            <AlbumName>{data[item].name}</AlbumName>
            <Info>
              <Singer>{data[item].singer}</Singer>
              <Songs>共{data[item].songs}首歌曲</Songs>
            </Info>
          </Box>
        );
      })}
    </BrowseBoxWrapper>
  );
};

export default BrowseBox;
