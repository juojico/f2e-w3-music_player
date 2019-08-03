import React from "react";
import styled from "styled-components";
import BrowseTitle from "./BrowseTitle.js";
import BrowseBox from "./BrowseBox.js";

const BrowseAreaWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #393e46;
  border-radius: 16px;
  padding: 12px 16px 96px 16px;
  overflow-y: auto;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    heigt: 54px;
    filter: blur(5);
  }
`;

const Area = styled.div`
  height: 256px;
`;

const onClickMore = id => {
  console.log("onClickMore", id);
};

const BrowseArea = props => {
  const { data } = props;
  const titles = Object.keys(data);
  return (
    <BrowseAreaWrapper className={"myScroll"}>
      {titles.map(item => {
        return (
          <Area key={item}>
            <BrowseTitle title={item} onClickMore={() => onClickMore(item)} />
            <BrowseBox data={data[item]} />
          </Area>
        );
      })}
    </BrowseAreaWrapper>
  );
};

export default BrowseArea;
