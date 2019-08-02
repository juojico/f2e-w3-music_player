import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PlayerWrapper = styled.div`
  background: #222831;
  width: 100%;
  height: 84px;
  padding: 8px 32px;
  display: flex;
  justify-content: space-between;
`;

const PlayerContainer = props => {
  const { open } = props;
  const [menu, setMenu] = useState([]);
  return (
    <>
      {open ? (
        <PlayerWrapper>PlayerContainer</PlayerWrapper>
      ) : (
        console.log("player close")
      )}
    </>
  );
};

export default PlayerContainer;
