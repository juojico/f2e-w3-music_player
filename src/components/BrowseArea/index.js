import React from "react";
import styled from "styled-components";
import BrowseTitle from "./BrowseTitle.js";
import BrowseBox from "./BrowseBox.js";

const BrowseAreaWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #393e46;
  border-radius: 16px;
  padding: 12px 16px 96px 16px;
  overflow-Y: auto;
`;

const onClickMore = id => {
  console.log("onClickMore", id);
};

const BrowseArea = props => {
  const { data } = props;
  const titles = Object.keys(data);
  return (
    <BrowseAreaWrapper className={'myScroll'}>
      {titles.map((item, index) => {
        return (
          <>
            <BrowseTitle key={`browseTitle${item}`} title={item} onClickMore={() => onClickMore(index)} />
            <BrowseBox key={`browseBox${item}`} data={data[item]} />
          </>
        );
      })}
    </BrowseAreaWrapper>
  );
};

export default BrowseArea;
