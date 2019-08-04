import React, { useState } from "react";
import styled from "styled-components";


const AlbumWrapper = styled.div`
  background: #222831;
  width: 100%;
  height: 84px;
  padding: 8px 32px;
  display: flex;
  justify-content: space-between;
`;

const AdContainer = props => {
  const { open } = props;
  return (
    <>
      {open ? (
        <AlbumWrapper>AlbumContainer</AlbumWrapper>
      ) : null}
    </>
  );
};

export default AdContainer;
