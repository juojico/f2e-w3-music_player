import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BrowswAreaWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #393e46;
  border-radius: 16px;
`;

const BrowswArea = () => {
  const [menu, setMenu] = useState([]);
  return <BrowswAreaWrapper>BrowswArea</BrowswAreaWrapper>;
};

export default BrowswArea;
