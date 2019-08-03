import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BarWrapper = styled.div`
  width: 100%;
  ${props =>
    props.open
      ? null
      : `position: absolute;
      top: 55px;
      left: 0;`}
`;

const BarArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Icon = styled.div``;

const BarBox = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: #393e46;
  &::before {
    position: absolute;
    content: "";
    width: ${props => props.left}%;
    height: 2px;
    left: 0;
    border-radius: 2px;
    background: #29dde0;
  }
  &::after {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    top: -6px;
    left: ${props => props.left}%;
    border-radius: 100%;
    border: 2px solid #29dde0;
    background: #222831;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2px;
  color: #a8a8a8;
  font-size: 10px;
`;

const PlayBar = props => {
  const [list, setList] = useState("");
  const { open, time, onClick } = props;
  return (
    <BarWrapper open={open}>
      <BarArea>
        <Icon />
        <BarBox left={70} />
        <Icon />
      </BarArea>
      {open ? (
        <Info>
          <span>2:57</span>
          <span>-0:33</span>
        </Info>
      ) : null}
    </BarWrapper>
  );
};

export default PlayBar;
