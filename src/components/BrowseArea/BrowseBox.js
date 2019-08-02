import React from "react";
import styled from "styled-components";
import taylor from "../../media/image/taylor.png";
import gem from "../../media/image/GEM.jpg";
import Cosmospeople from "../../media/image/Cosmospeople.jpg";
import no6 from "../../media/image/NO.6 Collaborations Project.jpeg";
import canwe from "../../media/image/CanWePretend.jpg";
import relax from "../../media/image/relax.jpeg";
import nature from "../../media/image/nature.jpeg";

const BrowseBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: cale(100%+24px);
  hight: 206px;
  overflow-x: auto;
  margin-left: -12px;
  margin-right: -12px;
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
`;

const AlbumImg = styled.div`
  width: 166px;
  height: 166px;
  border-radius: 4px;
  background: url(${props => IMG[props.img]});
  background-size: cover;
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
          <Box>
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
