import React, { useState, useEffect } from "react";
import styled from "styled-components";
import volumMin from "../../media/slice/volumMin.svg";
import volumMax from "../../media/slice/volumMax.svg";

const BarWrapper = styled.div`
  width: ${props => props.hasIcon?'60%':'80%'};
  margin: auto;
  ${props =>
    props.open
      ? null
      : `position: absolute;
      width: 100%;
      top: 55px;
      left: 0;`}
`;

const BarArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

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
    background: ${props => props.color || "#29dde0"};
  }
  &::after {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    top: -6px;
    left: ${props => props.left}%;
    border-radius: 100%;
    border: 2px solid ${props => props.color || "#29dde0"};
    background: #222831;
  }
`;


const Icon = styled.div`
  width: 20px;
  height: 16px;
  margin: 0 10px;
  background: url(${props=> props.img});
  background-repeat: no-repeat;
`
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
  const { open, time, onClick, color, hasIcon, hasInfo } = props;
  return (
    <BarWrapper open={open} hasIcon={hasIcon}>
      <BarArea>
        {hasIcon ? <Icon img={volumMin} /> : null}
        <BarBox left={time} color={color} />
        {hasIcon ? <Icon img={volumMax} /> : null}
      </BarArea>
      {open && hasInfo ? (
        <Info>
          <span>2:57</span>
          <span>-0:33</span>
        </Info>
      ) : null}
    </BarWrapper>
  );
};

export default PlayBar;
