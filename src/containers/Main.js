import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AlbumContainer from "./AlbumContainer";
import BrowseContainer from "./BrowseContainer";
import PlayerContainer from "./PlayerContainer";
import MainMenuContainer from "./MainMenuContainer";

const MainWrapper = styled.div`
  height: 100vh;
  background: radial-gradient(circle, #393e46 0%, #222831 100%);
  background-size: 100vw 50vw;
  color: white;
  text-align: center;
`;

const Main = () => {
  const [isPagesOpen, setPagesOpen] = useState([0,1,0,1]);
  return (
    <MainWrapper>
      <AlbumContainer open={isPagesOpen[0]} />
      <BrowseContainer open={isPagesOpen[1]} />
      <PlayerContainer open={isPagesOpen[2]} />
      <MainMenuContainer open={isPagesOpen[3]} />
    </MainWrapper>
  );
};

export default Main;
