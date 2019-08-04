import React, { useState } from "react";
import styled from "styled-components";
import AdContainer from "./AdContainer";
import AlbumContainer from "./AlbumContainer";
import BrowseContainer from "./BrowseContainer";
import PlayerContainer from "./PlayerContainer";
import MainMenuContainer from "./MainMenuContainer";
import { BROWSE_DATA, ALL_ALBUM } from "../MockData";

const MainWrapper = styled.div`
  position: relative;
  height: 100vh;
  max-width: 750px;
  margin: auto;
  background: radial-gradient(circle, #393e46 0%, #222831 100%);
  background-size: 100vw 50vw;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
  color: white;
  overflow: hidden;
`;

const Main = () => {
  const [isPagesOpen, setPagesOpen] = useState([1, 0, 0, 1]);
  const [isAdOpen, setAdOpen] = useState(false);
  const [nowPlayAlbum, setNowPlayAlbum] = useState("taylor");
  const [pickAlbum, setPickAlbum] = useState("taylor");
  const [nowPlaySong, setNowPlaySong] = useState(0);

  const handleClick = status => {
    setPagesOpen(status);
  };

  const handlePick = name => {
  console.log("TCL: Main -> PickAlbum", name)
    setPickAlbum(name);
    setPagesOpen([1, 0, 0, 1]);
  };

  return (
    <MainWrapper>
      <AdContainer open={isAdOpen} />
      <AlbumContainer open={isPagesOpen[0]} data={ALL_ALBUM[pickAlbum]} onClose={() => handleClick([0, 1, 0, 1])}/>
      <BrowseContainer open={isPagesOpen[1]} data={BROWSE_DATA} onPick={handlePick} />
      <PlayerContainer
        open={isPagesOpen[2]}
        data={ALL_ALBUM[nowPlayAlbum]}
        song={nowPlaySong}
        onOpen={() => handleClick([0, 0, 1, 0])}
        onClose={() => handleClick([0, 1, 0, 1])}
      />
      <MainMenuContainer open={isPagesOpen[3]} />
    </MainWrapper>
  );
};

export default Main;
