import React, { useState } from "react";
import styled, {keyframes} from "styled-components";
import BrowseTitle from "./BrowseTitle.js";
import BrowseBox from "./BrowseBox.js";
import { BtnBack } from "../Button";
import { BROWSE_DATA } from "../../MockData";

const BrowseAreaWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #393e46;
  border-radius: 16px;
  padding: 12px 16px 150px 16px;
  overflow-y: auto;
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    heigt: 54px;
    filter: blur(5);
  }
`;

const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`;

const Area = styled.div`
  height: 256px;
  opacity: 0;
  animation: ${props=>props.open?fadeIn:null} .5s .2s forwards;
`;

const BrowseArea = props => {
  const [showMore, setShowmore] = useState([false, ""]);
  const { onPick, open } = props;
  const titles = Object.keys(BROWSE_DATA);
  const onClickMore = id => {
    setShowmore([true, id]);
  };
  const onBack = () => {
    setShowmore([false, ""]);
  };
  return (
    <>
      {showMore[0] ? <BtnBack onClick={onBack} /> : null}
      <BrowseAreaWrapper className={"myScroll"}>
        {showMore[0] ? (
          <Area open={open}>
            <BrowseTitle title={showMore[1]} noMore />
            <BrowseBox data={BROWSE_DATA[showMore[1]]} onPick={onPick} showAll />
          </Area>
        ) : (
          titles.map(item => {
            return (
              <Area key={item} open={open}>
                <BrowseTitle
                  title={item}
                  onClickMore={() => onClickMore(item)}
                />
                <BrowseBox data={BROWSE_DATA[item]} onPick={onPick} />
              </Area>
            );
          })
        )}
      </BrowseAreaWrapper>
    </>
  );
};

export default BrowseArea;
